import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput , Button } from 'react-native';

const App = () => {
  return (
   <View style={styles.screen}  >
     <View style={styles.inputContainer}>
     <TextInput placeholder="Course Goal"  style={styles.input} />
     <Button title="ADDIa" />
     </View>
     <View>

     </View>
   </View>
  );
}

const styles = StyleSheet.create({
screen:{
padding:50
},
inputContainer:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center'
},
input:{ width:'80%' , 
borderColor:'black',
borderWidth:1}
});

export default App;