import "./contact.scss";
import { ContactInfo } from "../../constants/constants";
import Divider from "../style/Divider";
import { AiOutlineCopyright } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="bottom-contacts">
        <div className="title">Contact</div>
        <Divider />
        <div className="copyright">
          <AiOutlineCopyright />
          Ameya Lambat
        </div>
        <div className="details-wrapper">
          {ContactInfo.map(({ icon, name, link, id }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="details"
            >
              <div className="icon" key={id}>
                {icon}
                {name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
