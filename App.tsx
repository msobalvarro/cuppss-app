import { createStackNavigator, createAppContainer } from 'react-navigation'
import Index from './views/Index/Index'
import Login from './views/Login/Login'
import MenuHostelier from './views/Hotelier/Menu/Menu'
import Products from './views/Hotelier/Products/Products'
import BrandsProduct from './views/Hotelier/BrandsProducts/BrandsProducts'
import ProductModel from './views/Hotelier/ProductModel/ProductModel'

const AppNavigation = createStackNavigator(
    {
        Index,
        Login,
        MenuHostelier,
        Products,

        // This needs props for to work
        BrandsProduct,

        ProductModel,
    },
    {
        initialRouteName: "Index",
        headerMode: "none",
    }
)

export default createAppContainer(AppNavigation)