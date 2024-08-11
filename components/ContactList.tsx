import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      description: 'Lady with a red umbrella',
      imageUrl: 'https://dummyimage.com/300x200/000/fff',
    },
    {
      uid: 2,
      description: 'Flowers and some fruits',
      imageUrl: 'https://dummyimage.com/400x300/00ff00/000',
    },
    {
      uid: 3,
      description: 'Beautiful scenery',
      imageUrl: 'https://dummyimage.com/800x600/ff0000/fff',
    },
    {
      uid: 4,
      description: 'Some kind of bird',
      imageUrl: 'https://dummyimage.com/200x200/ff00ff/fff',
    },
    {
      uid: 5,
      description: 'The attack of dragons',
      imageUrl: 'https://dummyimage.com/500x300/ffff00/000',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, description, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image 
                source={{
                    uri : imageUrl
                }}
                style={styles.userImage}
                />
                <Text style={styles.imgDescription}>{description}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    },
    container:{
        marginVertical: 12,
        marginHorizontal: 16,
    },
    usercard:{},
    userImage:{
        height: 200,
    },
    imgDescription:{
        fontSize: 16,
        paddingVertical: 8,
    }
});
