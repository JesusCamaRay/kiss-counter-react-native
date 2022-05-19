import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fab } from '../components/Fab'

export const CounterScreen = () => {

  const [counter, setCounter] = useState(100)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kisses: {counter} 💋</Text>
      <Fab 
        title='+1'
        position='br'
        onPress={()=>setCounter(counter+1)}
      />
      <Fab 
        title='-1'
        position='bl'
        onPress={()=>setCounter(counter-1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    position:'relative', // by default in React Native
    backgroundColor:'#fdf0d5'
  },
  title: {
    fontSize: 40,//units
    textAlign:'center',
    top:-15,
    color: '#403f4c'
  },
 
})