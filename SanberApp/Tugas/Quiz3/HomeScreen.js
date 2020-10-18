import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from './components/SearchBar';
import Card from './components/Cards';
import Icon from 'react-native-vector-icons/Feather';
import CardDeal from './components/CardDeal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
const data = [
    'Clothing',
    'Toys',
    'Diapers',
    'Feeding',
    'Stroller',
    'Shoes',
    'Accesories',
];
const listdeal = [
    {
        type: 'Nike',
        price: 'Rp. 2.500.000',
    },
    {
        type: 'Ardiles',
        price: 'Rp. 500.000',
    },
    {
        type: 'Adidas',
        price: 'Rp. 1.500.000',
    },
];
const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar />
            <ScrollView>
            <View style={styles.listcardTop}>
                <Text style={styles.titleCatalogue}>Catalogue</Text>
                <View style={styles.listcard}>
                    {data.map(e => {
                        return (
                            <Card onPress={() => navigation.navigate('History')} title={e} />
                        );
                    })}
                </View>
            </View>
            <View style={styles.listdeal}>
                <View style={styles.titlecontainer}>
                    <Text style={styles.title}>Deal of the Day</Text>
                    <View style={styles.chevron}>
                        <Text style={styles.seemore}>See more</Text>
                        <Icon name="chevron-thin-right" size={18} />
                    </View>
                </View>
                <View>
                    {listdeal.map(e => {
                        return <CardDeal {...e} />;
                    })}
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
        
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
    },
    listcardTop: {
        backgroundColor: '#fff',
    },
    listcard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    titleCatalogue: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 16,
    },

    seemore: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'gray',
    },
    chevron: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titlecontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});