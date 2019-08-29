import React, {Component} from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native'
import action from '../action'
import store from '../store'
import {bannerClickAction} from "../action/index";
export default class BannerComponent extends Component {
    bannerClick(index) {
        //alert(index);
        /*发送action*/
        //bannerClickAction(index);
        store.dispatch(bannerClickAction(index))
    }

    render() {
        return (
            /*Top*/
            <View style={styles.top}>
                <View style={styles.ver}/>
                <Text style={styles.textStyle}>
                    兴朋产品
                </Text>
                {/*左*/}
                <TouchableWithoutFeedback onPress={() => {
                    this.bannerClick('1')
                }}>
                    <View style={styles.squre}>
                        <Text style={styles.mainTitle}>
                            企业风采
                        </Text>
                        <Text style={styles.subTitle}>
                            大平台收益稳
                        </Text>
                        <Image
                            source={require('../images/fengcaizhanshi.png')}
                            style={styles.bottomImage}
                        />
                    </View>
                </TouchableWithoutFeedback>
                {/*中*/}
                <TouchableWithoutFeedback onPress={() => {
                    this.bannerClick('2')
                }}>

                    <View style={styles.squre1}>
                        <Text style={styles.mainTitle}>
                            理财公告
                        </Text>
                        <Text style={styles.subTitle}>
                            致富信息及时
                        </Text>
                        <Image
                            source={require('../images/gonggao.png')}
                            style={styles.bottomImage}
                        />

                    </View>

                </TouchableWithoutFeedback>
                {/*右*/}
                <TouchableWithoutFeedback onPress={() => {
                    this.bannerClick('3')
                }}>

                    <View style={styles.squre2}>
                        <Text style={styles.mainTitle}>
                            客服反馈
                        </Text>
                        <Text style={styles.subTitle}>
                            随时为您服务
                        </Text>
                        <Image
                            source={require('../images/kefu-2.png')}
                            style={styles.bottomImage}
                        />

                    </View>

                </TouchableWithoutFeedback>
            </View>
        )
    }
}
const {width} = Dimensions.get('window');
const squreWidth = (width - 4 * 20) / 3;
const styles = StyleSheet.create({
    top: {
        // backgroundColor: 'red',
        height: 50,
        alignItems: 'center',
        flexDirection: "row",
    },
    ver: {
        width: 3,
        height: 25,
        backgroundColor: 'orange',
        marginLeft: 20,
    },
    textStyle: {
        fontSize: 18,
        marginLeft: 20,
        width: 100
    },
    squre: {
        height: 120,
        width: squreWidth,
        backgroundColor: 'rgb(229, 246, 237)',
        alignSelf: 'flex-start',
        marginTop: 60,
        marginLeft: -123,
        borderRadius: 4
    },
    squre1: {
        height: 120,
        width: squreWidth,
        backgroundColor: 'rgb(254, 246, 229)',
        alignSelf: 'flex-start',
        marginTop: 60,
        marginLeft: 20,
        borderRadius: 4
    },
    squre2: {
        height: 120,
        width: squreWidth,
        backgroundColor: 'rgb(251, 237, 255)',
        alignSelf: 'flex-start',
        marginTop: 60,
        marginLeft: 20,
        borderRadius: 4
    },
    mainTitle: {
        justifyContent: 'center',
        marginLeft: 10,
        fontSize: 17,
        marginTop: 10

    },
    subTitle: {
        color: 'gray',
        marginLeft: 10,
        marginTop: 5
    },
    bottomImage: {
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        marginTop: 12,

    }
});