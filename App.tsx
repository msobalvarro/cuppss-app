import { createStackNavigator, createAppContainer } from 'react-navigation'
import Index from './views/Index/Index'
import Login from './views/Login/Login'
import MenuHostelier from './views/Hotelier/Menu/Menu'
import Products from './views/Hotelier/Products/Products'

const AppNavigation = createStackNavigator(
    {
        Index,
        Login,
        MenuHostelier,
        Products,
    },
    {
        initialRouteName: "Products",
        headerMode: "none",
        
    }
)

export default createAppContainer(AppNavigation)