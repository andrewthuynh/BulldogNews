import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import axios from "axios";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial Data"
    };
    this.getData = this.getData.bind(this);
  }
  getData() {
    let firstMovieTitle;
    axios.get("https://facebook.github.io/react-native/movies.json").then(function(response) {
      firstMovieTitle = response.data.movies[0].title;
      console.log(firstMovieTitle);
    });

    this.setState({
      name: firstMovieTitle
    });
  }

  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>
        <Button onPress={this.getData} title="Click Me!" />
      </View>
    );
  }
}

export default HomeScreen;
