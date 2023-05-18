import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import StorePointForm from "../components/StorePointForm";

export default function AddPointStore(){
    return(
        <>
            <div className="d-flex">
                <div>
                    <SideBar active={""}/>
                </div>
                <div className="overflow-auto other-side">
                    <NavBar />
                    <StorePointForm />
                </div>
            </div>
        </>
    )
}