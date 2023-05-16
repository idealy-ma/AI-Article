import { useEffect, useState } from "react"
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TableCard from "../components/TableCard";

export default function Index() {
    const [articles,setArticles] = useState<any[]>();

    useEffect(()=>{
        fetch('http://localhost:3000/articles',{
            method:'GET'
        }).then((response)=>{
            return response.json();
        }).then((value)=>{
            console.log(value)
            setArticles(value)
        }).catch((error)=>{
            console.log(error)
        });
    },[]);
    return(
        <>
            <SideBar active={""}/>
            <NavBar />
            <TableCard data={articles} columns={["id","titre","description","date","contenu"]}></TableCard>
        </>
    )
}