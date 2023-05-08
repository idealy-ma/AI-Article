import { useEffect, useState } from "react"
import ArticleCard from "../components/ArticleCard";

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
            {
                articles?.map((value)=> <ArticleCard key={value.id} article={value} />)
            }  
        </>
    )
}