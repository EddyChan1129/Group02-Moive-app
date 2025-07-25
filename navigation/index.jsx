import { userAuthentication } from "../config/userAuthentication";
import AppStack from "./AppStack";
import WelcomeStack from "./WelcomeStack";

const RootNavigation = () => {
  const { user } = userAuthentication();

  return user ? <AppStack /> : <WelcomeStack />;
};

export default RootNavigation;
