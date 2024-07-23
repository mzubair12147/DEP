import './AddProduct.css'
import areaImage from '../../assets/upload_area.svg';
import { useState } from 'react';

export default function AddProduct() {
    const [image,setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        newPrice:"",
        oldPrice:"",
    })

    function handleImage(e){
        setImage(e.target.files[0]);
    }

    function changeHandler(e){
        setProductDetails((productDetails) => {return {...productDetails, [e.target.name]: e.target.value}})
    }

    async function handleAddProduct(){
        let responseData = undefined;
        let product = productDetails;
        
        let formData = new FormData();
        formData.append('product', image);

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

  return (
    <div className='add-product'>
        <div className='add-product-item-field' >
            <p>Product title</p>
            <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type name' />
        </div>
        <div className='add-product-price'>
            <div className='add-product-item-field' >
                <p>Price</p>
                <input value={productDetails.oldPrice} type='text' onChange={changeHandler} name='oldPrice' placeholder='Type here' />
            </div>

            <div className='add-product-item-field' >
                <p>Offer Price</p>
                <input value={productDetails.newPrice} type='text' onChange={changeHandler} name='newPrice' placeholder='Type here' />
            </div>
        </div>
        <div className='add-product-item-field'>
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kids">Kids</option>
            </select>
        </div>
        <div className='add-product-item-field'>
            <label htmlFor='file-input'>
                <img  src={image ? URL.createObjectURL(image) : areaImage} alt='area image' className='add-product-thumbnail-image' />
            </label>

            <input  onChange={handleImage} type='file' name='image' id='file-input' hidden />

        </div>
        <button onClick={handleAddProduct} className='add-product-btn'>Add</button>
    </div>
  )
}
