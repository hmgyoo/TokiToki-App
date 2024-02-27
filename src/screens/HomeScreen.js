import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Pressable, FlatList,Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import VideoPost from '../components/VideoPost';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';


const post = [
  {
    id: '1',
    video: 'https://d2c9rtb1ysanaa.cloudfront.net/funny-orange-cats.mp4',
    caption: 'Funny orange cats'
  },
  {
    id: '2',
    video: 'https://d2c9rtb1ysanaa.cloudfront.net/Aespa with RedVelvet.mp4',
    caption: 'Aespa and Red Velvet mga OA'
  },
  {
    id: '3',
    video: 'https://d2c9rtb1ysanaa.cloudfront.net/BL vs  FF G1.mp4',
    caption: 'Blacklist vs FireFlux Game 1'
  },
  {
    id: '4',
    video: 'https://d2c9rtb1ysanaa.cloudfront.net/maloi OA.mp4',
    caption: 'Maloi Jejemon'
  },
  {
    id: '5',
    video: 'https://d2c9rtb1ysanaa.cloudfront.net/MJ Tan.mp4',
    caption: 'Mj Tan vibes'
  },
  {
    id: '6',
    video: 'https://d2c9rtb1ysanaa.cloudfront.net/XSR 155 Sasha.mp4',
    caption: 'XSR 155'
  },
];

const HomeScreen = () => {

  const [activePostId, setActivePostId] = useState([post[0].id]);

  // useEffect(() => {
  //   // fetch videos 
  //   const fetchVideos = async () => {
  //     try {
  //       const response = await axios.get('https://d2c9rtb1ysanaa.cloudfront.net');
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching videos:', error);
  //     }
  //   };

  //   fetchVideos();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'}/>

      {/* Flatlist */}
      <FlatList 
        data={post}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoPost post={item} activePostId={activePostId}/>}
        // decelerationRate={'fast'}
        // pagingEnabled={true}
      />

    </SafeAreaView>  
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
})