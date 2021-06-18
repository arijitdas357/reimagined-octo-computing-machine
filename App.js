import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput , Button } from 'react-native';

const App = () => {
  return (
   <View style={{padding:50}}  >
     <View>
     <TextInput placeholder="Course Goal"  style={{borderColor:'black',borderBottomWidth:1}} />
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