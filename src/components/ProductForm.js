import React, { useState } from 'react'

const ProductForm = ({setProducts}) => {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [inventory, setInventory] = useState('');
    const [frontImage, setFrontImage] = useState('');
    const [backImage, setBackImage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === 'name') setName(value)
        if(name === 'price') setPrice(value)
        if(name === 'description') setDescription(value)
        if(name === 'inventory') setInventory(value)
        if(name === 'front_image') setFrontImage(value)
        if(name === 'back_image') setBackImage(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('inventory', inventory);
        formData.append('front_image', frontImage);
        formData.append('back_image', backImage);
        fetch('http://localhost:9292/products', {
        method: 'POST',
        body: formData,
        }).then((response) => {
        if (response.status === 201) {
            response.json()
            .then((newProductObj) => {
                setName('');
                setPrice('');
                setDescription('');
                setInventory('');
                setFrontImage('');
                setBackImage('');
                setProducts(currentProducts => [...currentProducts, newProductObj.product]);
            })
        } 
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="name" name="name" value={name} type="text" placeholder="Product name..." onChange={handleChange} /><br />
                <input id="price" name="price" value={price} type="number" placeholder="Price" onChange={handleChange} /><br />
                <input id="description" name="description" value={description} type="text" placeholder="Description" onChange={handleChange} /><br />
                <input id="inventory" name="inventory" value={inventory} type="number" placeholder="Inventory" onChange={handleChange} /><br />
                <input id="front_image" name="front_image" value={frontImage} type="text" placeholder="URL of front image" onChange={handleChange} /><br />
                {/* https://i.imgur.com/VvWgntu.png */}
                <input id="back_image" name="back_image" value={backImage} type="text" placeholder="URL of back image" onChange={handleChange} /><br />
                {/* https://i.imgur.com/mJejCWD.png */}
                <button id="submit" type="submit">Submit new product.</button>
            </form>
        </div>
    )
}

export default ProductForm