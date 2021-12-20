import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Searchbar } from 'react-native-paper';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MySearch = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    
    <View style={styles.search}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          height: 34,
          width: '80%',
          borderWidth: 1,
          borderColor: 'green',
          marginTop: 5,
        }}
      />
      <TouchableOpacity onPress={()=> navigation.navigate('Accounts')}>
      <View style={styles.leftBox}>
        <Image
          style={{
            width: 40,
            height: 40,
            marginLeft: 5,
          }}
          source={require('../assets/profile.png')}
        />
      </View>
      </TouchableOpacity>
    </View>
  );
};

const CategoryName = ({ name }) => {
  return (
    <Pressable onPress={() => console.log('pressd')}>
      <View
        style={{
          borderWidth: 1,
          width: 60,
          height: 60,
          borderRadius:10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={styles.bottomImage2}
          source={require('../assets/iconfruits.png')}
        />
      </View>
      <Text style={{ textAlign: 'center', fontWeight: 400 }}>{name}</Text>
    </Pressable>
  );
};

const PopularFruit = ({navigation}) => {
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("Details") }>
    <View style={styles.popularFruitImage}>
      <View style={styles.like}>
      <MaterialCommunityIcons
            name="heart-outline"
            size={25}
            color="green" />
      </View>
      <View style={{ flexDirection:"column", alignContent:"center", justifyContent:"center",  }}>
        <Image
          style={{ width: 100, height: 100, marginBottom:10, alignSelf:"center"}}
          source={require('../assets/iconfruits.png')}
        />
        <Text style={styles.viewAllText}>Banana</Text>
        <Text style={styles.viewAllText}>$70</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <MySearch navigation={navigation}/>
      <View>
      <TouchableOpacity>
        <ScrollView>
          <View style={styles.imageBlock}>
            <Image
              style={styles.bottomImage}
              source={require('../assets/banner.jpg')}
            />
          </View>
        </ScrollView>
        </TouchableOpacity>
        <Text style={styles.textCatagory}>Categories</Text>

        <View style={styles.Catorgries}>
          <CategoryName name={'All'} />
          <CategoryName name={'Fist'} />
          <CategoryName name={'Fruit'} />
          <CategoryName name={'Vegetable'} />
          <CategoryName name={'Meat'} />
        </View>
      </View>
      <View style={styles.popularFruits}>
        <Text style={styles.textCatagory2}>Popular Fruits</Text>
        <Text style={styles.viewAllText2}>See all</Text>
      </View>

      <View style={styles.popularFruitImageContainer}>
        <PopularFruit navigation={navigation}/>
        <PopularFruit navigation={navigation}/>
      </View>

      <View style={styles.popularFruits}>
        <Text style={styles.textCatagory3}>Best Price</Text>
        <Text style={styles.viewAllText}>See all</Text>
      </View>

      <View style={styles.bestPriceImageContainer}>
        <View style={styles.bestPrice}></View>
        <View style={styles.bestPrice}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 8,
  },
  leftBox: {
    backgroundColor: 'white',

    width: 34,
    height: 34,
  },
  textCatagory: {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#353434',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },

    textCatagory2: {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#353434',
    marginLeft: 10,
    marginTop: 30,
  },

  textCatagory3: {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
    color: '#353434',
  },


  Catorgries: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  popularFruits: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  viewAllText: {
    marginHorizontal: 8,
    alignSelf:"center",
  },

  viewAllText2: {
    marginHorizontal: 8,
    marginTop: 30,
  },

  popularFruitImageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bestPriceImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 30,
  },
  popularFruitImage: {
    flex:1,
    marginHorizontal:10,
    borderWidth: 1,
    padding:5,
    borderRadius: 5,
    borderColor: 'green',
    overflow: 'hidden',
    position:"relative",
  },
  
  bestPrice: {
    width: '90%',
    height: 80,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  like: {
    position: 'absolute',
    right: 5,
  },
  bottomImage: {
    width: 300,
    borderRadius: 5,
    height: 180,
  },

 bottomImage2: {
    width: 50,
    borderRadius: 5,
    height: 50,
  },

  imageBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%'
  },
});
