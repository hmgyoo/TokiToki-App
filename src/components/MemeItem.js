import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const MemeItem = ({ meme }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: meme.imageUri }} style={styles.image}/>
      <Text style={styles.caption}>{meme.caption}</Text>
    </View>
  );
};

export default MemeItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  caption: {
    textAlign: 'center',
    padding: 8,
    backgroundColor: '#f0f0f0',
  },
});
