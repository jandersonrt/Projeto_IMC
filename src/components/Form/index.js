import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Result from "./Result";

export default function Form() {
    const [peso, setPeso] = useState(null)
    const [altura, setAltura] = useState(null)
    const [msgCalculoIMC, setMsgCalculoIMC] = useState(null)
    const [msgResultadoIMC, setMsgResultadoIMC] = useState(null)
    const [imc, setIMC] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function calcularIMC(peso, altura) {
        let imc = ((Number.parseFloat(peso) / (Number.parseFloat(altura) * Number.parseFloat(altura))))
        setIMC(imc.toFixed(1))
        resultadoIMC(imc.toFixed(1))
    }

    function resultadoIMC(imc) {
        if (imc < 18.5) {
            setMsgResultadoIMC("Abaixo do Peso")
        } else if (imc >= 18.5 && imc < 24.9) {
            setMsgResultadoIMC("Peso Normal")
        } else if (imc >= 25 && imc < 29.9) {
            setMsgResultadoIMC("Sobrepeso")
        } else if (imc >= 30 && imc < 34.9) {
            setMsgResultadoIMC("Obesidade (GRAU 1)")
        } else if (imc >= 35 && imc < 39.9) {
            setMsgResultadoIMC("Obesidade Severa (GRAU 2)") 
        } else {
            setMsgResultadoIMC("Obesidade Mórbida (GRAU 3)")
        }
    }

    function validacaoIMC() {
        if (peso != null && altura != null) {
            let pesoFormat = peso.replace(",", ".")
            let alturaFormat = altura.replace(",", ".")    
       
            if (pesoFormat > 0 && alturaFormat > 0) {
                calcularIMC(pesoFormat, alturaFormat)
                setPeso(null)
                setAltura(null)
                setMsgCalculoIMC(null)
                setTextButton("Calcular Novamente")
            } else {
                setMsgCalculoIMC("Valor inválido!")
                setPeso(null)
                setAltura(null)
                setTextButton("Calcular")
            }
        } else {
            setMsgCalculoIMC("Preencha todos os campos!")
            setIMC(null)
        }
    }

    return (
        <View style={styles.form}>
            {imc == null ?
                <View>
                    {/* Condição que verifica se há mensagem de erro */}
                    {msgCalculoIMC != null && (
                        <Text style={styles.alerta}>{msgCalculoIMC}</Text>
                    )}
                    <Text style={styles.label}>Digite a sua Altura:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={altura}
                        onChangeText={setAltura}
                    />

                    <Text style={styles.label}>Digite o seu Peso:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={peso}
                        onChangeText={setPeso}
                    />

                    <TouchableOpacity onPress={() => validacaoIMC()}>
                        <Text style={styles.buttom}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                :
                <View>
                    <Result imc={imc} msgResultadoIMC={msgResultadoIMC} />
                    <TouchableOpacity onPress={() => validacaoIMC()}>
                        <Text style={styles.buttom}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}