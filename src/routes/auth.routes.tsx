import { Platform, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../styles/theme';
import { ButtonGoBack } from '../components/ButtonGoBack';

import Home from '../screens/Home';
import User from '../assets/svg/User';
import Phone from '../assets/svg/Phone';
import Register from '../screens/Register';
import Favorite from '../assets/svg/Favorite';
import FavoritePage from '../screens/Favorite';
import ClientsMap from '../screens/ClientsMap';
import NewRegister from '../screens/NewRegister';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tabs.Navigator initialRouteName="Home">
    <Tabs.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
        tabBarIcon: ({ color }) => (
          <Phone width={26} height={26} fill={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Register"
      component={Register}
      options={{
        headerTitleAlign: 'left',
        headerLeft: () => <ButtonGoBack />,
        headerTintColor: theme.colors.white,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
        headerTitle: () => <Text style={styles.title}>Cadastros</Text>,
        tabBarIcon: ({ color }) => <User width={26} height={26} fill={color} />,
        headerStyle: {
          backgroundColor: theme.colors.primary,
          height: Platform.OS === 'ios' ? 80 : 100,
        },
      }}
    />
    <Tabs.Screen
      name="Favorite"
      component={FavoritePage}
      options={{
        headerTitleAlign: 'left',
        headerLeft: () => <ButtonGoBack />,
        headerTintColor: theme.colors.white,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
        headerTitle: () => <Text style={styles.title}>Favoritos</Text>,
        tabBarIcon: ({ color }) => (
          <Favorite width={26} height={26} fill={color} />
        ),
        headerStyle: {
          backgroundColor: theme.colors.primary,
          height: Platform.OS === 'ios' ? 80 : 100,
        },
      }}
    />
  </Tabs.Navigator>
);

export const AuthRoutes = () => (
  <Stack.Navigator
    initialRouteName="TabNavigator"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="NewRegister" component={NewRegister} />
    <Stack.Screen name="ClientsMap" component={ClientsMap} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: theme.colors.white,
  },
});
