// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import JoditEditor from 'jodit-react';
import { Button, Form } from '../../node_modules/react-bootstrap/esm/index';

export default function ArticleForm() {
    const [content, setContent] = useState('');
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [dateCreation, setDateCreation] = useState('');


    const handleContentChange = (value: any) => {
        setContent(value);
    };
      

    const handleSubmit = (event : any )=>{
        event.preventDefault();
        const data = {
            titre:titre,
            description:description,
            contenu: content
        }

        fetch('http://localhost:3000/articles',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'token': ""+localStorage.getItem("token"),
                'userId': ""+localStorage.getItem('userId')
            },
            body:JSON.stringify(data)
        }).then((response)=>{
            return response.json();
        }).then((value)=>{
            console.log(value)
        }).catch((error)=>{
            console.log(error)
        });
        console.log(data)
    }

    return (
        <div>
            <h2>Ajouter un article</h2>
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="titre">Titre</label>
                    <input type="text" name="titre" id="titre" onChange={(e:any)=>setTitre(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" onChange={(e:any)=>setDescription(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label>
                        Contenu
                    </label>
                    <JoditEditor
                        value={content}
                        onChange={handleContentChange}
                        config={{
                            readonly: false // set this to true to disable editing
                        }}
                    />
                </div>
                <div className='form-group'>
                    <input type="submit" className='btn btn-primary' value="Inserer" />
                </div>
            </Form>
        </div>
    );
}