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
} from '@shoutem/ui';
import axios from 'axios';
import CardMed from '../components/CardMed';
import { baseURL } from '../lib/baseUrl';

class SearchScreen extends Component {

    state = {
        articles: [],
        search: "",
    }

    componentDidMount() {

    }

    getArticles = async (search) => {
        try {
            await axios
                .get(`${baseURL}/api/articles/searchTitle?title=${search}`)
                .then(res => {
                    this.setState({
                        articles: res.data
                    })
                })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { articles, search } = this.state;

        let SearchList = articles.map((article, index) => {
            return (
              <CardMed
                key={index}
                navigation={this.props.navigation}
                name={article.title}
                description={article.description}
                details={article.details}
                image={article.image}
                body={article.body}
                date={article.date}
              />
            );
          });

        return (
            <ScrollView>
                <View style={styles.container2}>
                <Heading>Search</Heading>
                </View>
                <View style={styles.container}>
                    <Row>
                        <Icon name="search" />
                        <TextInput
                            placeholder='Search articles...'
                            placeholderTextColor="white"
                            onChangeText={(search) => this.setState({ search })}
                            style={styles.search}
                            autoCapitalize="none"
                        />
                        <View style={{ margin: 4 }} />
                        <Button
                            styleName="secondary"
                            onPress={() => this.getArticles(search)}
                        >
                            <Text>SEARCH</Text>
                        </Button>
                    </Row>
                    <View style={{ margin: 5 }} />
                    {articles.length!=0 && <Screen>{SearchList}</Screen>}
                    {articles.length==0 && <Text>No articles found.</Text>}
                    <View style={{ margin: 20 }} />
                </View>
            </ScrollView>
        );
    }
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#FF5722',
        borderRadius: 15,
        width: 220
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        //backgroundColor: "#F5F5F5"
      },
});