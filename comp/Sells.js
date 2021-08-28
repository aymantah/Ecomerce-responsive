import React, {useState} from 'react';
import './style.css';
import { storage, db } from '../config/Config'
import { Link } from 'react-router-dom'


function Import() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [adresse, setAdresse] = useState('');
    const [quantity, setQuantity] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const types = ['image/png', 'image/jpeg']; 

    const designImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setDesignImg(selectedFile);
            setError('')
        }
        else {
            setDesignImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    const addDesign = (e) => {
        e.preventDefault();
                    db.collection('Sells').add({
                        Name: name,
                        Email: email,
                        Adresse: adresse,
                        Quantity: quantity,
                        Phone: phone,
                    }).then(() => {
                        setName('');
                        setEmail('');
                        setAdresse('');
                        setQuantity('');
                        setPhone('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
            setError('done, vous receverez un message de confirmation dans moins de 24h. SVP ne quittez pas la page avant que les champs deviennent vides');
    }


    return (
        <div class="container1">
            <h2 className="text-center">Importer un design</h2>
            <br />
            <form onSubmit={addDesign}>
                <label for="fname">Nom et Prenom</label>
                <br />
                <input type="text" id="input-field" name="firstname" placeholder="Nom Complet.." 
                required onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <label for="fname">Tel</label>
                <br />
                <input type="tel" id="input-field" name="firstname" placeholder="Numero de telephone"
                required onChange={(e) => setPhone(e.target.value)} value={phone} />
                <br />
                <label for="fname">Email</label>
                <br />
                <input type="text" id="input-field" name="firstname" placeholder="Email.." 
                required onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label for="fname">Adresse</label>
                <br />
                <input type="text" id="input-field" name="firstname" placeholder="Adresse, ville et Zip.."
                required onChange={(e) => setAdresse(e.target.value)} value={adresse} />
                <br />
                <label for="type">Type de materiel</label>
                <br />
                <input type="text" id="input-field" name="firstname" placeholder="T-sirt, capuche, Mug, coussin, cadre photo, trophee, pochette, porte cle.."
                required onChange={(e) => setType(e.target.value)} value={type} />
                <br />
  
                <label htmlFor="product-img">Design</label>
                <br />
                <input type="file" className='form-control' id="file" required onChange={designImgHandler} />
                <br />
                <label for="fname">Quantite</label>
                <br />
                <input type="number" id="input-field" name="firstname" placeholder="Nombre de pieces?"
                required onChange={(e) => setQuantity(e.target.value)} value={quantity} />
                <br />
                <br />
                <button type="submit" className='btn btn-success btn-md mon-btn'>Confirmer</button>
                <br />
                <button className='btn btn-success btn-md mon-btn'><Link className="navlink" to="/">Accueil</Link></button>


                {/* <label for="country">Country</label>
                <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                </select>
                <div></div> */}
            </form>
            {error && <span>{error}</span>}
        </div>
    );
}

export default Import;