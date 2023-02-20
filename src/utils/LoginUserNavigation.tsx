import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
// import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { FC } from 'react';
import ForgotPassword from '../screens/ForgotPassword/ForgotpasswordScreen';
import Login from '../screens/Login/LoginScreen';
import SubLogin from '../screens/Login/SubLoginScreen';

export type RootStackParamList = {
  Login: undefined;
  SubLogin: undefined;
  ForgotPassword: undefined;
  // Feed: { sort: 'latest' | 'top' } | undefined;
};
export type LoginScreenProps = StackScreenProps<RootStackParamList, "Login">
export type SubLoginScreenProps = StackScreenProps<RootStackParamList, "SubLogin">
export type ForgotpasswordScreenProps = StackScreenProps<RootStackParamList, "ForgotPassword">

const RootStack = createStackNavigator<RootStackParamList>();


const LoginUserStack: FC<{}> = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="ForgotPassword">
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="SubLogin"
          component={SubLogin}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="ForgotPassword"
          component={ForgotPassword}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default LoginUserStack;
