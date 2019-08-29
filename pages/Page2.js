import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
    FlatList,
    ActivityIndicator
} from 'react-native'
import NavBarComponent from './components/NavBarComponent'
import DropdownMenu from 'react-native-dropdown-menu';
import Ionicons from 'react-native-vector-icons/EvilIcons'

const Array = ['NOC.2019063003', '上海', '广州', '东平', '武汉', '长沙', '济南', '深圳', '青岛', '中国', '香港', '澳门', '汶上', '武昌', '莱芜', '泰安'];
const URL_API = 'http://api.tjjyyl.com/index/s/goods';
const data = [['全部', '企业贷款', '汽车贷款', '个人贷款', '预约贷款'], ['全部', '预投', '在投', '预发'], ['1年以内', '1-3年', '3-5年', '5年以上']];
let first = '全部';
let second = '全部';
let third = '1年以内';
export default class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isShowNoneData: false,
            dataArr: []
        }
    };

    _networking() {
        return fetch(URL_API)
            .then((response) => response.json())
            .then((responseJson) => {
                let state = {...this.state};
                //alert(responseJson.data.goodDataList)
                state.dataArr = responseJson.data.goodsDataList;
                state.isLoading = false;
                this.setState({
                    ...state
                });
            })
            .catch((error) => {
                console.error(error);
                //alert(error)
            });
    }

    /*请求接口数据*/
    componentDidMount() {
        this._networking();
    }

    _renderBu(title) {
        return <View style={styles.btn}>
            <Ionicons
                name={'check'}
                size={15}
                style={{color: 'rgb(235,78,33)'}}

            />
            <Text style={{color: 'gray', fontSize: 12}}>
                {title}
            </Text>
        </View>
    }

    _renderBigSmallText(arr) {
        return <Text>
            {arr[0]}
            <Text style={{fontSize: 12}}>
                {arr[1]}
            </Text>
        </Text>
    }

    _renderItem(data) {
        const navigation = this.props.navigation;
        return <TouchableHighlight
            underlayColor={'white'}
            style={styles.item}
            onPress={() => {
                navigation.navigate('Page2Detail',data.item)
            }}
        >
            <View>
                <Text style={styles.topText}>{data.item.name}</Text>
                <View style={styles.middleView}>
                    <Text style={styles.middle1}>
                        {this._renderBigSmallText([data.item.rate, '%'])}
                    </Text>
                    <Text style={styles.middle2}>
                        {this._renderBigSmallText([data.item.day, '天'])}
                    </Text>
                    <Text style={styles.middle3}>
                        {data.item.process}
                    </Text>
                </View>
                <View style={styles.spec}></View>
                <View style={styles.bottom}>
                    <View style={{flexDirection: "row"}}>
                        {this._renderBu('红包')}
                        {this._renderBu('加息劵')}
                        {this._renderBu('次日计息')}
                    </View>
                    <Text style={styles.bottomText}>剩余{data.item.money}元</Text>
                </View>
            </View>
        </TouchableHighlight>
    };

    _click(arr) {

        if (arr[0] === 0) {
            first = data[arr[0]][arr[1]];
        } else if (arr[0] === 1) {
            second = data[arr[0]][arr[1]];
        } else if (arr[0] === 2) {
            third = data[arr[0]][arr[1]];
        }
        if (first === '全部' && second === '全部' && third === '1年以内') {
            let state = {...this.state}
            state.isShowNoneData = false;
            this.setState({
                ...state
            });
            this._networking()
        } else {
            let state = {...this.state}
            state.isShowNoneData = true;
            state.dataArr = [];
            this.setState({
                ...state
            });
        }

    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20, backgroundColor: 'rgba(0,0,0,0.05)'}}>
                    <ActivityIndicator style={{marginTop: 200}}/>
                    <Text style={{textAlign: 'center', marginTop: 20}}>加载中...</Text>
                </View>
            )
        }
        return (

            <View style={{flex: 1, marginTop: 0}}>
                {/*导航栏*/}
                <NavBarComponent title='资讯'/>
                <DropdownMenu
                    style={{flex: 1}}
                    bgColor={'white'}
                    tintColor={'#666666'}
                    activityTintColor={'green'}
                    handler={(selection, row) => this._click([selection, row])}
                    data={data}
                >
                    <View style={{flex: 1}}>
                        <View style={styles.flatContainer}>
                            <FlatList
                                data={this.state.dataArr}
                                renderItem={(data) => this._renderItem(data)}
                                keyExtractor={(item, index) => item + index}
                            />
                        </View>
                    </View>
                    <View style={{
                        flex: this.state.isShowNoneData ? 100 : 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        paddingTop: -200,
                        fontSize: 16,
                        display: this.state.isShowNoneData ? 'flex' : 'none',
                    }}>
                        <Text style={{fontSize: 19, color: 'gray'}}>
                            暂无数据...
                        </Text>
                        <Text style={{
                            color: 'red',
                            marginRight: 20,
                            marginLeft: 20,
                            marginTop: 10,
                            fontSize: 15,
                            fontWeight: '500'
                        }}>
                            本应用仅供学习使用 一切图片 文字 音频 等资源均来自网络如有侵权 立即更改 , 保护知识产权 人人有责.
                        </Text>
                        <Text style={{
                            color: 'gray',
                            fontSize: 15,
                            fontWeight: '900',
                            alignSelf: 'flex-end',
                            marginRight: 25,
                            marginTop: 50
                        }}>
                            作者:LD
                        </Text>
                    </View>

                </DropdownMenu>
            </View>
        );
    }
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatContainer: {
        //backgroundColor:'red'
    },
    noneData: {
        //backgroundColor: 'green',


    },
    item: {
        backgroundColor: 'white',
        height: 140,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 0.3
    },
    topText: {
        fontSize: 17,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        height: 25,
    },
    middleView: {
        height: 60,
        marginTop: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    middle1: {
        color: 'rgb(235,78,33)',
        fontWeight: '600',
        fontSize: 25


    },
    middle2: {
        color: 'rgb(86,84,86)',
        fontWeight: '500',
        fontSize: 17
    },
    middle3: {
        color: 'rgb(106,104,106)',
        fontSize: 12
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    spec: {
        backgroundColor: 'gray',
        marginLeft: 10,
        marginRight: 10,
        height: 0.2,
        marginTop: 2
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'space-between'
    },
    bottomText: {
        fontSize: 12,
        color: 'gray',
    },
    /*下拉框*/
    downDrap: {}
});


/**
 *
 * <Text>Page2</Text>
 <Button
 title='跳转详情'
 onPress={()=>{
                    navigation.navigate('Page2Detail')
                }}
 />
 *
 * */
/**
 *
 *  // arrowImg={}
 // checkImage={}
 // optionTextStyle={{color: '#333333'}}
 // titleStyle={{color: '#333333'}}
 // maxHeight={300}
 *
 * */

// const navigation = this.props.navigation;
// return <ScrollView style={styles.container}>
//     <View>
//         {/*导航栏*/}
//         <NavBarComponent title='资讯'/>
//
//         {/*下拉框*/}
//         <View style={styles.downDrap}>
//             <DownDrapComponent/>
//         </View>
//
//         {/*FlatList*/}
//         <View style={styles.flatContainer}>
//             <FlatList
//                 data={this.state.dataArray}
//                 renderItem = {(data)=>this._renderItem(data)}
//                 keyExtractor={(item, index) => item + index}
//             />
//         </View>
//
//
//
//     </View>
// </ScrollView>