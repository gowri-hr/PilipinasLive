import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
// import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { FC } from 'react';
import Login from '../screens/LoginScreen';
import SubLogin from '../screens/SubLoginScreen';

export type RootStackParamList = {
  Login: undefined;
  SubLogin: undefined;
  // Feed: { sort: 'latest' | 'top' } | undefined;
};
export type LoginScreenProps = StackScreenProps<RootStackParamList, "Login">
export type SubLoginScreenProps = StackScreenProps<RootStackParamList, "SubLogin">

const RootStack = createStackNavigator<RootStackParamList>();


const LoginUserStack: FC<{}> = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="SubLogin">
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
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default LoginUserStack;
