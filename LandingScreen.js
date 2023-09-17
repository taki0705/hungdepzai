import { useNavigation } from "@react-navigation/native";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const LandingScreen=() => {
    const navigation = useNavigation();
    return(
       <View style={styles.container} > 
         <Image style={styles.ImageStyle} source={require('./assets/icons8-restaurant-menu-101.png')} />
         <Text style={styles.txt1} >Welcome to our restaurant</Text>
         <Text style={styles.txt2}>Order food and make reservations with one click.  </Text>
                 <View style={styles.button}>
                   
                 <View style={styles.buttonUp}>

        <Button title="Log in" onPress={()=>navigation.navigate('Login')}/>
        </View>

        <View style={styles.buttonDown}>
        <Button  title="Sign Up"onPress={()=>navigation.navigate('SignUp')} />
        </View>
        
        </View>
         </View>
        
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor: '#5EA33A',
    },
    ImageStyle:{
        width:150,
        height:150,
    },
    button:{
        marginTop:50,
        padding: 15,
        
        margin: 10,
        height:110,
        width:300,
    },
    buttonUp:{
        marginTop:30,
         overflow:'hidden',
         borderRadius: 999,
     },
    buttonDown:{
       marginTop:30,
        overflow:'hidden',
        borderRadius: 999,
    },
    txt1:{
        justifyContent: 'center',
        alignItems: 'center', 
        color:'white',
    },
    txt2:{
        justifyContent: 'center',
        alignItems: 'center', 
       
    }
  });
  
  export default LandingScreen;