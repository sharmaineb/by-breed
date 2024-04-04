import React from "react";
import { View, Text, StyleSheet} from "react-native";

function Feature({ name, value }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default Feature;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 3
    },
    name: {
        fontSize: 16
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})