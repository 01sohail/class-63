import * as React from 'react';
import { Text, View, StyleSheet,TextInput,SafeAreaView} from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends React.Component {
  constructor(){
  super();
  this.state = {text:""}
  }
  render() {
    return (
      
      <View style={styles.container}>
      <Header backgroundColor = {'#000000'}
  centerComponent = {{text:'MONKEY CHUNKY',style:{color:'#010101',fontSize:50}}} />
       <SafeAreaView> 
      <TextInput
      onChangeText = {(text)=>{
      this.setState({text:text});
      }}
      value = {this.state.text} />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
inputBox  : {
marginTop:200,
width:'80%',
alignSelf:'center',
height:40,
textAlign:'center',
borderWidth:4,
outline:'none',
}
});

