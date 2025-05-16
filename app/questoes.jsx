import { router } from 'expo-router'
import React, { useContext } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { contexto } from '../components/contexts/questoesContext'

const perguntas = [
{ id: 1, title: '1)Na casa em que você vive com sua família, nos cômodos em que a luzes ficam acesas por mais de 4 horas, as lâmpadas são econômicas (led)? (Sim ou não)' },
  { id: 2, title: '2)Quando você toma banho, você demora mais do que 10 minutos? (Sim ou não)' },
  { id: 3, title: '3)Você deixa a torneira aberta ao escovar os dentes? (Sim ou não)' },
  { id: 4, title: '4)Na casa ou prédio em que você vive com sua família, a calçada é limpa com vassoura ao invés de água? (Sim ou não)' },
  { id: 5, title: '5)Você e sua família dão preferência às frutas e verduras da estação? (Sim ou não)' },
  { id: 6, title: '6)Você e sua família consomem produtos orgânicos? (Sim ou não)' },
  { id: 7, title: '7)Você e sua família fazem a separação dos materiais recicláveis? (Sim ou não)' },
  { id: 8, title: '8)Quando fazem compras, você e sua família dão preferência a materiais com embalagens recicláveis? (Sim ou não)' },
  { id: 9, title: '9)Quando você não está usando aparelhos eletrônicos você os desliga? (Sim ou não)' },
  { id: 10, title: '10)Você costuma utilizar o verso das folhas de papéis já utilizadas? (Sim ou não)' }
];

const renderItem = ({ item }) => (
    <View>
        <Text>{item.title}</Text>
        <Button
            title='Sim'
        />
        <Button
            title='Não'
        />
    </View>
);

const separador = () => <View style={estilo.separador} />;

export default function questoes() {



    return (
        <SafeAreaProvider>
            <SafeAreaView style={estilo.container}>
                <Text>Questões</Text>

                <FlatList
                    data={perguntas}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={separador}
                />


                <View>
                    <Button
                        title='Finalizar'
                        onPress={() => { router.push('/feedBack') }}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}


const estilo = StyleSheet.create({
    container: {
        flex: 1
    },
    separador: {
        height: 5,
        backgroundColor: '#ccc',
      }
})