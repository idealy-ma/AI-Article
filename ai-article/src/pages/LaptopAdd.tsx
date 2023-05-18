import LaptopForm from "../components/LaptopForm";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function LaptopAdd() {
    return(
        <>
            <div className="d-flex">
                <div>
                    <SideBar active={""}/>
                </div>
                <div className="overflow-auto other-side">
                    <NavBar />
                    <LaptopForm />
                </div>
            </div>
        </>
        
    )
}