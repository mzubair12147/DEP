import allProducts from './all_product.js';

for (const product in allProducts){
    handleAddProduct(product);
}

async function handleAddProduct(product){
    let responseData = undefined;
    
    let formData = new FormData();
    formData.append('product', product.image);

    await fetch('http://localhost:5000/upload',{
        method:'POST',
        headers:{
            Accept:'applicatoin/json'
        },
        body:formData
    }).then(response => response.json()).then(data => {
        responseData = data;
    })


    if(responseData.success){
        product.image = responseData.data.imgUrl;
        console.log(responseData.data);
        await fetch('http://localhost:5000/add-product',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product)
        }).then(response => response.json()).then(data => {
            if(data.success){
                alert("Product Added");
            }else{
                console.log(data.message);
                alert("product addition is failed");
            }
        })
    }
}