import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import UsersForm from "../../components/users/UsersForm";


export default function UserAdd(){
    return(
        <>
            <div className="d-flex">
                <div>
                    <SideBar active={""}/>
                </div>
                <div className="overflow-auto other-side">
                    <NavBar />
                    <UsersForm />
                </div>
            </div>
        </>
    )
}