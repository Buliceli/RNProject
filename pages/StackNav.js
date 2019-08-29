import React,{Component} from 'react'
import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation'

import BottomNav from './BottomNav'
import Page1Detail from './Page1Detail'
import Page2Detail from './Page2Detail'
import Page3Detail from './Page3Detail'
import AddDetail from './AddDetail'
import LDWebViewComponent from './components/LDWebViewComponent'
import Login from './Login'
const stackNav = createStackNavigator({

    // Login:{
    //     screen:Login,
    //     navigationOptions:{
    //         title:'登录'
    //     }
    // },
   BottomNav:{
       screen:BottomNav,
       navigationOptions:{
           //title:'首页',
           header:null
       }
   },
    Page1Detail:{
       screen:Page1Detail,
        navigationOptions:{
           title:'详情'
        }
    },
    Page2Detail:{
        screen:Page2Detail,
        navigationOptions:{
            title:'理财详情'
        }
    },
    Page3Detail:{
        screen:Page3Detail,
        navigationOptions:{
            title:'作者LD',
            headerBackTitle:'返回'
        }
    },
    AddDetail:{
       screen:AddDetail,
        navigationOptions:{
            title:'申请购买'
        }
    },
    LDWebViewComponent:{
       screen:LDWebViewComponent,
        navigationOptions:{
           title:'博客'
        }
    }




});
export default createAppContainer(stackNav);