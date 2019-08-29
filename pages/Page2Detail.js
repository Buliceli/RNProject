import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import DetailComponent from './components/DetailComponent'

export default class Page2Detail extends Component {

    render() {
        const navigation = this.props.navigation;
        const itemData = this.props.navigation.state.params;
        return <View style={styles.container}>
            <DetailComponent nav={navigation} item={itemData}/>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(246,246,246)'
    }
});