import viteSvg from "../../public/vite.svg";

export default function SideBar() {
    return (
        <div className="side-left">
            <div className="nav-brand">
                <img src={viteSvg} alt="" />
                <h1>Ev</h1>
            </div>
        </div>   
    )
}