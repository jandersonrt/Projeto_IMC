import {Text, View} from 'react-native';
import styles from "./style";

export default function Result(props) {

    let cor 

    if (props.imc < 18.5) {
        cor = styles.cor_abaixoPeso
    } else if (props.imc >= 18.5 && props.imc < 24.9) {
        cor = styles.cor_PesoNormal
    } else if (props.imc >= 25 && props.imc < 29.9) {
        cor = styles.cor_Sobrepeso
    } else if (props.imc >= 30 && props.imc < 34.9) {
        cor = styles.cor_Obesidade
    } else if (props.imc >= 35 && props.imc < 39.9) {
        cor = styles.cor_ObsidadeSevera
    } else {
        cor = styles.cor_ObesidadeMorbida
    }

    return(
        <View style={styles.resultadoIMC}>
            <Text style={styles.info}>CLASSIFICAÇÃO:</Text>
            <Text style={styles.imc}>{props.imc}</Text>
            <Text style={[styles.msgResultadoIMC, cor]}>{props.msgResultadoIMC}</Text>
        </View>
    );
}