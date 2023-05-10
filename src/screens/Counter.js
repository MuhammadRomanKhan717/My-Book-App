import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  // let count=0;

  return (
    <SafeAreaView>
        <Text style={styles.text}>{`Count ${count}`}</Text>
    <View style={styles.mainView} >
     
      <View style={styles.Container}>
        <TouchableOpacity onPress={()=>setCount(count+1)}>
         <Text>Increment </Text>
        </TouchableOpacity>
      </View>

      <View  style={styles.decreaseContainer} >
      <TouchableOpacity onPress={()=>setCount(count-1)}>
<Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
 
}

export default Counter

const styles = StyleSheet.create({
    mainView:{
        justifyContent:'space-between',
    
      flexDirection:'row' ,
      alignContent:'center',


    },
    Container:{
        backgroundColor:"#FFB6C1",
        borderColor:"#C71585",
        margin:20,
        alignItems:'center',
        padding:20,
        width:100,
        borderRadius:20,
        borderWidth:4,
        justifyContent:'flex-end',
       
    },

    decreaseContainer:
    {
        backgroundColor:"#FFB6C1",
        margin:20,
        alignItems:'center',
        padding:20,
        width:100,
        borderRadius:20,
        borderWidth:4,
        justifyContent:'center',
        borderColor:"#C71585"
    },
    text:{
        fontSize:30,

        borderWidth:6,
        borderRadius:20,
        alignSelf:'center',
        backgroundColor:"blue"
    }
    
})