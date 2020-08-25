import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator,BottomTabBar} from 'react-navigation-tabs'
import {
    InstMain,
    InstWorkouts,
    InstEditProfile,
    Withdraw,
    InstStatistic,
    Photo,
    Invertory,
    Skills,
    Support, 
    CreateWorkout,
    Date,
    HistoryWorkout,
    OpenWorkout,
    Week,
    Address,
    Time,
    Reviews,
    ReplyReviews,
    FAQ
} from '../../screens'
import React from 'react'
import { main_logo, workout, star } from '../../assets/icons'
import { Image, Text } from 'react-native'

const TabBarComponent = (props) => (
    <BottomTabBar
      {...props}
      safeAreaInset={'bottom'}
      adaptive={true}
      style={{
        // backgroundColor: 'red',
        paddingBottom: 0,
        borderTopWidth: 0,
        height: 50,
      }}
    />
  );
const Main = createStackNavigator({
    Cabinet:{
        screen:InstMain
    },
    InstEditProfile,
    Withdraw,
    InstStatistic,
    Photo,
    Invertory,
    Skills,
    CreateWorkout,
    Support,
    Date,
    HistoryWorkout,
    OpenWorkout,
    Week,
    Address,
    Time,
    FAQ
},{
    headerMode:'none',
})
const ReviewsStack = createStackNavigator({
    Reviews,
    ReplyReviews
},{
    headerMode: 'none'
})

const Tabs = createBottomTabNavigator({
    Reviews:{
        screen: ReviewsStack,
        navigationOptions:{
            tabBarIcon: ({tintColor})=>
            <Image source={star} style={{
                width: 20,
                height: 20,
                resizeMode: 'center',
                tintColor: tintColor
            }}/>
        }
    },
    Cabinet:{
        screen: Main,
        navigationOptions: {
            tabBarIcon:({tintColor})=>
            <Image source={main_logo} style={{
                tintColor: tintColor,
                width: 20,
                height: 20,
                resizeMode: 'center',
                
            }} />,
            tabBarLabel: 'Личный кабинет'
        }
    },
    InstWorkouts:{
        screen: InstWorkouts,
        navigationOptions: {
            tabBarIcon:({tintColor})=>
            <Image source={workout} style={{
                tintColor: tintColor,
                width: 20,
                height: 24,
                resizeMode: 'center',

            }} />,
            tabBarLabel: 'Тренировки',
        }
    }
},{
    defaultNavigationOptions:{
        
    },
    navigationOptions:{
        
    },
    tabBarComponent:(props)=><TabBarComponent {...props} />,
    tabBarOptions:{
        activeTintColor: '#FFF614',
        tabStyle:{
            backgroundColor:'#000',
            marginBottom: '-9%',
            borderWidth:6,
            borderTopColor: '#000',
            //borderTopColor: 'red',
            paddingBottom: '5%'
        },
        labelPosition: 'below-icon',
        labelStyle:{
            color: '#fff',
            fontSize: 14,
            marginBottom:'5%',
        },
        
    }
})

export default Tabs