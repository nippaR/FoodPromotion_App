import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>

            <Link href="/me" style={{ marginTop: 20 }}>
                <Text>Go to Me</Text>
            </Link>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})