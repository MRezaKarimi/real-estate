import {
  faApple,
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FilledButton } from "./buttons";
import FormHeader from "./forms/formHeader";
import InputField from "./inputFields/inputField";
import NavBarLink from "./navbarLink";
import SocialLoginButton from "./socialLoginButton";

const Login = () => {
  document.title = "Login";
  return (
    <div className="flex flex-col m-auto w-11/12 max-w-sm">
      <FormHeader title="Login to your account" />
      <InputField placeholder="Username" name="username" />
      <InputField placeholder="Password" name="password" type="password" />
      <FilledButton text="Login" />
      <div className="self-center my-7">
        New user?
        <NavBarLink to="/sign-up" label="Sign Up" />
      </div>
      <div className="relative my-5">
        <div className="h-[0.1rem] bg-gray-300 rounded-xl mx-auto w-full"></div>
        <div className="bg-white absolute -top-2.5 mx-auto left-0 right-0 w-fit px-3 text-center text-sky-700 font-semibold text-sm">
          Or Login With
        </div>
      </div>
      <div className="flex justify-between">
        <SocialLoginButton icon={faGoogle} />
        <SocialLoginButton icon={faFacebookF} />
        <SocialLoginButton icon={faLinkedinIn} />
        <SocialLoginButton icon={faApple} />
      </div>
    </div>
  );
};

export default Login;
