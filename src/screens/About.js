import React from 'react';
import {View, Dimensions} from 'react-native';
import {Text, Image, Tile} from 'react-native-elements';

const About = props => {
  console.log(props);
  return (
    <View
      style={{
        marginTop: 30,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Tile
        imageSrc={require('../public/images/kbtu.jpg')}
        featured
        editButton={{backgroundColor: 'black'}}
        height={200}
        width={240}
      />
      <Text h4 style={{marginTop: 10}}>
        Mobile programming project
      </Text>
      <Text style={{paddingHorizontal: 20, textAlign: 'center'}}>
        This <Text style={{fontWeight: 'bold'}}>Project App</Text> intended for
        job seekers and companies. Companies can search engineers while
        engineers search companies.
      </Text>
      <Text style={{paddingHorizontal: 20, marginTop: 20, textAlign: 'center'}}>
        v1.0.0
      </Text>
      <Text style={{paddingHorizontal: 20, marginTop: 20, textAlign: 'center'}}>
        By : Aitakyn Sultan, Aidana Duisembay, Akbota Mautkyzy, Alikhan Kumarov
      </Text>
    </View>
  );
};

export default About;
