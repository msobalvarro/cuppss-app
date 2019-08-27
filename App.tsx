import { createStackNavigator, createAppContainer } from 'react-navigation'
import Index from './views/Index/Index'
import Login from './views/Login/Login'
import MenuHostelier from './views/Hotelier/Menu/Menu'
import Products from './views/Hotelier/Products/Products'
import BrandsProducts from './views/Hotelier/BrandsProducts/BrandsProducts'

const AppNavigation = createStackNavigator(
    {
        Index,
        Login,
        MenuHostelier,
        Products,
        BrandsProduct: BrandsProducts
    },
    {
        initialRouteName: "Products",
        headerMode: "none",
        
    }
)

export default createAppContainer(AppNavigation)