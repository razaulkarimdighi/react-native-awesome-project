import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElivatedCards from './components/ElivatedCard';
import FancyCard from './components/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElivatedCards/>
        <FancyCard/>
        <FancyCard/>
        <FancyCard/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
