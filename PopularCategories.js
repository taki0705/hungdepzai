import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const data = [
  { id: '1', name: 'Breakfast', image: require('./assets/breakfast.png') },
  { id: '2', name: 'Ramen', image: require('./assets/ramen.png') },
  { id: '3', name: 'Sandwiches', image: require('./assets/triple-sandwich-032.png') },
  { id: '4', name: 'Mediterranean', image: require('./assets/meditera.png') },
  { id: '5', name: 'Maro', image: require('./assets/meditera.png') },
];

const PoupularCategories = () => {
  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image  source={require('./assets/icons8-menu-101.png')}/>
        <Image  source={require('./assets/icons8-shopping-cart-500.png')}/>
      </View>
      <Text style={styles.txt}>Popular Categories</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={true}
      />
      <Text style={styles.txt2}>Best Deals</Text>
      <Image style={styles.img}  source={require('./assets/ramensl.png')}/>
      <Text style={styles.txt3}>Most Popular</Text>
      <Image   source={require('./assets/Forbidden-Rice-Salad-575x262.png')}/>
      <View style={styles.txt4}>
      <Text>Forbidden Salad</Text>
      <Text>$11.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   wrapper: {},
  container: {
    padding: 10,
    marginTop:20,
  },
  img: {
   backgroundColor:'red'
  },
  header:{
   flexDirection: 'row',
   gap:300,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  txt2: {
   marginTop:35,
   fontSize: 20,
   fontWeight: 'bold',
 },
 txt3: {
   marginTop:20,
   fontSize: 20,
   fontWeight: 'bold',
 },
 txt4:{
   flexDirection: 'row',
   justifyContent:'space-between'
 },
  story: {
    flexDirection: 'row',
  },
  imageContainer: {
    marginRight: 10,
    marginTop:20,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
  },
  img:{
   width:'100%',
  }
});

export default PoupularCategories;
