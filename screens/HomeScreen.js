import React, { Component } from "react";
import { StyleSheet, Button } from "react-native";
import axios from "axios";
import {
  View,
  GridRow,
  NavigationBar,
  ListView,
  TouchableOpacity,
  ImageBackground,
  Tile,
  Divider,
  Screen,
  TextInput,
  Subtitle,
  Caption,
  Text,
  Title,
  Image,
  Icon,
  Row,
  ScrollView,
  Heading,
  Card
} from "@shoutem/ui";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      test: "Nothing"
    };
  }

  getData = async () => {
    try {
      await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0c69f9ba9a494e84a33b2749dab3fc5e`).then(res => {
        this.setState({
          article1Img: res.data.articles[0].urlToImage,
          news: [
            {
              title: res.data.articles[0].title
            },
            {
              title: res.data.articles[1].title,
              address: "2",
              image: { url: res.data.articles[1].urlToImage }
            },
            {
              title: res.data.articles[2].title,
              address: "3",
              image: { url: res.data.articles[2].urlToImage }
            },
            {
              title: res.data.articles[3].title,
              address: "4",
              image: { url: res.data.articles[3].urlToImage }
            },
            {
              title: res.data.articles[4].title,
              address: "5",
              image: { url: res.data.articles[4].urlToImage }
            }
          ]
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentWillMount() {
    this.getData();
  }

  renderRow(rowData, sectionId, index) {
    // rowData contains grouped data for one row,
    // so we need to remap it into cells and pass to GridRow
    if (index === "0") {
      return (
        <TouchableOpacity key={index}>
          <ImageBackground styleName="large" source={{ uri: this.state.article1Img }}>
            <Tile>
              <Title styleName="md-gutter-bottom">{rowData[0].title}</Title>
            </Tile>
          </ImageBackground>
          <Divider styleName="line" />
        </TouchableOpacity>
      );
    }

    const cellViews = rowData.map((news, id) => {
      return (
        <TouchableOpacity key={id} styleName="flexible">
          <Card styleName="flexible">
            <Image styleName="medium-wide" source={{ uri: news.image.url }} />
            <View styleName="content">
              <Subtitle numberOfLines={3}>{news.title}</Subtitle>
              <View styleName="horizontal" />
            </View>
          </Card>
        </TouchableOpacity>
      );
    });

    return <GridRow columns={2}>{cellViews}</GridRow>;
  }

  render() {
    const news = this.state.news;
    // Group the news into rows with 2 columns, except for the
    // first news. The first news is treated as a featured news
    let isFirstArticle = true;
    const groupedData = GridRow.groupByRows(news, 2, () => {
      if (isFirstArticle) {
        isFirstArticle = false;
        return 2;
      }
      return 1;
    });

    return (
      <Screen>
        <ListView data={groupedData} renderRow={this.renderRow} />
      </Screen>
    );
  }
}

export default HomeScreen;
