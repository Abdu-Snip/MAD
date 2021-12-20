import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Span,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput, Card, Button } from 'react-native-paper';
import Counters from 'react-native-counters';

export default function Details({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
        <Image
          source={require('../assets/backArrow.png')}
          style={{ width: 10, height: 10, left: -100 }}
        />
        </TouchableOpacity>
        <Text style={styles.text}>Product Details</Text>
        <Image
          source={require('../assets/Cart.png')}
          style={{ width: 26, height: 20, position: 'absolute', right: 15 }}
        />
      </View>

      <View style={styles.body}>
        <Image
          source={require('../assets/anar.png')}
          style={{ width: 200, height: 170, position: 'absolute' }}
        />
        <Image
          source={require('../assets/heart.png')}
          style={{
            width: 26,
            height: 23,
            position: 'absolute',
            right: 8,
            top: 16,
          }}
        />
      </View>

      <View style={styles.body2}>
        <Text style={styles.text2}>$6.79</Text>

        <View style={{ flexDirection: 'row', marginTop: 13, marginLeft: 260 }}>
          <Counters style={{width:'10'}}>
            
          </Counters>
          <Pressable onPress={() => console.log('- Clicked')}>
            <Text
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
                borderRadius: 3,
              }}>
              -
            </Text>
          </Pressable>
          <Text style={{ fontSize: 14, marginHorizontal: 5 }}>2</Text>
          <Pressable onPress={() => console.log('- Clicked')}>
            <Text
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
                borderRadius: 3,
              }}>
              +
            </Text>
          </Pressable>
        </View>

        <Text style={styles.text3}>Pomegranate</Text>
        <Text style={styles.text4}>1 gk</Text>
        <Image
          source={require('../assets/rating.png')}
          style={{
            width: 96,
            height: 15,
            position: 'absolute',
            left: 15,
            top: 75,
          }}
        />
      </View>

      <View style={styles.body3}>
        <Text style={styles.text5}>
          Pomegranate my text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy It is a long established
          fact that a reader will to be distracted by the readable content of a
          page when looking at its layout.
        </Text>
        <Text style={styles.text6}>Related Products</Text>
      </View>

      <View style={styles.body4}>
        <View style={styles.body5}>
          <Image
            source={require('../assets/Apple.png')}
            style={{ width: 70, height: 70 }}
          />
          <Text style={styles.text8}>$4.75</Text>
          <Text style={{ color: 'grey', fontWeight: 'bold' }}>Green Apple</Text>
          <Text style={{ color: 'grey' }}>Each</Text>
        </View>
        <View style={styles.body5}>
          <Image
            source={require('../assets/green.png')}
            style={{ width: 70, height: 70 }}
          />
          <Text style={styles.text8}>$4.75</Text>
          <Text style={{ color: 'grey', fontWeight: 'bold' }}>
            Green Capsicum
          </Text>
          <Text style={{ color: 'grey' }}>Each</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          mode="contained"
          color="#48B749"
          onPress={() => navigation.navigate('ThankYou')}
          style={styles.buttons}
          labelStyle={{
            color: 'white',
            fontSize: 14,
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontVariant: 'small-caps',
            textAlignVertical: 'center',
            textAlign: 'center',
          }}>
          Add to Cart
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  body: {
    flex: 0.4,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  body2: {
    flex: 0.3,
    flexDirection: 'row',
  },

  body3: {
    flex: 0.45,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  body4: {
    flex: 0.45,
    flexDirection: 'row',
    //backgroundColor:'red',
    justifyContent: 'space-between',
  },

  body5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: '#BABABA',
  },

  text: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#707070',
    fontWeight: 500,
  },

  text2: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#48B749',
    position: 'absolute',
    left: 15,
    top: 10,
    fontWeight: 500,
  },

  text3: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#707070',
    position: 'absolute',
    left: 15,
    top: 30,
    fontWeight: 700,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text4: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#707070',
    position: 'absolute',
    left: 15,
    top: 56,
    fontWeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text5: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#707070',
    position: 'absolute',
    left: 15,
    top: 8,
    fontWeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text6: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#707070',
    position: 'absolute',
    left: 15,
    bottom: 2,
    fontWeight: 700,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text8: {
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 21,
    color: '#48B749',
  },
});