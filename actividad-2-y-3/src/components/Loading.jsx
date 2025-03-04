import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/themed';

export default function Loading(props) {
    const{title, activityColor, sizeActivity, color, isVisible} = props;
    return (
        <Overlay isVisible={isVisible} overlatStyle={[styles.container, {boderColor:color}]}>
            <ActivityIndicator size={sizeActivity} color={activityColor}/>
            <Text style={{fontWeight:'bold', fontSize:16}}>{title}</Text>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    container: {
        height:150, 
        width:'80%',
        backgroundColor:"white",
        borderRadius:16,
        borderWidth:2,
        justifyContent:"center",
        alignItems:"center"
    },
});