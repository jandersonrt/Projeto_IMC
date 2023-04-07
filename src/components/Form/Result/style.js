import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    resultadoIMC: {
        marginBottom: 20,
    },

    info: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 10,
    },

    imc: {
        backgroundColor: '#DDD',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    msgResultadoIMC: {
        fontSize: 22,
        color: '#FFF',
        textAlign: 'center',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    cor_abaixoPeso: {
        backgroundColor: '#FB0',
    },

    cor_PesoNormal: {
        backgroundColor: '#008000',
    },

    cor_Sobrepeso: {
        backgroundColor: '#FFA07A', 
    },

    cor_Obesidade: {
        backgroundColor: '#FF8C00',
    },

    cor_ObsidadeSevera: {
        backgroundColor: '#FF6347',
    },

    cor_ObesidadeMorbida: {
        backgroundColor: '#FF0000',
    },
});

export default styles;