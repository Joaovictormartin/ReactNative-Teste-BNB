import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import { AuthRoutes } from './auth.routes';
import ForgetPassword from '../screens/ForgetPassword';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => (
  <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Screen name="Login" component={Login} />
    <Screen name="AuthRoutes" component={AuthRoutes} />
    <Screen name="ForgetPassword" component={ForgetPassword} />
  </Navigator>
);
