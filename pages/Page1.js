import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    DeviceInfo,
    ScrollView,
    TouchableHighlight
} from 'react-native'
import Page1Detail from './Page1Detail'
import NavBarComponent from './components/NavBarComponent'
import SwiperComponent from './components/SwiperComponent'
import BannerComponent from './components/BannerComponent'
import TableViewCell from './components/TableViewCell'
import store from './store'
//import LDWebViewComponent from './components/LDWebViewComponent'

export default class Page1 extends Component {

    firstCellClick(index) {
        const navigation = this.props.navigation;
        if (index === '1') {
            let name = '企业经营产品Q0030-20';
            let pay_statue = '未还款'
            navigation.navigate('Page2Detail', {
                'total_money': 12000,
                'process': '30%',
                rate: '7.66',
                'name': name,
                'pay_statue': pay_statue
            })
        } else {
            let name = '企业经营产品Q0030-20';
            let pay_statue = '未还款'
            navigation.navigate('Page2Detail', {
                'total_money': 98000,
                'process': '30%',
                rate: '9.16',
                'name': name,
                'pay_statue': pay_statue
            })
        }

    }

    /*订阅store*/
    componentDidMount() {
        let unsubscribe = store.subscribe(() => {
            // console.warn(navigation);
            const navigation = this.props.navigation;
            if (store.getState().index === '1') {
                navigation.navigate('LDWebViewComponent',{'url':'https://www.jianshu.com/p/5eb6710f17da'});
            } else if (store.getState().index === '2') {
                navigation.navigate('LDWebViewComponent',{'url':'https://www.jianshu.com/p/a462244c1eca'});
            } else if (store.getState().index === '3') {
                navigation.navigate('LDWebViewComponent',{'url':'https://www.jianshu.com/p/dc941c66576d'});
            }
        });
    }

    render() {
        const navigation = this.props.navigation;
        return <View style={styles.container}>
            <ScrollView>
                {/*导航栏*/}
                <NavBarComponent title='首页'/>
                {/*轮播图*/}
                <View style={styles.swiper}>
                    <SwiperComponent/>
                </View>
                {/*bandar*/}
                <View style={styles.banner}>
                    <BannerComponent/>
                </View>
                {/*table*/}
                <View style={styles.tableStyle}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={() => {
                        this.firstCellClick('1')
                    }}>
                        <TableViewCell/>
                    </TouchableHighlight>
                    <View style={styles.secondCell}>
                        <TouchableHighlight underlayColor={'transparent'} onPress={() => {
                            this.firstCellClick('2')
                        }}>
                            <TableViewCell/>
                        </TouchableHighlight>
                    </View>
                </View>
                {/*bottom*/}
                <View style={styles.bottomStyle}>
                    <Text style={styles.textS}>
                        -市场有风险,投资需谨慎-
                    </Text>
                    <Text style={styles.textS}>
                        ©️山东兴丰投资有限公司版权所有
                    </Text>
                </View>

            </ScrollView>
        </View>
    }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        marginTop: 0

    },
    swiper: {
        height: 200
    },
    banner: {
        height: 200,
        width: width,
    },
    tableStyle: {
        height: 435,
        width: width - 40,
        marginLeft: 20
    },
    secondCell: {
        marginTop: 20
    },
    bottomStyle: {
        backgroundColor: 'rgb(242,242,242)',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textS: {
        color: 'gray'
    }

});


{/*<Text>Page1</Text>*/
}
{/*<Button*/
}
{/*title='跳转详情页'*/
}
{/*onPress={()=>{*/
}
{/*navigation.navigate('Page1Detail');*/
}
{/*}}*/
}

{/*/>*/
}