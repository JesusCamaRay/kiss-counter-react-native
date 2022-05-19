//FAB: Floating Action Button
import React from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback,Platform, TouchableOpacityBase, TouchableOpacity } from 'react-native'

interface IProps{
  title:string,
  position?:'br'|'bl'
  onPress:()=>void,
}

export const Fab = ({title, onPress, position='br'}:IProps) => {

  const ios = ()=>{
    return(
      <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[styles.fabLocation, 
              (position === 'bl') && styles.left,
              (position === 'br') && styles.right,
            ]}
          >
            <View style={styles.fab}>
              <Text style={styles.fabText}>{title}</Text>
            </View>
      </TouchableOpacity>
    )
  }

  const android = ()=>{
    return (
      <View 
        style={[styles.fabLocation, 
          (position === 'bl') && styles.left,
          (position === 'br') && styles.right,
        ]}
      >
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple('#035edd',false,30)}
          >
            <View style={styles.fab}>
              <Text style={styles.fabText}>{title}</Text>
            </View>
          </TouchableNativeFeedback>
      </View>
    )
  }

  return (Platform.OS === 'ios') ? ios() : android()
  
}

const styles = StyleSheet.create({
  fabLocation:{
    position: 'absolute',
    bottom: 25,
  },
  right:{
    right:25
  },
  left:{
    left:25
  },
  fab:{
    backgroundColor: '#d81e5b',
    width:60,
    height:60,
    borderRadius: 100,
    justifyContent:'center',

    //Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  fabText:{
    color:'white',
    fontSize:25,
    fontWeight: 'bold',
    alignSelf:'center',
  }
})