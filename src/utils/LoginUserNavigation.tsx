import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
// import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { FC } from 'react';
import SignUp from '../pages/SignUp/Index';
import Login from '../pages/Login/Index';
import SubLogin from '../pages/SubLogin/Index';
import ForgotPassword from '../pages/ForgotPassword/Index';
import VerifyOTP from '../pages/VerifyOTP/Index';
import Payment from '../pages/WelcomePayment/Index';

export type RootStackParamList = {
  Login: undefined;
  SubLogin: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  VerifyOTP: undefined;
  Payment: undefined;
  // Feed: { sort: 'latest' | 'top' } | undefined;
};
export type LoginScreenProps = StackScreenProps<RootStackParamList, "Login">
export type SubLoginScreenProps = StackScreenProps<RootStackParamList, "SubLogin">
export type SignUpScreenProps = StackScreenProps<RootStackParamList, "SignUp">
export type ForgotPasswordScreenProps = StackScreenProps<RootStackParamList, "ForgotPassword">
export type VerifyOTPScreenProps = StackScreenProps<RootStackParamList, "VerifyOTP">
export type PaymentScreenProps = StackScreenProps<RootStackParamList, "Payment">

const RootStack = createStackNavigator<RootStackParamList>();


const LoginUserStack: FC<{}> = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="SignUp">
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
          name="SignUp"
          component={SignUp}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="VerifyOTP"
          component={VerifyOTP}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="Payment"
          component={Payment}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default LoginUserStack;
