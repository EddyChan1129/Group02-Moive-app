import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { COLORS } from "../MyStyle";

const Stack = createNativeStackNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        options={{ title: "Sign In", headerShown: false }}
        name="SignInScreen"
        component={SignInScreen}
      />

      <Stack.Screen
        options={{ title: "Sign up" }}
        name="SignUpScreen"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
