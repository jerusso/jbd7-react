import Instagram from "../assets/Instagram-gray80.svg";
import MailIcon from "../assets/MailIcon-gray80.svg";
import Behance from "../assets/behance-gray80.svg";

const SocialMedia = () => {
    return (
      <div>
        <div className="d-inline-block icon-wrapper">
          <a
            href="https://www.behance.net/johnerusso"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Behance} alt="Behance icon" />
          </a>
        </div>
        <div className="d-inline-block icon-wrapper">
          <a
            href="https://www.instagram.com/jackbiltdesigns/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram icon" />
          </a>
        </div>
        <div className="d-inline-block icon-wrapper">
          <a
            href="mailto:info@jackbiltdesigns.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={MailIcon} alt="Mail icon" />
          </a>
        </div>
      </div>
    );
}

export default SocialMedia;