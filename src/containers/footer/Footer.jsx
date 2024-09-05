import './footer.css';
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
const Footer = () => {
    return (
        <div className="dgi__footer" id="footer">
            <div className="dgi__footer-item">
                <CiMail /> dirk.giese70@gmail.com
            </div>
            <div className="dgi__footer-item">
                <BsTelephone />  +49 01743023947
            </div>
            <div className="dgi__footer-item">
                <LiaMapMarkerAltSolid /> Bahlingen am Kaiserstuhl
            </div>
        </div>
    )
}
export default Footer
