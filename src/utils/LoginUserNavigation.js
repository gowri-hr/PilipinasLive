import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/LoginScreen';
import SubLogin from '../screens/SubLoginScreen';

const Stack = createStackNavigator();

const LoginUserStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SubLogin"
          component={SubLogin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginUserStack;
