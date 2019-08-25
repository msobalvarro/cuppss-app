import { createStackNavigator, createAppContainer } from 'react-navigation'
import Index from './views/Index/Index'
import Login from './views/Login/Login'
import MenuHostelier from './views/Hotelier/Menu/Menu';

const AppNavigation = createStackNavigator(
    {
        Index,
        Login,
        MenuHostelier,
    },
    {
        initialRouteName: "MenuHostelier",
        headerMode: "none",
        
    }
)

export default createAppContainer(AppNavigation)