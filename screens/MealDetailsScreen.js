import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MealDetailsScreen({route}) {
  return (
    <View>
      <Text>Meal Details Screen {route.params.mealId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})