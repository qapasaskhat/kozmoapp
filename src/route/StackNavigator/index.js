import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import tabs from '../TabNavigator'
import Profile from '../../screens/Profile'

const stack = createStackNavigator({
    Main: {
        screen: tabs,
    },
    Profile:{
        screen: Profile
    }
},{
    headerMode: 'none'
})
//const main = createAppContainer(stack)
export default stack