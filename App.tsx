/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react'
import { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ScrollViewProps,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { 
  createStackNavigator, 
  createAppContainer, 
  createBottomTabNavigator, 
  NavigationInjectedProps 
} from "react-navigation";

import { 
  LargeTitlesScrollView, 
  largeTitlesNavigationOptions 
} from "./LargeTitles";

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

class HomeScreen extends React.Component<NavigationInjectedProps> {
  static navigationOptions = largeTitlesNavigationOptions;

  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <LargeTitlesScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          scrollEventThrottle={1}
        >
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </LargeTitlesScrollView>
      </SafeAreaView>
    </Fragment>    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
    }
  }
});

const TabNavigator = createBottomTabNavigator({
  Home: AppNavigator,
  Recipients: AppNavigator,
  Settings: AppNavigator,
});

export default createAppContainer(TabNavigator);