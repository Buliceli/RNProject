import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Dimensions,
    DeviceInfo
} from 'react-native'

export default class NavBarComponent extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return <View style={styles.nav}>
            <Text style={styles.navTitle}>
                {this.props.title}
            </Text>
        </View>
    }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    nav: {
        backgroundColor: 'green',
        height: Platform.OS === 'ios' ? (DeviceInfo.isIPhoneX_deprecated ? 84 : 64) : 50,
        width: width,
        marginTop: 0,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navTitle: {
        color: 'black',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 20 : 5,
        fontSize: 17,
    },
});
