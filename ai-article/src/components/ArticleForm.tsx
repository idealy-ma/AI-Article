// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import JoditEditor from 'jodit-react';
import { Button, Form } from '../../node_modules/react-bootstrap/esm/index';

export default function ArticleForm() {
    const [content, setContent] = useState('');
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [dateCreation, setDateCreation] = useState('');


    const handleContentChange = (value: any) => {
        setContent(value);
    };

    const handleFileChange = (e : any)=> {
        setImage(e.target.files ? e.target.files[0] : null);
    };

    const handleSubmit = (event : any )=>{
        event.preventDefault();
        console.log("image : "+JSON.stringify(image));
        const formData = new FormData();
        if(image) formData.append('image', image);
        formData.append('titre',titre);
        formData.append('description',description);
        formData.append('contenu', content);

        // console.log(formData.get("image"))

        fetch('http://localhost:3000/articles',{
            method:'POST',
            headers:{
                'token': ""+localStorage.getItem("token"),
                'userId': ""+localStorage.getItem('userId')
            },
            body:formData
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
                    <label htmlFor="image">Upload image</label>
                    <input type="file" onChange={handleFileChange} />
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