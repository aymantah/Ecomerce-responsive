import React, {useState} from 'react'
import { storage, db } from '../config/Config'
import { Link } from 'react-router-dom'



export const AddAccProducts = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productOldPrice, setProductOldPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');
    const types = ['image/png', 'image/jpeg']; 





    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }
    

    const addAccProduct = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-acc-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message)
            , () => {
                storage.ref('product-acc-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('Products-acc').add({
                        ProductName: productName,
                        ProductPrice: Number(productPrice),
                        ProductOldPrice: Number(productOldPrice),
                        ProductImg: url
                    }).then(() => {
                        setProductName('');
                        setProductPrice(0);
                        setProductOldPrice(0);
                        setProductImg('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
            setError('done');
    }

    return (
        <div className='container'>
        <br />
            <div className="text-center nav-txt">Camisitaillos</div>
            <br />
            <h2>Ajouter un accessoire</h2>
            <hr />
            <form autoComplete="off" className='form-group' onSubmit={addAccProduct}>
                <label htmlFor="product-name">Nom</label>
                <br />
                <input type="text" className='form-control' required
                    onChange={(e) => setProductName(e.target.value)} value={productName}/>
                <br />
                <label htmlFor="product-price">Prix en solde</label>
                <br />
                <input type="number" className='form-control' required 
                    onChange={(e) => setProductPrice(e.target.value)} value={productPrice}
                />
                <br />
                <label htmlFor="product-price">Prix hors solde</label>
                <br />
                <input type="number" className='form-control' required 
                    onChange={(e) => setProductOldPrice(e.target.value)} value={productOldPrice}
                />
                <br />
                <label htmlFor="product-img">Image</label>
                <br />
                <input type="file" className='form-control' id="file" required onChange={productImgHandler}/>
                <br />
                <br />
                <button type="submit" className='btn btn-success btn-md mon-btn'>Ajouter</button>
                <br />
                <button className='btn btn-success btn-md mon-btn'><Link className="navlink" to="/admin">Dashboard</Link></button>
            </form>
            {error && <span>{error}</span>}
        </div>
    )
}
