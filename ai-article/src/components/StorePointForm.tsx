import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { PointDeVente } from '../models/PointDeVente';

export default function StorePointForm() {
    const [label, setLabel] = useState('');    

    const handleSubmit = (event : any )=>{
        event.preventDefault();

        const data = {
            label: label,
        }
        console.log("data : "+JSON.stringify(data));
        new PointDeVente().create(data);
    }

    return (
        <div>
            <h4>Ajout d'un point de vente</h4>
            <br />
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="description">Nom du point</label>
                    <input type="text" className='form-control' name="prix" id="description" onChange={(e:any)=>setLabel(e.target.value)}/>
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