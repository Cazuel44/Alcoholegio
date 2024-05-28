import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue !== '') {
      const newValue = parseInt(inputValue, 10);
      setCount(count + newValue);
      setInputValue('');
    }
  };

  const handleReset = () => {
    setCount(0);
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Pressable onPress={() => setCount(count - 1)} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.countText}>{count}</Text>
        <Pressable onPress={() => setCount(count + 1)} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
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