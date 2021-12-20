import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';


export default function Splash4({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.HeadingText}>Welcome</Text>
      </View>

      <Text style={styles.SubText1}>Best Quality</Text>

      <View style={styles.textView2}>
        <Text style={styles.SubText2}>Grocery</Text>
        <Text style={styles.SubText3}> Door to Door</Text>
      </View>

      <Image style={styles.topImage1} source={require('../assets/bundle.png')} />

      <View style={styles.tex}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.destext}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Image
            style={styles.topImage2}
            source={require('../assets/right-arrow.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  tex: {
    flex: 1,
    flexDirection: 'row',
    padding: 40,
    alignItems: 'left',
    position: 'relative',
    marginTop: 70,
  },

  textView: {
    marginTop: 10,
    alignItems: 'center',
  },

  textView2: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 40,
  },

  HeadingText: {
    fontSize: 20,
    fontWeight: 600,
    paddingVertical: 20,
  },

  SubText1: {
    marginTop: 50,
    color: 'grey',
    fontSize: 30,
    fontWeight: 'normal',
    marginLeft: 40,
  },

  destext: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'normal',
  },

  SubText2: {
    color: '#48b749',
    fontSize: 30,
    fontWeight: 'normal',
  },

  SubText3: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'normal',
  },

  topImage1: {
    alignItems: 'center',
    justifyContent: "center",
    alignContent: "center",
    marginTop: 50,
    width: 351,
    height: 263,
    marginLeft: 30,
    marginBottom: 70,
  },

  topImage2: {
    width: 20,
    height: 20,
    marginLeft: 280,
    marginTop: 3,
  },
});
