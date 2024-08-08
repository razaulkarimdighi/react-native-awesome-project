import {StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in javascript 21</Text>
        </View>
        <Image
          source={{
            uri: 'https://source.unsplash.com/user/c_v_r/1900×800',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            tenetur ex aspernatur unde perferendis saepe ipsam deleniti, eum
            modi iure dicta ab repudiandae neque aliquid. Quaerat maxime
            praesentium dignissimos iusto.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <Text>
           <TouchableOpacity onPress={() => openWebsite('https://www.facebook.com')}>
            <Text>Read More</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => openWebsite('https://www.facebook.com')}>
            <Text>Follow Me</Text>
           </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {
    height: 100,
  },
  bodyContainer: {},
  footerContainer: {},
});
