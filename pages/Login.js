import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Button
} from 'react-native'

import BottomNav from './BottomNav'

export default class Login extends Component {

    constructor(){
        super();

    }
    componentWillMount() {
        const navigation = this.props.navigation;
        navigation.navigate('BottomNav');
    }
    render() {
        const navigation = this.props.navigation;
        return <View style={styles.container}>
            <Button
                title='跳首页'
                onPress={() => {
                navigation.navigate('BottomNav');
                }}
            />
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});