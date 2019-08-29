import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Button, Dimensions, TextInput, Modal, TouchableHighlight,Alert} from 'react-native'
//import Modal, {AnimatedModal, ModalManager} from 'react-native-root-modal';
import Toast, {DURATION} from 'react-native-easy-toast'

const {width, height} = Dimensions.get('window');
export default class AddDetail extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            modalVisible: false
        }
    }

    _renderColorBottom() {
        return <View style={{flexDirection: 'row'}}>
            <View style={{backgroundColor: 'rgb(255,255,255)', height: 2, width: 30}}></View>
            <View style={{backgroundColor: 'rgb(212,31,55)', height: 2, width: 30}}></View>
            <View style={{backgroundColor: 'rgb(255,255,255)', height: 2, width: 30}}></View>
            <View style={{backgroundColor: 'rgb(20,157,208)', height: 2, width: 30}}></View>
            <View style={{backgroundColor: 'rgb(255,255,255)', height: 2, width: 30}}></View>
            <View style={{backgroundColor: 'rgb(212,31,55)', height: 2, width: 30}}></View>
            <View style={{backgroundColor: 'rgb(255,255,255)', height: 2, width: 30}}></View>
            <View style={{backgroundColor: 'rgb(20,157,208)', height: 2, width: 30}}></View>
        </View>
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        const navigation = this.props.navigation;
        const itemData = this.props.navigation.state.params;
        //console.warn(itemData);
        return <View style={styles.container}>
            <Toast ref="toast" position="center"/>
            <View style={{marginTop: 22, backgroundColor: 'rgba(0,0,0,0.5)', overflow: 'hidden'}}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                    }}

                >
                    <View style={{marginTop: 0, backgroundColor: 'rgba(0,0,0,0.2)', flex: 1}}>
                        <View style={{
                            borderRadius: 0, backgroundColor: 'white', marginTop: (height - 150) * 0.5, height: 150,
                            marginLeft: 30, marginRight: 30,overflow:'hidden'
                        }}>
                            <Text style={{
                                marginTop: 0, backgroundColor: 'white'
                                , textAlign: 'center',
                                marginTop: 10,
                                height: 40,
                                lineHeight: 40,
                                fontSize: 16,
                                fontWeight: '600',
                                color: 'gray'
                            }}>你的申请已进入后台审核</Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}
                                style={{
                                    marginLeft: 0, marginRight: 50
                                    , alignItems: 'center',
                                    marginTop: 45,
                                    width:(width - 60) * 0.5,
                                    height:40,
                                    justifyContent:'center',
                                    borderTopColor:'gray',
                                }}
                            >
                                <Text>取消</Text>
                            </TouchableHighlight>
                            <View style={{
                                width:(width - 60) * 0.5,
                                height:40,
                                justifyContent:'center',
                                marginLeft:(width - 60) * 0.5,
                                marginTop:-40,
                                alignItems:'center',
                                }}>
                                <Text
                                    style={{


                                    }}
                                >
                                    确定
                                </Text>
                            </View>

                        </View>
                    </View>

                </Modal>
            </View>

            <View style={styles.top}>

                <Text style={{fontSize: 20, marginLeft: 10, marginTop: 3, justifyContent: 'center'}}>
                    名称:{itemData.name}
                </Text>
                <Text style={{fontSize: 20, marginLeft: 10, marginTop: 10, justifyContent: 'center'}}>
                    状态:{itemData.pay_statue}
                </Text>
                {/*底部的条形分割码*/}
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    {this._renderColorBottom()}
                    {this._renderColorBottom()}
                    {this._renderColorBottom()}
                    {this._renderColorBottom()}
                </View>
            </View>
            <View style={styles.middle}>
                <TextInput keyboardType='numeric' placeholder={' 请输入投资金额:'} style={styles.inputStyle}
                           onChangeText={(newValue) => {
                               let state = {...this.state};
                               state.value = (newValue * itemData.rate);
                               this.setState({
                                   ...state
                               });
                           }}
                />
                <Text style={{marginTop: 10}}>
                    预计年化收益:{this.state.value}
                </Text>
            </View>
            <View style={styles.bottom}>
                <Text
                    style={{
                        backgroundColor: 'rgb(86,165,204)',
                        width: width - 40,
                        height: 44,
                        color: 'white',
                        fontSize: 17,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        lineHeight: 44,
                        marginRight: 25,
                        fontWeight: '700',
                        borderRadius: 5
                    }}
                    onPress={() => {
                        //alert('666');
                        //this.setModalVisible(true);

                        if (this.state.value === 0){
                            this.refs.toast.show('无效的投资金额', 200);
                            return;
                        }

                        Alert.alert(
                            '申请成功',
                            '你的申请已进入后台审核',
                            [
                                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'OK', onPress: () => {navigation.popToTop()}},
                            ],
                            { cancelable: false }
                        )
                    }}
                >
                    确定
                </Text>


            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(240,240,240)'
    },
    top: {
        height: 80,
        width: width,
    },
    middle: {
        marginTop: 30,
        marginLeft: 20,
        height: 100,
        width: width,
    },
    bottom: {
        marginTop: 10,
        width: width,
        height: 50,
        alignItems: 'flex-end'
    },
    inputStyle: {
        width: width * 0.8,
        height: 40,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'gray'

    }
});

/**
 * style={{width:width * 0.8,height:40}}
 *
 * **/