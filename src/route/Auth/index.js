import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import { Auth, Register, ResetPassword, Registration, CodeScreen ,UserRegistration,FirstBalans} from '../../screens'
import Main from '../StackNavigator'
import InstMain from '../InstructorRoute'

const AuthStack = createStackNavigator({
    Auth: {
        screen: Auth
    },
    Register: {
        screen: Register
    },
    ResetPassword:{
        screen: ResetPassword
    },
    Registration:{
        screen: Registration
    },
    CodeScreen:{
        screen: CodeScreen
    },
    UserRegistration,
    FirstBalans,
    Main,
    InstMain
},{
    initialRouteName: 'Auth',
    defaultNavigationOptions:{
        headerShown: null
    }
})

export default AuthStack

