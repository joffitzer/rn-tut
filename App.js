import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('jonah');
  const [person, setPerson] = useState({ name: 'mario', age: 40})

  const clickHandler = () => {
    setName('new name');
    setPerson({name: 'luigi', age: 45})
  }

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}></View>
        <Button title='update state' onPress={clickHandler}/>
=======
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, world!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem ipsum</Text>
        <Text>Lorem ipsum</Text>
        <Text>Lorem ipsum</Text>
      </View>
>>>>>>> 79cc36f2df8a18e3d8f0062ac3ba8bd2c750c02f
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
<<<<<<< HEAD
  buttonContainer: {
    marginTop: 20
=======
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
>>>>>>> 79cc36f2df8a18e3d8f0062ac3ba8bd2c750c02f
  }
});
