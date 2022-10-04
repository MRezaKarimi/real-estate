import {
  faApple,
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FilledButton } from "./buttons";
import FormHeader from "./forms/formHeader";
import HorizontalDivider from "./horizontalDivider";
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
      <div className="my-6">
        <HorizontalDivider>
          <span className="text-sky-700">Or Login With</span>
        </HorizontalDivider>
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
