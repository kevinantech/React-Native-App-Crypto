import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

const Price = ({quoteInformation}) => {

    if(Object.keys(quoteInformation).length === 0) return null;

    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.precio]}>
                <Text style={styles.span}>{quoteInformation.PRICE} </Text>
            </Text>
            <Text style={styles.text}>Precio más alto del día: {' '}
                <Text style={styles.span}> {quoteInformation.HIGHDAY} </Text>
            </Text>
            <Text style={styles.text}>Precio más bajo del día: {' '}
                <Text style={styles.span}> {quoteInformation.LOWDAY} </Text>
            </Text>
            <Text style={styles.text}>Variación últimas 24 horas: {' '}
                <Text style={styles.span}> {quoteInformation.CHANGEPCT24HOUR} % </Text>
            </Text>
            <Text style={[styles.text, {marginBottom: 0}]}>Última Actualización: {' '}
                <Text style={styles.span}> {quoteInformation.LASTUPDATE} </Text>
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: { 
        paddingHorizontal: 20,
        paddingVertical: 24,
        backgroundColor: '#5E49E2'
    },
    text: { 
        marginBottom: 10,
        fontFamily: 'Roboto-Regular', 
        fontSize: 14,
        color: '#FFF' 
    },
    precio: {
        fontSize: 28
    },
    span: {
        fontFamily: 'Roboto-Black',
    }
});

export default Price;