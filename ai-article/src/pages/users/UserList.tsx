import { useEffect, useState } from "react"
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import TableCard from "../../components/TableCard";
import { Users } from "../../models/Users";

export default function UserList() {
    const [pointDeVentes,setPointDeVentes] = useState<any[]>();

    useEffect(()=>{
        new Users().findAll().then((value)=>{
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
                    <TableCard data={pointDeVentes} columns={["id","nom","link"]}></TableCard>
                </div>
            </div>
        </>
    )
}