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
            uri: 'https://images.pexels.com/photos/25711226/pexels-photo-25711226/free-photo-of-charleston-falls-preserve-in-ohio-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
            <Text style={styles.socialLinks}>Read More</Text>
           </TouchableOpacity>
          </Text>
          <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
           </TouchableOpacity>
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
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {
    height: 100,
  },
  bodyContainer: {},
  footerContainer: {},
  socialLinks:{}
});
