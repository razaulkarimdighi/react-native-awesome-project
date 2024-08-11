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
          <View>
           <TouchableOpacity onPress={() => openWebsite('https://www.facebook.com')}>
            <Text style={styles.socialLinks}>Read More</Text>
           </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
           </TouchableOpacity>
          </View>
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
  elevatedCard: {
    backgroundColor: '#ffe19c',
    elevation: 3,
    shadowOffset: {
        width: 1,
        height: 1,
    },

  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600'
  },
  cardImage: {
    height: 190,

  },
  bodyContainer: {
    padding: 10
  },
  footerContainer: {
    padding: 10,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  socialLinks:{
    fontSize: 16,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  }
});
