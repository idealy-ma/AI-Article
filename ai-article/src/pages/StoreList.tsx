import { useEffect, useState } from "react"
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TableCard from "../components/TableCard";
import { PointDeVente } from "../models/PointDeVente";

export default function StoreList() {
    const [pointDeVentes,setPointDeVentes] = useState<any[]>();

    useEffect(()=>{
        new PointDeVente().findAll().then((value)=>{
            setPointDeVentes(value)
        })
    },[]);

    return(
        <>
            <div className="d-flex">
                <div>
                    <SideBar active={""}/>
                </div>
                <div className="overflow-auto other-side">
                    <NavBar />
                    <TableCard data={pointDeVentes} columns={["id","label"]}></TableCard>
                </div>
            </div>
        </>
    )
}