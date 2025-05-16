import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function index() {
  return (
    <View>
      <Text>Teste de Consumo</Text>
      <Button
      title='Começar'
      onPress={() => {router.push('/questoes')}}
      />
    </View>
  )
}