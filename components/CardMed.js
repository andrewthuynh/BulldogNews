import React, { Component, Fragment } from 'react'
import {
    Subtitle,
    Button,
    Image,
    Card,
    Text,
    View,
    TouchableOpacity,
    Title
} from '@shoutem/ui';
import { StyleSheet } from 'react-native';

const CardMed = (props) =>{

        return (
            <Fragment>
            <View style={{ margin: 5}} elevation/>
            <Card styleName="flexible">
            <TouchableOpacity
            >
            <Image
                styleName="large-banner"
                source={{ uri: props.image }}
            />
                <View styleName="content">
                    <Title>{props.name}</Title>
                    <Subtitle>{props.description}</Subtitle>
                </View>
            </TouchableOpacity>
            </Card>
            </Fragment>
        )
}

export default CardMed;