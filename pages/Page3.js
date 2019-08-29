import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Button, Image, TouchableHighlight, Dimensions} from 'react-native'
import NavBarComponent from './components/NavBarComponent'
import {WaveViewComponent} from './components/WaveViewComponent'
import CellComponent from './components/CellComponent'

export default class Page3 extends Component {
    render() {
        const navigation = this.props.navigation;
        return <View style={styles.container}>
            {/*导航栏*/}
            <NavBarComponent title='我的'/>
            {/*顶部水波纹*/}
            <WaveViewComponent

                surfaceHeigth={189}
            />
            <TouchableHighlight
                underlayColor={'white'}
                style={styles.touchSy}
                onPress={() => {
                    navigation.navigate('Page3Detail')
                }}


            >
                <View style={styles.account}>
                    <Image style={styles.pic} source={require('./images/未命名.gif')}/>
                    <Text style={styles.author}>关于作者 &gt;</Text>
                </View>
            </TouchableHighlight>
            {/*关于我们*/}
            <TouchableHighlight
                underlayColor={'white'}
                onPress={() => {
                    // alert('关于我们')
                    navigation.navigate('LDWebViewComponent',{'url':'https://www.jianshu.com/p/5c86690b07bd'});
                }
                }
            >
                <View style={styles.about}>
                    <CellComponent title='关于我们'/>
                </View>
            </TouchableHighlight>
            {/*流水记录*/}
            <TouchableHighlight
                underlayColor={'white'}
                onPress={() => {
                   // alert('流水记录')
                    navigation.navigate('LDWebViewComponent',{'url':'https://www.jianshu.com/p/0a6c525f7c24'});
                }
                }
            >
                <View style={styles.record}>
                    <CellComponent title="流水记录"/>
                </View>
            </TouchableHighlight>
            {/*意见反馈*/}
            <TouchableHighlight
                underlayColor={'white'}
                onPress={() => {
                    //alert('意见反馈')
                    navigation.navigate('LDWebViewComponent',{'url':'https://www.jianshu.com/p/80e6b8908ede'});
                }
                }
            >
                <View style={styles.backQuestion}>
                    <CellComponent title="意见反馈"/>
                </View>
            </TouchableHighlight>
            {/*联系方式*/}
            <TouchableHighlight
                underlayColor={'white'}
                onPress={() => {
                   // alert('联系方式')
                    navigation.navigate('LDWebViewComponent',{'url':'https://www.jianshu.com/p/a8b2cc0065f8'});
                }
                }
            >
                <View style={styles.connect}>
                    <CellComponent title="联系方式"/>
                </View>
            </TouchableHighlight>
            {/*退出*/}
            <TouchableHighlight
                underlayColor={'white'}
                onPress={() => {
                    //alert('退出')
                    navigation.navigate('LDWebViewComponent',{'url':'https://www.jianshu.com/p/448688fbbb57'});
                }
                }
            >
                <View style={styles.connect}>
                    <CellComponent title="退出"/>
                </View>
            </TouchableHighlight>


        </View>
    }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(244,244,244)'
    },
    touchSy: {
        width: width,
        height: 189,
        //backgroundColor:'red',
        marginTop: -189
    },
    account: {
        //marginTop: -180,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pic: {
        width: 120,
        height: 120
    },
    author: {
        marginTop: 10,
        fontSize: 17
    },
    about: {
        marginTop: 5
    },
    record: {
        marginTop: 5,
    },
    backQuestion: {
        marginTop: 5,
    },
    connect: {
        marginTop: 5,
    }

});

/**
 *
 * <Text>Page3</Text>
 <Button
 title='跳转详情'
 onPress={() => {
                    navigation.navigate('Page3Detail')
                }}
 />
 *
 * */