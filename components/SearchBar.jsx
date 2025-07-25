import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search for a movie..."
      placeholderTextColor="#999"
      onChangeText={onSearch}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    margin: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});

export default SearchBar;
