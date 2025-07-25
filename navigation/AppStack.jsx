import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import MovieDetailScreen from "../screens/MovieDetailScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
