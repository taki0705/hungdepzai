// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider
// import React in our code
import React, { useState } from 'react';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const Screenonboarding = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          padding:50,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
       
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default Screenonboarding ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:100,
  },
  paragraphStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 210,
    height: 210,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Welcome to our restaurant app! Log in and check  out our delicious food',
    title: 'Browse Food',
    image: require('./assets/icons8-restaurant-menu-101.png'),
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Order Food',
    text: 'Hungry? Order food in just a few clicks and we’ll take care of you.',
    image: require('./assets/icons8-delivery-500.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Make Reseravations',
    text: 'Book a table in advance to avoid waiting in line',
    image: require('./assets/noun_Calendar_2442157.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'QuickSearch',
    text: ' Quickly find food items you likethe most',
    image: require('./assets/noun_Binoculars_1107295.png'),
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Apple Pay',
    text: 'We know you’re busy, so you can pay with your phone in just one click',
    image: require('./assets/noun_mac_2076879.png'),
    backgroundColor: '#f6437b',
  },
];
