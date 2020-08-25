import { createBottomTabNavigator, BottomTabBar,createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React from 'react'
import { Image } from 'react-native'
import Main from '../../screens/Main'
import Favorites from '../../screens/Favorites'
import Workouts from '../../screens/Workouts'
import { main_logo, workout, favorite } from '../../assets/icons'

export const Tabs = createMaterialTopTabNavigator({
    A:{screen:Workouts},
    B:{screen: Favorites}
})

const TabBarComponent = (props) => (
    <BottomTabBar
      {...props}
      safeAreaInset={'bottom'}
      adaptive={true}
      style={{
        // backgroundColor: 'red',
        paddingBottom: 0,
        borderTopWidth: 0,
       // height: 55,
      }}
    />
  );

const mainTab = createBottomTabNavigator({
    Favorites: {
        screen: Favorites,
        navigationOptions:{
            tabBarIcon: ({tintColor})=>
            <Image source={favorite} style={{width:24,height: 24, tintColor: '#fff',resizeMode: 'contain'}} />}
    },
    Main: {
        screen: Main,
        navigationOptions:{
            tabBarIcon: ({tintColor})=>
            <Image source={main_logo} style={{width:24,height: 24, tintColor: '#fff',resizeMode: 'contain'}} />}
        
    },
    Workouts: {
        screen: Workouts,
        navigationOptions:{
            tabBarIcon: ({tintColor})=>
            <Image source={workout} style={{width:24,height: 24, tintColor: '#fff',resizeMode: 'contain'}} />}
    }
},{
    initialRouteName:'Main',
    tabBarComponent:(props)=><TabBarComponent {...props} />,
    tabBarOptions:{
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



export default mainTab