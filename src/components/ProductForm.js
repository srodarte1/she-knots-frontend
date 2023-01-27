import React, { useState } from 'react'

const ProductForm = () => {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [frontImage, setFrontImage] = useState('');
    const [backImage, setBackImage] = useState('');
    const [products, setProducts] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target
        setName({...name, [name]: value})
        setPrice({...price, [name]: value})
        setDescription({...description, [name]: value})
        setQuantity({...quantity, [name]: value})
        setFrontImage({...frontImage, [name]: value})
        setBackImage({...backImage, [name]: value})
        setProducts({...products, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        debugger
        fetch('http://localhost:9292/products', {
        method: 'POST',
        body: JSON.stringify({
            name,
            price,
            description,
            quantity,
            frontImage,
            backImage
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        }).then((response) => {
        if (response.ok) {
            setName('');
            setPrice('');
            setDescription('');
            setQuantity('');
            setFrontImage('');
            setBackImage('');
            setProducts(products);
        } 
        });
    };
    
    // const [response, setResponse] = useState(null)

    // const handleSubmit = async (event) => {
    //     event.preventDefault()

    //     try {
    //         const res = await fetch('http://localhost:9292/product', {
    //             method: 'POST',
    //             body: JSON.stringify({key: 'value'}),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         const json = await res.json()
    //         setResponse(json)
    //     }   catch (error) {
    //         console.error(error)
    //     }
    // }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="name" name="name" value={name} type="text" placeholder="Product name..." onChange={handleChange} /><br />
                <input id="price" name="price" value={price} type="number" placeholder="Price" onChange={handleChange} /><br />
                <input id="description" name="description" value={description} type="text" placeholder="Description" onChange={handleChange} /><br />
                <input id="quantity" name="quantity" value={quantity} type="number" placeholder="Quantity" onChange={handleChange} /><br />
                <input id="front_image" name="front_image" value={frontImage} type="file" onChange={handleChange} /><br />
                <input id="back_image" name="back_image" value={backImage} type="file" onChange={handleChange} /><br />
                <button id="submit" type="submit">Submit new product.</button>
                {/* discount? */}
            </form>
        </div>
    )
}

export default ProductForm