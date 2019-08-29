import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
export default class Page1Detail extends Component{
    render(){
        return <View style={styles.container}>
            <Text>Page1Detail</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container:{
        marginTop:50
    }
});