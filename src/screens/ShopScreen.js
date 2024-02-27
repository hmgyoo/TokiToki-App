import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MemeGallery from '../components/MemeGallery';

const memeData = [
  { id: '1', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme1.jpg', caption: 'Caption 1' },
  { id: '2', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme2.jpg', caption: 'Caption 2' },
  { id: '3', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme3.jpg', caption: 'Caption 3' },
  { id: '4', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme4.jpg', caption: 'Caption 4' },
  { id: '5', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme5.jpg', caption: 'Caption 5' },
  { id: '6', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme6.jpg', caption: 'Caption 6' },
  { id: '7', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme7.jpg', caption: 'Caption 7' },
  { id: '8', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme8.jpg', caption: 'Caption 8' },
  { id: '9', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme9.jpg', caption: 'Caption 9' },
  { id: '10', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme10.jpg', caption: 'Caption 10' },
  { id: '11', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme11.jpg', caption: 'Caption 11' },
  { id: '12', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme12.jpg', caption: 'Caption 12' },
  { id: '13', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme13.jpg', caption: 'Caption 13' },
  { id: '14', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme14.jpg', caption: 'Caption 14' },
  { id: '15', imageUri: 'https://d2c9rtb1ysanaa.cloudfront.net/meme15.jpg', caption: 'Caption 15' },
  // Add more meme objects as needed
];

const ShopScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar barStyle='dark-content'/>
      <MemeGallery data={memeData}/>
    </SafeAreaView>
  )
}

export default ShopScreen

const styles = StyleSheet.create({})