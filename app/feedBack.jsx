import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function feedBack() {
  return (
    <View>
      <Text>feedBack</Text>
      <Button
      title='Voltar ao Inicio'
      onPress={() => {router.push('/')}}
      />
    </View>
  )
}