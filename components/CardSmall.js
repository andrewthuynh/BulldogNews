import React, { Fragment } from 'react'
import {
    Title,
    Tile,
    Subtitle,
    ImageBackground,
    View,
    TouchableOpacity
} from '@shoutem/ui';

const CardSmall = (props) =>{

        return (
            <Fragment>
            <View style={{ margin: 7}} />
            <TouchableOpacity
                onPress={() => props.navigation.navigate('LocationDetail',
                {
                    name: props.name,
                    description: props.description,
                    image: props.image,
                    details: props.details
                  })}
            >
            <ImageBackground
                styleName="medium-square"
                source={{ uri: props.image }}
                style={{borderWidth: 1, borderColor: 'black'}}
            >
                <Tile>
                    <Title>{props.name}</Title>
                    <Subtitle>{props.description}</Subtitle>
                </Tile>
            </ImageBackground>
            </TouchableOpacity>
            </Fragment>
        )
}

export default CardSmall;