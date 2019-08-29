import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native'
import {BoxShadow} from 'react-native-shadow'
import Ionicons from 'react-native-vector-icons/Entypo'
import AnimatedLineProgressBar from './AnimatedLineProgressBar'

export default class DetailComponent extends Component {
    _renderircleText(arr) {
        return <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <View style={{marginTop: -10}}>
                <Ionicons
                    name={'controller-record'}
                    size={13}
                    style={{color: arr[1] === '1' ? 'rgb(255,139,71)' : 'rgb(220,220,220)'}}
                />
            </View>
            <View>
                <Text>
                    {arr[0]}
                </Text>
                <Text style={{fontSize: 12, color: 'gray'}}>
                    2019-02-26
                </Text>
            </View>
        </View>
    }

    _renderTextTopBottom(arr) {
        return <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 17, fontWeight: '600'}}>
                {arr[0]}
            </Text>
            <Text style={{color: 'gray', marginTop: 5}}>
                {arr[1]}
            </Text>
        </View>
    }

    render() {
       // console.warn(this.props.item);
        const data = this.props.item;
       const progress = parseInt(data.process);
        return <View style={styles.container}>
            <View style={styles.top}>
                <BoxShadow setting={shadowOpt}>
                    <View style={styles.container1}>
                        <View style={styles.toptop}>
                            <View style={styles.toptopLeft}>
                                <Text style={{
                                    flex: 2,
                                    textAlign: 'center',
                                    lineHeight: 55,
                                    fontSize: 28,
                                    fontWeight: '800',
                                    color: 'rgb(255,139,71)'
                                }}>{data.rate}</Text>
                                <Text style={{flex: 1, textAlign: 'center'}}>预计年化率</Text>
                            </View>
                            <View style={styles.toptopRight}>
                                <AnimatedLineProgressBar
                                    style={{
                                        marginTop: 10,
                                        height: 8,
                                        width: width * 0.4 - 20
                                    }}

                                    progressTotal={100}
                                    progressNumber={progress}
                                    strokeWidth={0}
                                    barStartColor={'rgb(232,191,69)'}
                                    barEndColor={'rgb(248,96,52)'}
                                />
                                <Text style={{color: 'gray', fontSize: 12, marginTop: 5}}>投资进度{data.process}</Text>
                            </View>
                        </View>
                        <View style={styles.topmiddle}>
                            {this._renderTextTopBottom([data.total_money, '项目总额'])}
                            {this._renderTextTopBottom(['4804元', '剩余可投'])}
                            {this._renderTextTopBottom(['1年', '投资期限'])}
                        </View>
                        <View style={styles.topbottom}>
                            <View style={{flex: 1, justifyContent: 'space-around'}}>
                                <Text style={{marginLeft: 5, color: 'gray', fontSize: 12}}>起购金额:¥ 100</Text>
                                <Text style={{marginLeft: 5, color: 'gray', fontSize: 12}}>还款方式:到期还本付息</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'space-around'}}>
                                <Text style={{marginLeft: 5, color: 'gray', fontSize: 12}}>起息方式:满标后次日计息</Text>
                                <Text style={{marginLeft: 5, color: 'gray', fontSize: 12}}>距离投资期限截止:已结束</Text>
                            </View>
                        </View>
                    </View>
                </BoxShadow>
                <View style={styles.bottom}>
                    {this._renderircleText(['募集开始', '1'])}
                    {this._renderircleText(['开始计息', '0'])}
                    {this._renderircleText(['到期还款', '0'])}
                </View>
            </View>
            <View style={styles.add}>
                    <Text style={{justifyContent:'center',textAlign:'center',lineHeight:50,fontSize: 18, color: 'white', fontWeight: '800',width:width,height:50}}
                          onPress={()=>{
                              this.props.nav.navigate('AddDetail',data)
                          }}
                    >
                        立即加入
                    </Text>
            </View>
        </View>
    }
}
const {width} = Dimensions.get('window');

const shadowOpt = {
    width: width - 20,
    height: 200,
    color: '#000',
    border: 1,
    radius: 3,
    opacity: 0.1,
    x: 0.2,
    y: 1,
    style: {marginVertical: 2},
};

const styles = StyleSheet.create({
    toptopLeft: {
        //backgroundColor:'orange',
        flex: 1,
        alignItems: 'center',

    },
    toptopRight: {
        //backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    toptop: {
        flex: 1,
        //backgroundColor: 'red',
        flexDirection: 'row'
    },
    topmiddle: {
        flex: 1,
        //backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topbottom: {
        flex: 1,
        //backgroundColor: 'blue',
        flexDirection: 'row'

    },
    add: {
        backgroundColor: 'rgb(70,135,221)',
        height: 50,
        //alignSelf:'center'
        //marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        width:width
    },

    container: {
        flex: 1,
        backgroundColor: 'rgb(246,246,246)'
    },
    container1: {
        width: width - 20,
        height: 200,
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: 3,
        overflow: "hidden",
        flexDirection: 'column',

    },
    top: {
        marginTop: 0,
        marginLeft: 10,
        marginRight: 0,
        flex: 1

    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});