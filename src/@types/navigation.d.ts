type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Favorite: undefined;
  ClientsMap: undefined;
  NewRegister: undefined;
  AuthRoutes: undefined;
  ForgetPassword: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
