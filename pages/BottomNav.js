import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import {
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Ionicons from 'react-native-vector-icons/AntDesign'

const Bottom = createBottomTabNavigator({
    Page1:{
        screen:Page1,
        navigationOptions:{
            tabBarLabel:'首页',
            tabBarIcon:({tintColor})=>(
                <Ionicons
                name = 'pluscircleo'
                size={26}
                style={{color:tintColor}}
                />
            )
        }
    },
    Page2:{
        screen:Page2,
        navigationOptions:{
            tabBarLabel:'资讯',
            tabBarIcon:({tintColor})=>(
                <Ionicons
                    name = 'creditcard'
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    Page3:{
        screen:Page3,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({tintColor})=>(
                <Ionicons
                    name = 'cloudupload'
                    size={26}
                    style={{color:tintColor}}
                />
            ),


        }
    },

});
export default Bottom;
//export default createAppContainer(Bottom);