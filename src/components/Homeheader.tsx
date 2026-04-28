import { View, Text,StyleSheet } from 'react-native'
import {colors, globalStyles} from '@/styles/global'
import React from 'react'

const Homeheader = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
});
  return (
    <View style = {globalStyles.header}>
      <Text style = {style.date}> {currentDate}</Text>
    </View>
  )
}
const style = StyleSheet.create({
    date : {
        fontSize : 14,
        color: '#a0a0b0',
       marginTop: 4,
       marginBottom: 30,
    }
})

export default Homeheader