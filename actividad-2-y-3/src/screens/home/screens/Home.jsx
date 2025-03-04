import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardListHouses from '../../../CardListHouses';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../../utils/FirebaseConnection';
import { FlatList } from 'react-native-gesture-handler';

export default function Home() {
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const arrayHouses = [];
            const querySnapshot = await getDocs(collection(db, "houses"));
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                data.id = doc.id;
                arrayHouses.push(data);
            });
            setHouses(arrayHouses);
            setLoading(false);
        })()
    }, []);
    return (
        <View style={styles.container}>
            <FlatList
                data={houses}
                renderItem={({item }) => (
                    <CardListHouses  
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        rating={item.rating}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
