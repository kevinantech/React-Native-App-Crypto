import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';

const Header = () => {
    return (
        <View>
            <Text style={styles.title}>Criptomonedas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 30,
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        paddingBottom: 10,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        textTransform: 'uppercase',
        backgroundColor: '#5E49E2',
        color: '#FFF'
    }
});

export default Header;