import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MemeItem from './MemeItem';

const MemeGallery = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MemeItem meme={item} />}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});

export default MemeGallery;