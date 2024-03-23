import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import RestaurantMap from '../screens/Dashboard/RestaurantMap';
import DrawerNavigator from './DrawerNavigator';



const App = createNativeStackNavigator();


const AppNavigator = () => {
  return (
   <App.Navigator>

    

    <App.Screen name ={"DrawerNavigator"} component={DrawerNavigator} options={{ headerShown: false}}/>

    <App.Screen name ={"HomeScreen"} component={HomeScreen} options={{ headerShown: false}}/>

    <App.Screen name ={"RestaurantMap"} component={RestaurantMap} options={{ headerShown: false}}/>


 </App.Navigator>
 
   
  )
}

export default AppNavigator;
