import { useState } from "react";
import "./CSS/LoginSignup.css";

export default function LoginSignup() {
    const [state, setState] = useState("Sign Up");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    function handleChangeState() {
        setState((state) => (state === "login" ? "Sign Up" : "login"));
    }

    async function handleLogin() {
        let responseData ;
        await fetch('http://localhost:5000/login',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData)
        }).then(response => response.json()).then(data => {
            responseData = data;
        })

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }else{
            alert(responseData.message);
        }
    }

    async function handleSignup() {
        let responseData ;
        await fetch('http://localhost:5000/sign-up',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData)
        }).then(response => response.json()).then(data => {
            responseData = data;
        })

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }else{
            alert(responseData.me   ssage);
        }
    }

    function handleChange(e) {
        setFormData((formData) => {
            return { ...formData, [e.target.name]: e.target.value };
        });
    }

    return (
        <div className="login-signup">
            <div className="login-signup-container">
                <h1>{state}</h1>
                <div className="login-signup-fields">
                    {state === "Sign Up" ? (
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    ) : (
                        ""
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button
                    onClick={() => {
                        state === "login" ? handleLogin() : handleSignup();
                    }}
                >
                    Continue
                </button>
                {state === "Sign Up" ? (
                    <p className="login-signup-login">
                        Already have an account?{" "}
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={handleChangeState}
                        >
                            Login here
                        </span>
                    </p>
                ) : (
                    <p className="login-signup-login">
                        Create an account{" "}
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={handleChangeState}
                        >
                            Click here
                        </span>
                    </p>
                )}
                <div className="login-signup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>
                        By continuing, I agree to the terms of use & privacy
                        policy
                    </p>
                </div>
            </div>
        </div>
    );
}
