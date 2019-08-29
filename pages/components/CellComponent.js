import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableHighlight,
} from 'react-native'
import PropTypes from 'prop-types';
let path = '';
export default class CellComponent extends Component {
    static propTypes = {
        title: PropTypes.string,
    };
    render() {
        return <View style={styles.container}>
            {this._renderImage()}
            <Text style={{fontSize:16}}>
                {this.props.title}
            </Text>
        </View>
    }
    _renderImage(){
        if (this.props.title === '关于我们'){
            return <Image style={styles.imgSy} source={require('../images/guanyu.png')}/>
        }else if (this.props.title === '流水记录'){
            return  <Image style={styles.imgSy} source={require('../images/liushuijilu.png')}/>
        }else if (this.props.title === '意见反馈'){
            return  <Image style={styles.imgSy2} source={require('../images/yijianfankui.png')}/>
        }else if (this.props.title === '联系方式'){
            return  <Image style={styles.imgSy} source={require('../images/lianxifangshi.png')}/>
        }else if (this.props.title === '退出'){
            return  <Image style={styles.imgSy} source={require('../images/tuichu.png')}/>
        }
    }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: width,
        height: 44,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems:'center'
    },
    imgSy:{
        width:23,
        height:23,
        marginLeft:10,
        marginRight:15
    },
    imgSy2:{
        width:20,
        height:20,
        marginLeft:10,
        marginRight:15
    }
});