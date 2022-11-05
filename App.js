import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import Header from './src/components/Header';
import Form from './src/components/Form';
import Price from './src/components/Price';

const App = () => {

    const [currency, setCurrency] = useState('');
    const [cryptocurrency, setCriptocurrency] = useState('');
    const [quoteInformation, setQuoteInformation] = useState({});
    const [loading, setLoading] = useState(false);

    const PriceComponentStatus = loading ? <ActivityIndicator size="large" color="#5E49E2" /> : <Price quoteInformation={quoteInformation}/>

    return (
        <ScrollView style={styles.container}>
            <Header/>
            <Image
                style={styles.img}
                source={require('./assets/img/cripto.png')}
            />
            <Form
                currency={currency}
                setCurrency={setCurrency}
                cryptocurrency={cryptocurrency}
                setCriptocurrency={setCriptocurrency}
                setQuoteInformation={setQuoteInformation}
                setLoading={setLoading}
            />
            <View style={{marginTop: 40}}>
                {PriceComponentStatus}
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    img: {
        width: '100%',
        height: 150,
    }
});

export default App;