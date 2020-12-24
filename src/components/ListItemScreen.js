import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {withNavigation} from 'react-navigation'

const ListItemScreen = ({ item,navigation }) => {
    
    return<TouchableOpacity onPress={()=>navigation.navigate('listDetailScreen',{item:item})}>
     <View style={style.viewStyle}>
        <Image style={style.imageStyle} source={{ uri: item.icon }} />
        <View>
            <Text style={style.nameStyle}>{item.name}</Text>
            <Text style={style.ratingStyle}>Rating : {item.rating}</Text>
        </View>
    </View>
    </TouchableOpacity>
}

const style = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowRadius: 8,
        shadowColor: '#000000',
        margin: 8,
        padding: 8,
        flexDirection:"row"
    },
    nameStyle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    ratingStyle: {
        color: '#808080'
    },
    imageStyle: {
        height: 30,
        width: 30,
        borderRadius: 4,
        alignSelf:"center",
        marginEnd:8
    }
})

export default withNavigation(ListItemScreen)