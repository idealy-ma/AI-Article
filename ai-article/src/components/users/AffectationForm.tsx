import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { PointDeVente } from '../../models/PointDeVente';
import { Users } from '../../models/Users';

interface AffectationFormProps {
    userid:string
}

export default function AffectationForm(props : AffectationFormProps) {
    const [pointDeVenteId, setPointDeVenteId ] = useState(1);
    const [user, setUser] = useState<any>();  
    
    // Data
    const [pointDeVente, setPointDeVente] = useState<any[]>();


    const handleSubmit = (event : any )=>{
        event.preventDefault();
        const data = user;

        data.pointdeventeid = pointDeVenteId
        delete data.id;
        delete data.link;
        delete data.icon;
        console.log("data : "+JSON.stringify(data));
        new Users().update(props.userid,data);
    }

    useEffect(()=>{
        new PointDeVente().findAll().then((data)=>{
            setPointDeVente(data);
            // console.log(pointDeVente)
        })
        new Users().findById(parseInt(props.userid)).then((user)=>{
            setUser(user)
            console.log(user)
        })
    },[]);

    return (
        <div className='i-card'>
            <h4>Affecter {user?.nom} vers</h4>
            <br />
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="titre">Point de vente</label>
                    <select name="marque" className='form-control' onChange={(e:any)=>setPointDeVenteId(e.target.value)}>
                        {
                            pointDeVente?.map((value)=>{
                                return (
                                    <option value={value.id}>{value.label}</option>
                                )
                            })
                        }
                    </select>
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