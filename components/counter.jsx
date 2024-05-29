import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../features/counter/counterSlice';

//VER CLASE 1:32

export const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue !== '') {
      const parseValue = parseInt(inputValue, 10);
      dispatch(incrementByAmount(parseValue)); // Dispatch de incrementByAmount con el valor ingresado y parseando el numero
      setInputValue('');
    }
  };

  const handleReset = () => {
    dispatch(reset()); // Dispatch de la acción reset
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Pressable onPress={() => dispatch(decrement())} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.countText}>{count}</Text>
        <Pressable onPress={() => dispatch(increment())} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.counterInput}>
        <TextInput
          style={styles.input}
          onChangeText={text => setInputValue(text)}
          value={inputValue}
          keyboardType="numeric"
          placeholder="Ingrese un número"
        />
        <Button title="ADD" onPress={handleAdd} />
      </View>
      <View style={styles.resetButtonContainer}>
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  counterInput: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    /* backgroundColor: 'red', */
  },
  button: {
    padding: 10,
    backgroundColor: '#DDD',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonPressed: {
    backgroundColor: '#BBB',
  },
  buttonText: {
    fontSize: 24,
  },
  countText: {
    fontSize: 24,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    marginRight: 8,
    paddingHorizontal: 10,
  },
  resetButtonContainer: {
    marginTop: 20,
  },
});