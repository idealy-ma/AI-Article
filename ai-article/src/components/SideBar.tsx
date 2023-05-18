import viteSvg from "../../public/vite.svg";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import StoreIcon from '@mui/icons-material/Store';
import LaptopIcon from '@mui/icons-material/Laptop';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Link } from "../../node_modules/react-router-dom/dist/index";


interface SideBarProps {
    active:string
}


export default function SideBar(props : SideBarProps) {
    return (
        <div className="side-left">
            <div className="nav-brand">
                <img src={viteSvg} alt="" />
                <h5>Mikolo shop</h5>
            </div>
            <div className="link">
                <div className="icon">
                    <Link to="/"><DashboardIcon/>  <span>Dashboard</span></Link>
                </div>
                {/* <p><b>gestion de laptop</b></p> */}
                <div className="icon">
                    <Link to="/add-laptop"><LaptopIcon/>  <span>Ajout de laptop</span></Link>
                </div>
                <div className="icon">
                    <Link to="/add-store"><AddBusinessIcon/>  <span>Ajout de point de vente</span></Link>
                </div>
                <div className="icon">
                    <Link to="/store-list"><StoreIcon/>  <span>Liste de point de vente</span></Link>
                </div>
                <div className="icon">
                    <Link to="/user-add"><GroupAddIcon/>  <span>Ajouter des utilisateurs</span></Link>
                </div>
                <div className="icon">
                    <Link to="/login"><LogoutOutlinedIcon/>  <span>Deconnection</span></Link>
                </div>
            </div>
        </div>   
    )
}