import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    Dimensions,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Entypo'

const types = ['全部', '企业贷款', '汽车贷款', '个人贷款', '预约贷款'];
const stutes = ['全部', '预投', '在投', '预发'];
const times = ['1年以内', '1-3年', '3-5年', '5年以上'];
export default class DownDrapComponent extends Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 3,
            btn1Img: false,
            btn2Img: false,
            btn3Img: false,
            dataArr: types,
            bottomViewIsShow: false
        }
    }

    btnClick1() {

        let state = {...this.state};
        if (state.currentIndex === 0) {
            return;
        } else {
            state.btn1Img = !state.btn1Img;
            if (state.currentIndex === 1) {
                state.btn2Img = !state.btn2Img;
            } else if (state.currentIndex == 2) {
                state.btn3Img = !state.btn3Img;
            }
        }
        state.currentIndex = 0;
        state.dataArr = types;
        state.bottomViewIsShow = true;
        this.setState({
            ...state
        });
    }

    btnClick2() {
        let state = {...this.state};
        if (state.currentIndex === 1) {
            return;
        } else {
            state.btn2Img = !state.btn2Img;
            if (state.currentIndex == 0) {
                state.btn1Img = !state.btn1Img;
            } else if (state.currentIndex == 2) {
                state.btn3Img = !state.btn3Img;
            }
        }
        state.currentIndex = 1;
        state.dataArr = stutes;
        state.bottomViewIsShow = true;
        this.setState({
            ...state
        });

    }

    btnClick3() {
        let state = {...this.state};
        if (state.currentIndex === 2) {
            return;
        } else {
            state.btn3Img = !state.btn3Img;
            if (state.currentIndex === 0) {
                state.btn1Img = !state.btn1Img;
            } else if (state.currentIndex == 1) {
                state.btn2Img = !state.btn2Img;
            }
        }
        state.currentIndex = 2;
        state.dataArr = times;
        state.bottomViewIsShow = true;
        this.setState({
            ...state
        });
    }

    itemClick(data) {
        alert(data.item);
        let state = {...this.state};
        state.dataArr = [];
        //隐藏BottomView吧
        state.bottomViewIsShow = false;
        this.setState({
            ...state
        });
    }

    _renderItem(data) {
        return <TouchableHighlight
            onPress={() => this.itemClick(data)}
        >
            <View style={styles.item}>
                <Text style={{fontSize: 17, marginTop: 15}}>
                    {data.item}
                </Text>
            </View>
        </TouchableHighlight>
    }

    render() {
        return <View style={styles.container}>
            {/*上部分*/}
            <View style={styles.topStyle}>
                <TouchableHighlight style={styles.text1}
                                    onPress={() => {
                                        this.btnClick1()
                                    }}
                                    underlayColor={'white'}
                >
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 17, color: 'rgb(0,124,155)'}}>
                            投资种类
                        </Text>
                        <View style={styles.text1Img}>
                            <Ionicons
                                name={this.state.btn1Img === true ? 'chevron-small-up' : 'chevron-small-down'}
                                size={26}
                                style={{color: 'rgb(0,124,155)'}}
                            />
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.lineStyle}></View>
                <TouchableHighlight style={styles.text2}
                                    onPress={() => {
                                        this.btnClick2()
                                    }}
                                    underlayColor={'white'}
                >
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 17, color: 'rgb(0,124,155)'}}>
                            预投
                        </Text>
                        <View style={styles.text1Img}>
                            <Ionicons
                                name={this.state.btn2Img === true ? 'chevron-small-up' : 'chevron-small-down'}
                                size={26}
                                style={{color: 'rgb(0,124,155)'}}
                            />
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.lineStyle}></View>
                <TouchableHighlight style={styles.text3}
                                    onPress={() => {
                                        this.btnClick3()
                                    }}
                                    underlayColor={'white'}
                >
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 17, color: 'rgb(0,124,155)'}}>
                            投资时长
                        </Text>
                        <View style={styles.text1Img}>
                            <Ionicons
                                name={this.state.btn3Img === true ? 'chevron-small-up' : 'chevron-small-down'}
                                size={26}
                                style={{color: 'rgb(0,124,155)'}}
                            />
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
            {/*/!*下部分*!/ styles.bottomStyle*/}
            <View style={{
                display: this.state.bottomViewIsShow ? 'flex' : 'none',
                backgroundColor: 'rgba(220,220,220,0.8)',
                height: 1200
            }}>
                <FlatList
                    data={this.state.dataArr}
                    renderItem={(data) => this._renderItem(data)}
                    keyExtractor={(item, index) => item + index}
                    ItemSeparatorComponent={
                        () => <View style={styles.line}></View>
                    }
                />
                <TouchableHighlight
                    onPress={()=>{
                        let state = {...this.state};
                        state.bottomViewIsShow = false;
                        if (state.currentIndex === 0){
                            // state.btn2Img = !state.btn2Img;
                            // state.btn3Img = !state.btn3Img;
                        }else if (state.currentIndex === 1){
                            // state.btn1Img = !state.btn1Img;
                            // state.btn3Img = !state.btn3Img;

                        }else if (state.currentIndex === 2){
                            // state.btn3Img = !state.btn3Img;
                            // state.btn1Img = !state.btn1Img;
                        }
                        this.setState({
                            ...state
                        });
                    }}
                >
                    <View style={{height:1000,marginTop:0}}>

                    </View>
                </TouchableHighlight>
            </View>
        </View>
    }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    item: {
        paddingLeft: 10,
        height: 45,
        backgroundColor: 'white'
    },
    line: {
        backgroundColor: 'gray',
        height: 1,
        paddingLeft: 10
    },
    container: {
        backgroundColor: 'white',
        width: width,
        height: 270,
    },
    topStyle: {
        flexDirection: 'row',
    },
    lineStyle: {
        flex: 0.005,
        backgroundColor: 'gray',
        height: 30,
        marginTop: 10
    },
    text1: {
        flex: 1,
        flexDirection: 'row',
        //textAlign: 'center',
        justifyContent: 'center',
        height: 50,
        alignItems: 'center',

    },
    text2: {
        flex: 1,
        flexDirection: 'row',
        //textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'

    },
    text3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        //textAlign: 'center',
        alignItems: 'center'
    },
    text1Img: {
        //backgroundColor:'gray',

    },
    bottomStyle: {
        display: 'flex',
        backgroundColor: 'rgba(220,220,220,0.8)',
        marginTop: 0,
        height: 1200
    }
});


/**
 *
 * chevron-small-down 向下
 * chevron-small-up 向上
 * */





