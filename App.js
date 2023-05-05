import DeliveryApp from './components/DeliveryApp'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Details from './components/Details';
const Stack=createStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
<Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DeliveryApp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
</NavigationContainer>
  );
}