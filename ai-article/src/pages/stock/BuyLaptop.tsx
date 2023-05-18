import { useEffect } from "react";
import { useParams } from "../../../node_modules/react-router-dom/dist/index";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";


export default function BuyLaptop(){
    const {id} = useParams();

        useEffect(()=>{
            console.log("id : "+ id);
        });
    return(
        <>
            <div className="d-flex">
                <div>
                    <SideBar active={""}/>
                </div>
                <div className="overflow-auto other-side">
                    <NavBar />
                </div>
            </div>
        </>
    )
}