import React, { Component, Fragment } from 'react'
import {
    Subtitle,
    Button,
    Image,
    Tile,
    Text,
    View,
    TouchableOpacity,
    Title,
    Caption
} from '@shoutem/ui';
import { StyleSheet } from 'react-native';

class CardMed extends Component {

    formatDate = (date) => {
        var d = new Date(date);
        d.setDate(d.getDate() + 1)
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [month, day, year].join('/');
    }

    render() {
        const {title, description, image, body, date} = this.props;
        return (
            <Fragment>
                <View style={styles.container}>

                    <Tile>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Article',
                                {
                                    title: title,
                                    description: description,
                                    image: image,
                                    body: body,
                                    date: this.formatDate(date)
                                })}
                        >
                            <Image
                                styleName="large-banner"
                                source={{ uri: image }}
                            />
                            <View styleName="content">
                                <Title>{title}</Title>
                                <Subtitle>{description}</Subtitle>
                                <Caption>{this.formatDate(date)}</Caption>
                            </View>
                        </TouchableOpacity>
                    </Tile>

                </View>
            </Fragment>
        )
    }
}

export default CardMed;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        elevation: 5,
    }
});