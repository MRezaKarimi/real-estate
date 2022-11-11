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
    <div className="bg-sky-900 py-5 text-white">
      <div className="w-11/12 mx-auto flex flex-col sm:flex-row gap-y-5 justify-between items-center text-center sm:text-start">
        <ul>
          <li>
            <Link to="/buy">Buy property</Link>
          </li>
          <li>
            <Link to="/sell">Sell property</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite properties</Link>
          </li>
        </ul>
        <div className="flex flex-col text-center order-last sm:order-none">
          <p className="text-2xl font-semibold mb-3">MyEstate</p>
          <p className="text-sm text-gray-200">
            &copy;2022 All rights reserved
          </p>
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
    </div>
  );
};

export default Footer;
