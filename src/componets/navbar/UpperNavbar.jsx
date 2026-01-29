import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelopeOpen,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGooglePlus,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import csss from "./SiteNavbar.module.css";

function UpperNavbar() {
  return (
    <div className={csss.upNavbar}>
      <div className={csss.row}>
        <p>
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          <a href="mailto:sales@hknfasteners.com?subject=Inquiry">
            <span className="elementor-icon-list-text">
              sales@hknfasteners.com
            </span>
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} />
          <span className="elementor-icon-list-text">+91 9253170017</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarker}> </FontAwesomeIcon>
          <span className="elementor-icon-list-text">
            Near Jind By Pass, Jind Rd, Rohtak, Haryana 124001
          </span>
        </p>
      </div>
      <div>
        <a href="https://www.facebook.com/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://accounts.google.com/" target="_blank">
          <FontAwesomeIcon icon={faGooglePlus} />
        </a>
        <a
          href="https://www.instagram.com/pushpendersinghberwal/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}
export default UpperNavbar;

// const ani = keyframes`
// 100%{
// opacity:0;
// transform: translateX(-10px);
// }
// 0%{
// opacity:1;
// transform: translateX(0px);
// }`;
// const Ani1 = styled.p`
// animation: ${ani}
// animation-duration: 1s`;
