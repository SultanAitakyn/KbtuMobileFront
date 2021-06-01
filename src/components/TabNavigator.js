import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

// Import Screen
import MyProfile from '../../src/screens/MyProfile';
import Engineers from '../../src/screens/Engineers';
import Companies from '../../src/screens/Companies';
import About from '../../src/screens/About';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    MyProfile: {
      screen: MyProfile,
      navigationOptions: {
        tabBarLabel: 'My Profile',
        tabBarIcon: ({tintColor}) => (
          <View>
            <FontAwesome5
              style={[{color: tintColor}]}
              size={20}
              name={'user'}
            />
          </View>
        ),
      },
    },
    Engineers: {
      screen: Engineers,
      navigationOptions: {
        tabBarLabel: 'Engineers',
        tabBarIcon: ({tintColor}) => (
          <View>
            <FontAwesome5
              style={[{color: tintColor}]}
              size={20}
              name={'laptop-code'}
            />
          </View>
        ),
        activeColor: '#4267B2',
        inactiveColor: '#1A2947',
        barStyle: {backgroundColor: '#FFF'},
      },
    },
    Companies: {
      screen: Companies,
      navigationOptions: {
        tabBarLabel: 'Companies',
        tabBarIcon: ({tintColor}) => (
          <View>
            <FontAwesome5
              style={[{color: tintColor}]}
              size={20}
              name={'building'}
            />
          </View>
        ),
        activeColor: '#4267B2',
        inactiveColor: '#1A2947',
        barStyle: {backgroundColor: '#f0edf6'},
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarLabel: 'About',
        tabBarIcon: ({tintColor}) => (
          <View>
            <FontAwesome5
              style={[{color: tintColor}]}
              size={20}
              name={'question-circle'}
            />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'MyProfile',
    activeColor: '#f0edf6',
    inactiveColor: '#1A2947',
    barStyle: {backgroundColor: '#4267B2'},
  },
);

export default TabNavigator;
