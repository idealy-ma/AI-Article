import { useEffect, useState } from "react"
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TableCard from "../components/TableCard";

export default function Index() {
    const [articles,setArticles] = useState<any[]>();

    useEffect(()=>{
        fetch('http://localhost:3000/laptops',{
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
            <div className="d-flex">
                <div>
                    <SideBar active={""}/>
                </div>
                <div className="overflow-auto other-side">
                    <NavBar />
                    <TableCard data={articles} columns={["id","reference","ram", "memoire"]}></TableCard>
                </div>
            </div>
        </>
    )
}