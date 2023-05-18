import { useEffect } from "react";
import { useParams } from "../../../node_modules/react-router-dom/dist/index";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import AffectationForm from "../../components/users/AffectationForm";


export default function UserAffect(){
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
                    <AffectationForm userid={id} />
                </div>
            </div>
        </>
    )
}