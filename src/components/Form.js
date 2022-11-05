import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Form = ({currency, setCurrency, cryptocurrency, setCriptocurrency, setQuoteInformation, setLoading}) => {

    const [cryptocurrencies, setCryptocurrencies] = useState([]);

    useEffect(() => {
        const queryAPI = async () => {
            const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const response = await fetch(URL);
            if(response.status === 200){
                const results = await response.json();
                setCryptocurrencies(results.Data);
            }
        }
        queryAPI();
    }, [cryptocurrencies]);

    const getQuote = () => {
        if(currency === '' || cryptocurrency === ''){
            Alert.alert(
                'Error',
                'Ambos campos son obligatorios',
                [
                    {text: 'Ok'}
                ]
            );
            return;
        }
        const getQuoteAPI = async () => {
            const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;
            const response = await fetch(URL);
            if(response.status === 200){
                const results = await response.json();
                setLoading(true);
                setTimeout(() => {
                    setQuoteInformation(results.DISPLAY[cryptocurrency][currency]);
                    setLoading(false);
                }, 3000);
                
                /**
                 * 
                 * La ruta para acceder a los datos del precio dados por la API siguen la siguiente estructura:
                 * 
                 * Resolve.DISPLAY.[Codigo del Crypto].[Codigo de Divisa] 
                 * 
                 * Ej. Resolve.DISPLAY.BTC.USD
                 * 
                 */ 
            }
        }
        getQuoteAPI();
    }

    return (
        <View style={styles.container}> 
            <View>
                <Text style={styles.label}>Moneda</Text>
                <Picker 
                    style={styles.picker}
                    selectedValue={currency}
                    onValueChange={(valueItem) => setCurrency(valueItem)}
                >
                    <Picker.Item label='- Seleccione' value=""/>
                    <Picker.Item label='USD' value="USD"/>
                    <Picker.Item label='MXN' value="MXN"/>
                    <Picker.Item label='EUR' value="EUR"/>
                    <Picker.Item label='GBP' value="GBP"/>
                </Picker>
                <Text style={styles.label}>Criptomoneda</Text>
                <Picker
                    style={styles.picker} 
                    selectedValue={cryptocurrency}
                    onValueChange={(valueItem) => setCriptocurrency(valueItem)} 
                >    
                    <Picker.Item label='- Seleccione' value=""/>
                    {
                        cryptocurrencies.map(crypto => (
                            <Picker.Item key={crypto.CoinInfo.Id} label={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name}/>
                            
                        ) ) 
                    }
                </Picker>
                <TouchableHighlight
                    style={styles.btn}
                    onPress={() => getQuote()}
                >
                    <Text style={styles.btnText}>Cotizar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '2.5%'
    },
    label: {
        fontFamily: 'Roboto-Bold',
        fontSize: 22,
        textTransform: 'uppercase',
        marginVertical: 20,
        color: '#000'
    },
    picker: {
        color: '#666666'
    },
    btn: {
        marginTop: 32,
        padding: 10,  
        borderRadius: 10,
        backgroundColor: '#5E39E2',
    },
    btnText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: '#FFF'
    }
});

export default Form;