import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spacer = ({width="100%", height= 40}) => {
    return (
        <View style={{width, height}}/>
    )
}

export default Spacer

const styles = StyleSheet.create({})