import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    View,
    Screen,
    TextInput,
    Text,
    Title,
    Button,
    Image,
    Icon,
    Row,
    ScrollView,
    Heading,
    Caption,
    Divider
} from '@shoutem/ui';
import axios from 'axios';
import { baseURL } from '../lib/baseUrl';

class ArticleScreen extends Component {

    state = {
        articles: [],
        search: "",
    }

    render() {
        const { articles, search } = this.state;
        const title = this.props.navigation.getParam('title', 'Article Title');
        const description = this.props.navigation.getParam('description', 'description');
        const image = this.props.navigation.getParam('image', 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png');
        const body = this.props.navigation.getParam('body', 'filler detail');
        const date = this.props.navigation.getParam('date', 'date');

        return (
            <ScrollView>
                <View style={styles.container2}>
                    <Heading>{title}</Heading>
                    <Image
                        styleName="large-square"
                        source={{ uri: image }}
                    />
                    <Title>{description}</Title>
                    <Caption>{date}</Caption>
                    <Divider styleName="line"/>
                    <Text>{body}</Text>
                </View>
                <View style={{ margin: 10 }} />
            </ScrollView>
        );
    }
}

export default ArticleScreen;

const styles = StyleSheet.create({
    container2: {
        flex: 1,
    },
});