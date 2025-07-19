import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';

import IMG from '../assets/lion.png';
import Spacer from '../components/Spacer';


const Me = () => {
    return (
        <ThemedView style={styles.container}>
            <Image source={IMG} style={styles.img} />
            <Spacer width="100%" height={20} />
            <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'poppins' }}>Developed By Under Lion Flag</Text>
            <Text style={styles.txt}>This is a Open Source Application Would you Like developed
                                    this application feel free to
                                    click this link</Text>
        </ThemedView>
    );
}

export default Me;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#131520ff',
    },
    
    img: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginTop: 50,
    },

    txt: {
        color: '#fff',
        fontSize: 20,
        marginTop: 20,
        fontFamily: 'poppins',
        textAlign: 'center',
        paddingHorizontal: 20,
        lineHeight: 30,
        width: Dimensions.get('window').width - 40,

    }
});