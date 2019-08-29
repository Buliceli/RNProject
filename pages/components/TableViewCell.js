import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
import {BoxShadow} from 'react-native-shadow'
import ProgressCircle from 'react-native-progress-circle'

export default class TableViewCell extends Component {
    render() {
        return (
            <BoxShadow setting={shadowOpt}>
                <View style={styles.container}>
                    <View style={styles.leftStyle}>
                        <View style={styles.cicleStyle}>
                            <ProgressCircle
                                percent={30}
                                radius={50}
                                borderWidth={8}
                                color="#3399FF"
                                shadowColor="#eee"
                                bgColor="#fff"
                            >
                                <Text style={{fontSize: 18}}>{'30%'}</Text>
                            </ProgressCircle>
                            <Text style={styles.titleStyle}>近一年收益率</Text>
                        </View>
                    </View>
                    <View style={styles.rightStyle}>
                        <Text style={styles.rightTextStyle}>
                            企业经营产品
                        </Text>
                        <Text style={styles.rightTextStyle2}>
                            Q0030-20
                        </Text>
                        <Text style={styles.bottomTextStyle}>
                            募集开始
                        </Text>
                        <Text style={styles.dayTextStyle}>
                            60天
                        </Text>
                    </View>
                </View>
            </BoxShadow>
        )
    }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: width - 40,
        height: 200,
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: 3,
        overflow: "hidden",
        flexDirection: 'row',

    },
    leftStyle: {
        //backgroundColor:'green',
        flex: 4,

    },
    rightStyle: {
        //backgroundColor: 'red',
        flex: 6,
    },
    cicleStyle: {
        marginLeft: 20,
        marginTop: 20

    },
    titleStyle: {
        //backgroundColor:'red',
        marginTop: 35,
        fontSize: 17,
        color: 'gray'
    },
    rightTextStyle: {
        marginTop: 20,
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft:20

    },
    rightTextStyle2:{
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft:20
    },
    bottomTextStyle:{
        color:'gray',
        fontSize:17,
        marginLeft:20,
        marginTop:35
    },
    dayTextStyle:{
        color:'rgb(200,162,88)',
        fontSize:17,
        marginTop:25,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'rgb(200,162,88)',
        width:50,
        marginRight:20,
        marginLeft:130,
        textAlign:'center'

    }
});
const shadowOpt = {
    width: width - 40,
    height: 200,
    color: '#000',
    border: 1,
    radius: 3,
    opacity: 0.2,
    x: 0.2,
    y: 3,
    style: {marginVertical: 2},
};
