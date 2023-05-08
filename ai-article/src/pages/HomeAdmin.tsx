import { useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import dreamImg from "../assets/images/dream.png";

export default function HomeAdmin() {

    // alert(dreamImg);

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
            <NavBar />
            <Header 
                imageBg={dreamImg}
            />
        </div>
    );
}