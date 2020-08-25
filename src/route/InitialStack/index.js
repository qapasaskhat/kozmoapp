import {createStackNavigator} from 'react-navigation-stack'
import AppLoader from '../AppLoader'
import AuthStack from '../Auth'
import App from '../InstructorRoute'

const app = createStackNavigator({
    AuthStack:{
        screen: AuthStack
    },
    AppLoader:{
        screen: AppLoader
    },
    App:{
        screen: App
    }
},{
    initialRouteName: 'AuthStack',
    headerMode: 'none'
})
export default app