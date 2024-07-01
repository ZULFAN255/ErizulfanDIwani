import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Kontak from './kontak';

const Home = ({ navigation }) => {
  const handlePress = (gambar, judul, telpon) => {
    navigation.navigate('About', { gambar, judul, telpon });
  };

  return (
    <View style={styles.container}>
      <Kontak
      gambar={require('../assets/zul.jpg')}
        judul="Eri Zulfan Diwani"
      />
      <Button
        title="Deskripsi"
        onPress={() => handlePress(require('../assets/zul.jpg'), 'Zulfan', '085795769727')}
      />

      <Kontak
      gambar={require('../assets/iyaw.jpeg')}
        judul="Ferri Ekalaya"
      />
      <Button
        title="Deskripsi"
        onPress={() => handlePress(require('../assets/iyaw.jpeg'), 'Feri', '081378682871')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
