import viteSvg from "../../public/vite.svg";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "../../node_modules/react-router-dom/dist/index";


interface SideBarProps {
    active:string
}


export default function SideBar(props : SideBarProps) {
    return (
        <div className="side-left">
            <div className="nav-brand">
                <img src={viteSvg} alt="" />
            </div>
            <div className="link">
                <div className="icon">
                    <Link to="/"><DashboardIcon/>  <span>Dashboard</span></Link>
                </div>
                <div className="icon">
                    <Link to="/article-add"><AddIcon/>  <span>Add Material</span></Link>
                </div>
                <div className="icon">
                    <Link to="#"><FactCheckOutlinedIcon/>  <span>Liste</span></Link>
                </div>
                <div className="icon">
                    <Link to="/login"><LogoutOutlinedIcon/>  <span>Deconnection</span></Link>
                </div>
            </div>
        </div>   
    )
}