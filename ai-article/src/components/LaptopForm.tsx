// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect, useState } from 'react';
import JoditEditor from 'jodit-react';
import { Button, Form } from 'react-bootstrap';
import { Marque } from '../models/Marque';
import { Processeur } from '../models/Processeur';
import { TypeDur } from '../models/TypeDur';

// "reference":"TUF GAMING DASH15",
// "ram":8093,
// "processeurid":1,
// "memoire":512,
// "frequence":3040,
// "ecran":15,
// "prix":12000,
// "typedurid":2,
// "marqueid":1

export default function LaptopForm() {
    const [reference, setReference] = useState('');
    const [ram, setRam] = useState(0);
    const [memoire, setMemoire] = useState(0);
    const [ecran, setEcran] = useState(0);
    const [prix, setPrix] = useState(0);
    const [frequence, setFrequence] = useState(0);
    const [processeur, setProcesseur] = useState(1);
    const [dur, setDur] = useState(1);
    const [marqueid, setMarqueId] = useState(1);

    // Data
    const [marque, setMarque] = useState<any[]>();
    const [processeurs, setProcesseurs] = useState<any[]>();
    const [durs, setDurs] = useState<any[]>();
    
    // UseEffect
    useEffect(()=>{
        new Marque().findAll().then((value:any[])=>{
            setMarque(value)
        })
        new Processeur().findAll().then((value:any[])=>{
            setProcesseurs(value)
            // console.log(processeurs)
        })

        new TypeDur().findAll().then((value:any[])=>{
            setDurs(value)
            // console.log(processeurs)
        })
    },[])


    const handleSubmit = (event : any )=>{
        event.preventDefault();

        const data = {
            reference: reference,
            ram: parseInt(ram),
            processeurid : parseInt(processeur),
            memoire: parseInt(memoire),
            frequence: parseInt(frequence),
            ecran: parseInt(ecran),
            prix: parseFloat(prix),
            typedurid: parseInt(dur),
            marqueid: parseInt(marqueid)
        }
        console.log("data : "+JSON.stringify(data));

        fetch('http://localhost:3000/laptops',{
            method:'POST',
            headers:{
                'token': ""+localStorage.getItem("token"),
                'userId': ""+localStorage.getItem('userId'),
                'Content-Type': "application/json"
            },
            body:JSON.stringify(data)
        }).then((response)=>{
            return response.json();
        }).then((value)=>{
            console.log(value)
        }).catch((error)=>{
            console.log(error)
        });
    }

    return (
        <div>
            <h4>Ajout d'un portable</h4>
            <Form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="titre">Marque</label>
                            <select name="marque" className='form-control' onChange={(e:any)=>setMarqueId(e.target.value)}>
                                {
                                    marque?.map((value)=>{
                                        return (
                                            <option value={value.id}>{value.nom}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="titre">Reference</label>
                            <input type="text" className='form-control' name="reference" id="titre" onChange={(e:any)=>setReference(e.target.value)}/>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="description">Ecran (")</label>
                            <input type="number" className='form-control' name="ecran" id="description" onChange={(e:any)=>setEcran(e.target.value)}/>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="titre">Processeur</label>
                            <select name="processeur" className='form-control' onChange={(e:any)=>setProcesseur(e.target.value)}>
                                {
                                    processeurs?.map((value)=>{
                                        return (
                                            <option value={value.id}>{value.reference}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="titre">Type du disque dur</label>
                            <select name="typedur" className='form-control' onChange={(e:any)=>setDur(e.target.value)}>
                                {
                                    durs?.map((value)=>{
                                        return (
                                            <option value={value.id}>{value.label}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="titre">Ram (GB)</label>
                            <input type="number" className='form-control' name="ram" id="titre" onChange={(e:any)=>setRam(e.target.value)}/>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="description">Memoire (GB)</label>
                            <input type="number" className='form-control' name="memoire" id="description" onChange={(e:any)=>setMemoire(e.target.value)}/>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="description">Frequence du processeur (Mhz)</label>
                            <input type="number" className='form-control' name="frequence" id="description" onChange={(e:any)=>setFrequence(e.target.value)}/>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="description">Prix (Ar)</label>
                            <input type="number" className='form-control' name="prix" id="description" onChange={(e:any)=>setPrix(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className='form-group'>
                            <input type="submit" className='btn btn-primary form-control' value="Inserer" />
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
}