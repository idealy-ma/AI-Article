import { useState } from 'react';
import { Form } from 'react-bootstrap';
// import { PointDeVente } from '../models/PointDeVente';

export default function UsersForm() {
    const [nom, setNom] = useState('');  
    const [login, setLogin] = useState('');    
    const [password, setPassword] = useState('');    


    const handleSubmit = (event : any )=>{
        event.preventDefault();

        const data = {
            nom: nom,
            login: login,
            password: password
        }
        console.log("data : "+JSON.stringify(data));
        // new PointDeVente().create(data);
    }

    return (
        <div>
            <h4>Ajoute une utilisater</h4>
            <br />
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="description">Nom</label>
                    <input type="text" className='form-control' name="prix" id="description" onChange={(e:any)=>setNom(e.target.value)}/>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="description">Login</label>
                    <input type="text" className='form-control' name="prix" id="description" onChange={(e:any)=>setLogin(e.target.value)}/>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="description">Password</label>
                    <input type="password" className='form-control' name="prix" id="description" onChange={(e:any)=>setPassword(e.target.value)}/>
                </div>
                <br />
                <div className="row">
                    <div className='form-group'>
                        <input type="submit" className='btn btn-primary form-control' value="Inserer" />
                    </div>
                </div>
            </Form>
        </div>
    );
}