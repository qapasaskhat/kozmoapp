import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import tabs from '../TabNavigator'
import {Profile,ProfileEdit,UserCard,UserFaq,RequestWorkout, Main} from '../../screens'

const stack = createStackNavigator({
    Main: {
        screen: Main,
    },
    Profile:{
        screen: Profile
    },
    ProfileEdit,
    UserCard,
    UserFaq,
    RequestWorkout
},{
    headerMode: 'none'
})
//const main = createAppContainer(stack)
export default stack