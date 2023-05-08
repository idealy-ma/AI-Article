import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Do something with the email and password values
    fetch('http://localhost:3000/users/login',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({email:email, password:password})
    }).then((response)=>{
        alert("Success")
        return response.json();
    },(error)=>{
        alert("Error : " + JSON.stringify(error));
    }).then((value)=>{
        alert(JSON.stringify(value));
    });
  };

  return (
    <Container>
        <div className="p-3 margin-auto shadow-md w-50">
            <h2 className='text-center'>Ai.Art</h2>
            <Form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" id="email" className='form-control' placeholder='exemple@gmail.com' 
                        onChange={(event)=>{setEmail(event.target.value)}}
                    />
                </div>            
                <br />
                <div className='form-group'>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" className='form-control' placeholder='password' 
                        onChange={(event)=>{setPassword(event.target.value)}}
                    />
                </div>
                <br />
                <div className='form-group'>
                    <input type="submit" value="Login" className='btn btn-primary form-control' />
                </div>
            </Form>
        </div>
    </Container>
  );
}

export default Login;
