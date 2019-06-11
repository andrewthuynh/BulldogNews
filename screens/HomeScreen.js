import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import axios from "axios";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial Data"
    };
  }

  getData = async () => {
    try {
      await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0c69f9ba9a494e84a33b2749dab3fc5e`).then(res => {
        this.setState({
          name: res.data.articles[0].title
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

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
