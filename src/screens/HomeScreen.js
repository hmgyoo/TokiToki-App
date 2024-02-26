import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import Video, { VideoRef } from 'react-native-video'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const post = {
  id: '1',
  video: 'https://d2c9rtb1ysanaa.cloudfront.net/funny-orange-cats.mp4',
  caption: 'lorem ipsum fadfadag'
}

const postVid = {
  id: '2',
  image: 'https://d2c9rtb1ysanaa.cloudfront.net/orange-cat-face-pixabay.jpg'
}

const HomeScreen = () => {

  const videoRef = useRef(null);
  const [isPaused, setPaused] = useState(false);

  const handlePress = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.seek(0); // Optionally, reset video to the beginning when unpausing
      }
      setPaused(!isPaused);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'rgba(0,0,0,0)'}/>

      {/* video feed */}
      <Video
        source={{ uri: post.video }}
        ref={videoRef}
        style={styles.backgroundVideo}
        resizeMode='cover'
        repeat={true}
        controls={true}
      />

      {/* Contents of the screen */}
      <Pressable onPress={handlePress} style={styles.content}>
        <LinearGradient 
          colors={[ 'transparent', 'rgba(0,0,0,0.8)']}
          style={[StyleSheet.absoluteFill, styles.overlay]}
        />
        <SafeAreaView style={{ flex: 1}}>
          <View style={styles.footer}>

            {/* bottom: caption */}
            <View style={styles.leftColumn}>
              <Text style={styles.caption}>{post.caption}</Text>
            </View>

            {/* vertical column of icon buttons */}
            <View style={styles.rightColumn}>
              <Ionicons name='heart' size={30} color={'#fff'}/>
              <Ionicons name='chatbubble-ellipses' size={30} color={'#fff'}/>
              <Ionicons name='bookmark' size={30} color={'#fff'}/>
              <Ionicons name='share-social' size={30} color={'#fff'}/>
            </View>

          </View>
        </SafeAreaView>
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFill,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  overlay: {
    top: '50%'
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    gap: 10,
  },
  caption: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: 18,
  }
})