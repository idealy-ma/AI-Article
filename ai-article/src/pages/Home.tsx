import { useEffect } from "react";

export default function Home() {

    useEffect(()=>{
        fetch('http://localhost:3000/users/profile',{
            method:'GET',
            headers:{
                'token': ""+localStorage.getItem("token"),
                'userId': ""+localStorage.getItem('userId')
            }
        }).then((response)=>{
            console.log("Success")
            return response.json();
        },(error)=>{
            console.log("Error : " + JSON.stringify(error));
        }).then((value)=>{
            console.log(JSON.stringify(value));
        });
    },[]);
    return (
        <div>
            
        </div>
    );
}