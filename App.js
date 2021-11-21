import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [display, setDisplay] = useState("")
  const [valorSendoEsconlhido, setValorSendoEsconlhido] = useState("")
  const [primeiroValor, setPrimeiroValor] = useState("")
  const [operacaoEscolhida, setOperacaoEscolhida] = useState("")

  const touchable = (props) => {
    return (
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={props.onpress1}>
          <Text>
            {props.textobtn1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={props.onpress2}>
          <Text>
            {props.textobtn2}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={props.onpress3}>
          <Text>
            {props.textobtn3}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={props.onpress4}>
          <Text>
            {props.textobtn4}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  const zerar = () => {
    setDisplay("")
    setValorSendoEsconlhido("")
    setPrimeiroValor("")
    setOperacaoEscolhida("")
  }

  const mult = () => {
    let primeiro = ""
    const operacao = "*"

    if (primeiroValor === "") {
      primeiro = valorSendoEsconlhido
    } else if (valorSendoEsconlhido === "") {
      primeiro = primeiroValor
    } else {
      primeiro = parseFloat(primeiroValor) * parseFloat(valorSendoEsconlhido)
    }

    setOperacaoEscolhida(operacao)
    setPrimeiroValor(primeiro + "")
    setValorSendoEsconlhido("")

    if (valorSendoEsconlhido !== "" || primeiro !== "") {
      setDisplay((primeiro + " " + operacao))
    }
    console.log("primeiro valor ", primeiro)
    console.log("valor escohido ", valorSendoEsconlhido)

  }

  const sub = () => {
    let primeiro = ""
    const operacao = "-"

    if (primeiroValor === "") {
      primeiro = valorSendoEsconlhido
    } else if (valorSendoEsconlhido === "") {
      primeiro = primeiroValor
    } else {
      primeiro = parseFloat(primeiroValor) - parseFloat(valorSendoEsconlhido)
    }

    setOperacaoEscolhida(operacao)
    setPrimeiroValor(primeiro + "")
    setValorSendoEsconlhido("")

    if (valorSendoEsconlhido !== "" || primeiro !== "") {
      setDisplay((primeiro + " " + operacao).replace(".", ","))
    }
    console.log("primeiro valor ", primeiro)
    console.log("valor escohido ", valorSendoEsconlhido)

  }

  const div = () => {
    let primeiro = ""
    const operacao = "/"


    if (primeiroValor === "") {
      primeiro = valorSendoEsconlhido
    } else if (valorSendoEsconlhido === "") {
      primeiro = primeiroValor
    } else {
      primeiro = parseFloat(primeiroValor) / parseFloat(valorSendoEsconlhido)
    }

    setOperacaoEscolhida(operacao)
    setPrimeiroValor(primeiro + "")
    setValorSendoEsconlhido("")

    if (valorSendoEsconlhido !== "" || primeiro !== "") {
      setDisplay((primeiro + " " + operacao).replace(".", ","))
    }

    console.log("primeiro valor ", primeiro)
    console.log("valor escohido ", valorSendoEsconlhido)
  }

  const som = () => {
    let primeiro = ""
    const operacao = "+"

    if (primeiroValor === "") {
      primeiro = valorSendoEsconlhido
    } else if (valorSendoEsconlhido === "") {
      primeiro = primeiroValor
    } else {
      primeiro = parseFloat(primeiroValor) + parseFloat(valorSendoEsconlhido)
    }

    setOperacaoEscolhida(operacao)
    setPrimeiroValor(primeiro + "")
    setValorSendoEsconlhido("")

    if (valorSendoEsconlhido !== "" || primeiro !== "") {
      setDisplay((primeiro + " " + operacao).replace(".", ","))
    }
    console.log("primeiro valor ", primeiro)
    console.log("valor escohido ", valorSendoEsconlhido)

  }

  const calcular = () => {
    let resultDisplay = primeiroValor + " " + operacaoEscolhida + " " + valorSendoEsconlhido + " = "
    let result = 0

    switch (operacaoEscolhida) {
      case "/":
        console.log("resultado ", parseFloat(primeiroValor) / parseFloat(valorSendoEsconlhido))
        result = parseFloat(primeiroValor) / parseFloat(valorSendoEsconlhido)
        resultDisplay = resultDisplay + result
        break;
      case "*":
        console.log("resultado ", parseFloat(primeiroValor) * parseFloat(valorSendoEsconlhido))
        result = parseFloat(primeiroValor) * parseFloat(valorSendoEsconlhido)
        resultDisplay = resultDisplay + result
        break;
      case "-":
        console.log("resultado ", parseFloat(primeiroValor) - parseFloat(valorSendoEsconlhido))
        result = parseFloat(primeiroValor) - parseFloat(valorSendoEsconlhido)
        resultDisplay = resultDisplay + result
        break;
      case "+":
        console.log("resultado ", parseFloat(primeiroValor) + parseFloat(valorSendoEsconlhido))
        result = parseFloat(primeiroValor) + parseFloat(valorSendoEsconlhido)
        resultDisplay = resultDisplay + result
        break;

      default:
        break;
    }

    setDisplay(resultDisplay.replace(".", ","))
    setValorSendoEsconlhido("")
    setPrimeiroValor(result + "")
    setOperacaoEscolhida("")
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        {display !== "" ?
          <Text style={{ fontSize: 30, margin: 10 }}>{display.replace(".", ",")}</Text>
          :
          null
        }

        {display === "" & valorSendoEsconlhido === "" ?
          <Text style={{ fontSize: 30, margin: 10 }}>0</Text>
          :
          <Text style={{ fontSize: 30, margin: 10 }}>{valorSendoEsconlhido.replace(".", ",")}</Text>
        }
      </View>
      <View style={styles.btnContainer}>
        {touchable({
          onpress1: () => { setValorSendoEsconlhido(valorSendoEsconlhido + "7") },
          onpress2: () => { setValorSendoEsconlhido(valorSendoEsconlhido + "8") },
          onpress3: () => { setValorSendoEsconlhido(valorSendoEsconlhido + "9") },
          onpress4: () => { div() },
          textobtn1: '7',
          textobtn2: '8',
          textobtn3: '9',
          textobtn4: '/',
        })}
      </View>
      <View style={styles.btnContainer}>
        {touchable({
          onpress1: () => { setValorSendoEsconlhido(valorSendoEsconlhido + "4") },
          onpress2: () => { setValorSendoEsconlhido(valorSendoEsconlhido + "5") },
          onpress3: () => { setValorSendoEsconlhido(valorSendoEsconlhido + "6") },
          onpress4: () => { mult() },
          textobtn1: '4',
          textobtn2: '5',
          textobtn3: '6',
          textobtn4: '*',
        })}
      </View>
      <View style={styles.btnContainer}>
        {touchable({
          onpress1: () => { setValorSendoEsconlhido(valorSendoEsconlhido + "1") },
          onpress2: () => { setValorSendoEsconlhido(valorSendoEsconlhido + "2") },
          onpress3: () => { setValorSendoEsconlhido(valorSendoEsconlhido + "3") },
          onpress4: () => { sub() },
          textobtn1: '1',
          textobtn2: '2',
          textobtn3: '3',
          textobtn4: '-',
        })}
      </View>
      <View style={styles.btnContainer}>
        {touchable({
          onpress1: () => { zerar() },
          onpress2: () => { setValorSendoEsconlhido(valorSendoEsconlhido + "0") },
          onpress3: () => { setValorSendoEsconlhido(valorSendoEsconlhido + ".") },
          onpress4: () => { som() },
          textobtn1: 'C',
          textobtn2: '0',
          textobtn3: ',',
          textobtn4: '+',
        })}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            calcular()
          }}>
          <Text>
            =
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: 300,
    height: 320
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20
  }
});
