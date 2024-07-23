const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");
const { connectMongodb, upload } = require("./helper");
const Product = require("./models/Product");
const User = require("./models/User");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const JWT_SECRET = "secret for jwt tokens";

connectMongodb();

app.use("/images", express.static("./uploads/images"));

app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: true,
        data: {
            imgUrl: `http://localhost:${PORT}/images/${req.file.filename}`,
        },
    });
});

async function getUser(req, res, next) {
    const token = req.header("auth-token");
    if (!token) {
        res.send({
            success: false,
            error: "Please authenticate using valid token",
        });
    } else {
        try {
            const data = jwt.decode(token, JWT_SECRET);
            req.user = data.user;
        } catch (error) {
            res.send({ success: false, error: error.message });
        }
    }
    next();
}

app.post("/add-product", async (req, res) => {
    try {
        if (!req.body) {
            res.send({
                success: false,
                message: "Please provide all the required fields.",
            });
        }
        const id = Date.now();
        const product = new Product({
            ...req.body,
            id,
            newPrice: Number(req.body.newPrice),
            oldPrice: Number(req.body.oldPrice),
        });
        await product.save();
        res.send({
            success: true,
            message: "Product successfully added",
            data: product,
        });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
});

app.post("/remove-product", async (req, res) => {
    try {
        if (!req.body.id) {
            res.send({ success: false, message: "Please provide product id." });
        }
        const product = await Product.findOneAndDelete({ id: req.body.id });
        res.send({
            success: true,
            message: "Product deleted successfully",
            name: product.name,
        });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
});

app.get("/all-products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.send({
            success: true,
            message: "Products fetched successfully",
            data: products,
        });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
});

app.post("/sign-up", async (req, res) => {
    try {
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            res.status(400).send({
                success: false,
                message: "An account with this email is already exists",
                error: "Existing User",
            });
        }

        let cart = {};
        for (let index = 0; index < 300; index++) {
            cart[index] = 0;
        }

        const user = new User({ ...req.body, cart: cart });
        await user.save();

        const data = {
            user: {
                id: user.id,
            },
        };

        const token = jwt.sign(data, JWT_SECRET);
        res.send({ success: true, token });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
});

app.post("/login", async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            const pass = req.body.password === user.password;
            if (pass) {
                const data = {
                    user: {
                        id: user.id,
                    },
                };
                const token = jwt.sign(data, JWT_SECRET);
                res.send({ success: true, token });
            } else {
                res.status(400).send({
                    success: false,
                    message: "invalid credentials",
                    error: "user not found",
                });
            }
        } else {
            res.send({
                success: false,
                error: "There is no account with this email ID",
            });
        }
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
});

app.get("/newCollection", async (req, res) => {
    try {
        const products = await Product.find({});
        let newCollection = products.slice(1).slice(-8);
        res.send({
            success: true,
            data: newCollection,
            message: "collection fetched successfully",
        });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
});

app.get("/popular-in-women", async (req, res) => {
    try {
        const products = await Product.find({ category: "women" });
        let popularInWomen = products.slice(0, 4);
        res.send({
            success: true,
            data: popularInWomen,
            message: "collection fetched successfully",
        });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
});

app.post("/add-to-cart", getUser, async (req, res) => {
    try {
        let user = User.findOne({ _id: req.user.id });
        user.cart[req.body.id] += 1;
        User.findOneAndUpdate({ _id: req.user.id }, { cart: user.cart });
        res.send({ success: true, message: "Added" });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
});

app.post("/remove-from-cart", getUser, async (req, res) => {
    try {
        let user = User.findOne({ _id: req.user.id });
        if (user.cart[req.body.id] > 0) user.cart[req.body.id] -= 1;
        User.findOneAndUpdate({ _id: req.user.id }, { cart: user.cart });
        res.send({ success: true, message: "Removed" });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
});

app.get("/get-cart", getUser, async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.user.id });
        res.send({ success: true, data: user.cart });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`The server is running at port : ${PORT}`);
});
