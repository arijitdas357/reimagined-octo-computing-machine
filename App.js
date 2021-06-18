import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput , Button } from 'react-native';

const App = () => {
  return (
   <View style={{padding:50}}  >
     <View style={{flexDirection:'row'}}>
     <TextInput placeholder="Course Goal"  style={{borderColor:'black',borderWidth:1}} />
     <Button title="ADD" />
     </View>
     <View>

     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;