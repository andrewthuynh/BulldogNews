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

    getData = async () => {
        try {
            await axios
                .get(`https://facebook.github.io/react-native/movies.json`)
                .then(res => {
                    this.setState({
                        name: res.data.movies[0].title
                    })
                })
        } catch (err) {
            console.log(err);
        }
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
