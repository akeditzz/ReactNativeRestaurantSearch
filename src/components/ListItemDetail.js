import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { concat } from 'react-native-reanimated'

const ListItemDetail = ({ navigation }) => {
    let item = navigation.getParam('item')
    console.log('----------------------------', item)
    var photoreference = item.photos ? item.photos[0].photo_reference : ''
    var emptyString = ""
    var imageUrl = photoreference ? emptyString.concat('https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference='
        , photoreference, '&key=AIzaSyDe8czBn6mAxLBjEMAIUIvW50eII_y1-XU') : item.icon
    let priceLevel = "Not Avaliable"
    switch (item.price_level) {
        case 2:
            priceLevel = "Low"
            break
        case 3:
            priceLevel = "Medium"
            break
        case 4:
            priceLevel = "Low"
            break

    }
    return <View style={style.viewStyle}>
        <Image style={style.imageStyle}
            source={{ uri: imageUrl }} />
        <View>
            <Text style={style.nameStyle}>{item.name}</Text>
            <View style={style.ratingReviewStyle}>
                <Text style={style.ratingStyle}>Rating : {item.rating}</Text>
                <Text style={style.ratingStyle}>  Reviews : {item.user_ratings_total}</Text>
            </View>
            <View>
                <Text style={style.bodyStyle}>Price : {priceLevel}</Text>
                <Text style={style.bodyStyle}>Status : {item.business_status}</Text>
                <Text style={style.bodyStyle}>{item.formatted_address}</Text>
            </View>
        </View>
    </View>
}

const style = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#ffffff',
        padding: 8,
        flex: 1
    },
    ratingReviewStyle: {
        flexDirection: "row"
    },
    nameStyle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8
    },
    bodyStyle: {
        color: '#000000',
        fontSize: 14
    },
    ratingStyle: {
        color: '#808080'
    },
    imageStyle: {
        height: 150
    }
})

export default ListItemDetail