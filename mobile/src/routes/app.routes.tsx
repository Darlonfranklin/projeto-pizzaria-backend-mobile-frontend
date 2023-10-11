import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Dashboard";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
