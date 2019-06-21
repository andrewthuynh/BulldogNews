import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    View,
    ScrollView,
    Heading,
} from '@shoutem/ui';

class CategoriesScreen extends Component {

    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
            <Heading>US News</Heading>
            <Heading>Sports</Heading>
            <Heading>Fashion</Heading>
            <Heading>Food</Heading>
            <Heading>Technology</Heading>
            <Heading>Music</Heading>
            </View>
            </ScrollView>
        )
    }
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
  
    }
  });