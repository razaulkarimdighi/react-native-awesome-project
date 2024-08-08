import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*U4gZLnRtHEeJuc6tdVLwPw.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Good Moring</Text>
            <Text style={styles.cardLabel}>Morning Scene</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo omnis nisi quae sint eos saepe rerum, provident architecto fuga ad, dolor debitis quos magni molestias consequatur, deleniti ipsam ab fugit.
            </Text>
            <Text style={styles.cardFooter}>12 Minute</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#ffe19c',
    elevation: 3,
    shadowOffset: {
        width: 1,
        height: 1,
    }
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4
  },
  cardLabel:{
    fontSize: 14,
    marginBottom: 6
  },
  cardDescription:{
    fontSize: 12,
    marginTop: 6,
    marginBottom: 12
  },
  cardFooter:{
    
  }

});
