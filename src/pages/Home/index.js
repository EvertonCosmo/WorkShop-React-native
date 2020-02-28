import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {red} from 'ansi-colors';
import styles from './styles';

// props.navigation;
const Home = ({navigation}) => {
  const [textSave, setTextSave] = useState('');
  function navigateToHello() {
    navigation.navigate('Hello', {value: textSave});
  }
  function changeText(text) {
    setTextSave(text);
    console.log('TEXT: ' + text);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME PAGE</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={'white'}
        placeholder={'type here'}
        onChangeText={text => changeText(text)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          width: '40%',
          height: '10%',
          alignItems: 'center',
          alignContent: 'center',
        }}
        onPress={navigateToHello}>
        <Text style={{fontSize: 30, color: 'white'}}>CLICK</Text>
      </TouchableOpacity>
      <Text>{textSave}</Text>
    </View>
  );
};

export default Home;
