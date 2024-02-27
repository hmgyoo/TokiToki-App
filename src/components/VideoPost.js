import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Pressable, Dimensions, useWindowDimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Video, { VideoRef } from 'react-native-video'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';


const VideoPost = ({ post, activePostId }) => {
  
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const insets = useSafeAreaInsets();
  const adjustedHeight = height - insets.top - insets.bottom;
  const { height } = useWindowDimensions();

  useEffect(() => {
    if (post.id === activePostId) {
      setIsPlaying(true);
    }
  }, [activePostId]);

  return (
    <View style={[styles.container, { height: height}]}>

      {/* video feed */}
      <Video
        source={{ uri: post.video }}
        style={styles.backgroundVideo}
        resizeMode='cover'
        repeat={true}
        paused={!isPlaying}
      />

      {/* Contents of the screen */}
      <Pressable onPress={() => setIsPlaying(!isPlaying)} style={styles.content}>

        {/* linear gradient */}
        <LinearGradient 
          colors={[ 'transparent', 'rgba(0,0,0,0.6)']}
          style={[StyleSheet.absoluteFill, styles.overlay]}
        />

        {/* play icon when paused */}
        {!isPlaying && (<Ionicons 
          style={{ position: 'absolute', alignSelf: 'center', top: '50%'}}
          name='play'
          size={70}
          color='rgba(255,255,255,0.40)'
        />)}

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

export default VideoPost

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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