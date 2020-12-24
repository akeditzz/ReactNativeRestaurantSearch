import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hook/useResults'
import ListItemScreen from '../components/ListItemScreen'
import { TouchableOpacity } from 'react-native-gesture-handler'
const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    return <View style={{ flex: 1 }}>
        <SearchBar term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        <Text style={style.resultCountStyle}>we have found {results.length} results</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <FlatList
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return <ListItemScreen item={item} />
            }}
            showsVerticalScrollIndicator={false}
        />
    </View>
}

const style = StyleSheet.create({
    resultCountStyle: {
        margin: 8
    }
})

export default SearchScreen