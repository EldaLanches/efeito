import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';


export default function App() {
  const [mensagem, setMensagem] = useState("Carregando mensagem motivacional...");
  useEffect(() => {
    setTimeout(() => {
      setMensagem("O sucesso é a soma de pequenos esforços repetidos dia após dia.");
    }, 5000);
  }, []);


  return (
    <View style={{ marginTop: 100, fontSize: 100, textAlign: 'center' }}>
      <Text>{mensagem}</Text>
    </View>
  );
}


