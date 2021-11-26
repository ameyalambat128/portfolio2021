import "./contact.scss";
import { ContactInfo } from "../../constants/constants";
import Divider from "../style/Divider";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="bottom-contacts">
        <div className="title">Contact</div>
        <Divider />
        <div className="details-wrapper">
          {ContactInfo.map(({ icon, name }) => (
            <div className="details">
              {icon}
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
