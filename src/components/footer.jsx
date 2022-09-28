import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

const SocialIcon = ({ icon, url }) => {
  return (
    <a href={url ?? "#"} target="blank">
      <FontAwesomeIcon
        icon={icon}
        className="border-[1px] border-white rounded-full p-1.5 mx-1 w-4 h-4"
      />
    </a>
  );
};

const Footer = () => {
  return (
    <div className="bg-sky-900 py-5 px-10 flex flex-col sm:flex-row text-white justify-between items-center">
      <ul>
        <li>
          <Link to="/buy">Buy property</Link>
        </li>
        <li>
          <Link to="/sell">Sell property</Link>
        </li>
      </ul>
      <div className="flex flex-col text-center">
        <p className="text-2xl font-semibold mb-3">MyEstate</p>
        <p className="text-sm text-gray-200">&copy;2022 All rights reserved</p>
      </div>
      <ul>
        <li>
          <a href="mailto:info@myestate.com">info@myestate.com</a>
        </li>
        <li>
          <div className="flex my-3">
            <SocialIcon
              icon={faGithub}
              url="https://github.com/MRezaKarimi/real-estate"
            />
            <SocialIcon icon={faTwitter} />
            <SocialIcon icon={faLinkedinIn} />
            <SocialIcon icon={faInstagram} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
