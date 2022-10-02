import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLoginButton = ({ icon }) => {
  return (
    <div className="grow bg-gray-200 text-sky-900 text-center text-xl mx-2 px-5 py-2 rounded-lg cursor-pointer">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default SocialLoginButton;
