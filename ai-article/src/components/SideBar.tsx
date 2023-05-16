import viteSvg from "../../public/vite.svg";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
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
                    <Link to="#"><ShowChartIcon></ShowChartIcon></Link>
                </div>
                <div className="icon">
                    <Link to="#"><FactCheckOutlinedIcon></FactCheckOutlinedIcon></Link>
                </div>
                <div className="icon">
                    <Link to="/login"><LogoutOutlinedIcon></LogoutOutlinedIcon></Link>
                </div>
            </div>
        </div>   
    )
}