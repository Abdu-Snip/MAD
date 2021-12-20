import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Textarea from 'react-native-textarea';
import { StarsRating } from 'stars-rating-react-hooks';


export default function FeedbackScreen({navigation}) {

  const [feedback, setFeedback] = React.useState('');


  const Comment = async (feedback) => {
    await axios
  .post("http://localhost:1337/auth/local", {
    feedback,
  })
  .then((response) => {
    // Handle success.
    console.log("Well done!");
    console.log("User profile", response.data.user);
    console.log("User token", response.data.jwt);
    
  })
  .catch((error) => {
    // Handle error.
    console.log("An error occurred:", error.response);
  });
};

  const config = {
    totalStars: 5,
    initialSelectedValue: 5,
    renderFull: (
      <img
        src="https://img.icons8.com/ios-filled/50/000000/star--v1.png"
        style={{ width: 20 }}
      />
    ),
    renderEmpty: (
      <img
        src="https://img.icons8.com/ios/50/000000/star--v1.png"
        style={{ width: 20 }}
      />
    ),
    renderHalf: (
      <img
        src="https://img.icons8.com/ios-filled/50/000000/star-half-empty.png"
        style={{ width: 20 }}
      />
    ),
  };

  const [text, onChangeText] = React.useState('');
  const clearInput = React.useCallback(() => onChangeText(''), []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Reviews</Text>
      </View>

      <View style={styles.align1}>
        <Image
          style={styles.topImage1}
          source={require('../assets/profile.png')}
        />
        <Text style={styles.SubText2}>Shosci sho</Text>
      </View>

      <View style={styles.align2}>
        <Text style={{ color: 'grey', fontWeight: '700', marginBottom: 10, fontSize: 14, }}>
          Rate this product
        </Text>

        <StarsRating config={config} />
      </View>

      <View style={styles.align3}>
        <Text style={{ color: 'grey', fontWeight: '600', marginBottom: 10, fontSize: 12,}}>
          Leave Review
        </Text>

        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          maxLength={300}
          value={feedback}
          onChangeText={setFeedback}
          placeholder={'Write Your Reviews...'}
          underlineColorAndroid={'transparent'}
        />
      </View>

      <View style={styles.align4}>
        <Button
          mode="contained"
          color="#48b749"
          title="Submit"
          onPress={()=>navigation.navigate('ApprovalScreen')}
          ></Button>
          
          <Button
          mode="contained"
          color="#48b749"
          title="Logout"
          onPress={()=>navigation.navigate('Login')}
          ></Button>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  topImage1: {
    alignItems: 'center',
    width: 80,
    height: 80,
  },

  boxy: {
    marginTop: 1,
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 5,
    borderRadius: 20,
  },
  align1: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    marginLeft: 20,
    width: '100%',
  },

  align2: {
    alignItems: 'left',
    padding: 10,
    width: '100%',
    marginLeft: 40,
  },

  align3: {
    alignItems: 'left',
    padding: 10,
    width: '90%',
    marginBottom: 10,
  },

  align4: {
    alignItems: 'left',
    padding: 10,
    width: '90%',
    marginBottom: 10,
  },

  textareaContainer: {
    height: 100,
  },

  textarea: {
    textAlignVertical: 'top',
    height: 170,
    fontSize: 14,
    padding: 10,
    color: '#333',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },

  SubText2: {
    fontSize: 15,
    color: '#48b749',
    fontWeight: 'bold',
    marginLeft: 15,
  },

  heading: {
    fontSize: 18,
    fontWeight: 600,
    paddingVertical: 20,
  },
});