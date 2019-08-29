import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native'
import Sound from 'react-native-sound';
import SoundPlayer from 'react-native-sound-player'
let mp3 = require('../android/app/src/main/res/raw/xinruzhishui.mp3');//支持众多格式
let whoosh = new Sound(mp3, (error) => {
    if (error) {
        return console.log('资源加载失败', error);
    }
});
export default class Page3Detail extends Component {

    componentDidMount() {
        whoosh.setNumberOfLoops(-1);
        whoosh.setVolume(10);
        whoosh.play();
        // if (Platform.OS === 'ios') {
        //     try {
        //         setTimeout(() => {
        //             SoundPlayer.playUrl('http://audio.xmcdn.com/group17/M02/AD/6F/wKgJJFe6ghORkIjQACHDgE22Bck713.m4a')
        //         }, 0);
        //     } catch (e) {
        //         console.log(`cannot play the sound file`, e)
        //         alert('播放失败')
        //     }
        //     console.disableYellowBox = true // 关闭全部黄色警告
        // } else { //播放Android版对应的音乐


            // let musciPath = require('../android/app/src/main/res/raw/xinruzhishui.mp3');       // 匹配的格式挺多的....
            // var music = new Sound(musciPath, (error) => {
            //     if (error) {
            //         Alert.alert("播放失败。。。");
            //     }
            // });
            // music.play();                // 播放声音
            // music.setVolume(1);        // 将音量减半
            // music.setPan(1);             // 英语不过关(这是右声道的意思?)
            // music.setNumberOfLoops(-1);  // 无限循环播放，直到调用stop()
            // music.setCurrentTime(0);   // 设置从某一秒开始

//        }
    }

    componentWillUnmount() {
        whoosh.stop();
    }

    render() {
        return <ScrollView style={styles.container}>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>

                <Image style={Platform.OS === 'ios' ? styles.pic : styles.androidPic}
                       source={require('./images/888.gif')}/>
            </View>
            <Text style={styles.firstTextC}>
                我们不一样
            </Text>
            <Text style={styles.firstText}>
                We are different.
            </Text>
            <Text style={styles.firstTextC}>
                每个人有不同的境遇
            </Text>
            <Text style={styles.firstText}>
                Everyone has different circumstances.
            </Text>
            <Text style={styles.author}>
                作者:LD
            </Text>
            <Text style={styles.yuyan}>
                iOS开发者热衷于大前端技术栈 粗通Objective-C Swift Javascript ReactNative 对Vue Flutter SwiftUI等深感兴趣
            </Text>
            <Text style={styles.xianshi}>
                对现实极度不满但意愿很强烈能力很有限俗称 志大才疏
            </Text>
            <Text style={styles.brother}>
                兄弟嘛也不晓得😁
            </Text>
            <Text style={styles.brother}>
                但反过来说兄弟还是晓得点事儿的🤔
            </Text>
            <Text style={styles.zihei}>
                不喜自黑也不喜别人吹吹捧捧奚奚落落
            </Text>
            <Text style={styles.mj}>
                崇拜MJ(李明杰)Coderwhy(王红元)私自认为这两位是真正的 teacher真正的极客 真正的明白者
            </Text>
            <Text style={styles.trueSy}>
                了解真相你才能获得真正的自由
            </Text>
            <Text style={styles.home}>
                愿早日究天人之际通古今之变成一家之言
            </Text>
            <Text style={styles.amen}>
                阿门
            </Text>
            <Text style={styles.time}>
                LD 2018年与北京
            </Text>


        </ScrollView>
    }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(242,242,242)'
    },
    pic: {
        backgroundColor: 'rgb(255,255,255)',
        width: width,
        resizeMode: 'center',

    },
    androidPic: {
        backgroundColor: 'rgb(255,255,255)',
        justifyContent: 'center',
        alignItems: 'center',


    },

    firstTextC: {
        marginTop: 5,
        marginLeft: 10,
        color: 'gray',
        fontSize: 17,
        fontWeight: '800'

    },
    firstText: {
        marginLeft: 10,
        fontSize: 18,
        fontStyle: 'italic',
        color: 'red'

    },
    /*作者*/
    author: {
        marginLeft: 10,
        fontSize: 17,
        marginTop: 10
    },
    /*yuyan*/
    yuyan: {
        marginTop: 5,
        marginLeft: 10,
        fontSize: 16,
        marginRight: 10,
        // backgroundColor:'yellow',
        height: 70


    },
    /*// xianshi*/
    xianshi: {
        marginLeft: 10,
        fontSize: 17,
        color: 'gray',
        marginTop: 10
    },
    /*brother*/
    brother: {
        marginLeft: 10,
        fontSize: 17,
        color: 'gray',


    },
    /*zihei*/
    zihei: {
        marginLeft: 10,
        fontSize: 17,
        color: 'gray',
    },
    /*mj*/
    mj: {
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        fontSize: 17,
        color: 'red'
    },
    /*trueSy*/
    trueSy: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 17
    },
    /* home*/
    home: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 17,
        color: 'gray'
    },
    /*amen*/
    amen: {
        marginRight: 10,
        fontSize: 17,
        width: 50,
        // backgroundColor:'red',
        alignSelf: 'flex-end',
        marginTop: 10
    },
    /* time*/
    time: {
        marginRight: 20,
        fontSize: 17,
        // backgroundColor:'red',
        alignSelf: 'flex-end',
        marginTop: 5
    }

});