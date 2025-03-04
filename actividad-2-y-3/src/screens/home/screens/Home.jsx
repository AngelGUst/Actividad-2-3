import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardListProductos from '../../../components/CardListProductos';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../kernel/contex/FirebaseConnection';

export default function Home() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        (async () => {
            const arrayProductos = [];
            const querySnapshot = await getDocs(collection(db, "productos"));
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                data.id = doc.id;
                arrayProductos.push(data);
            });
            setProductos(arrayProductos);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={productos}
                renderItem={({ item }) => (
                    <CardListProductos
                        imagen={item.image} 
                        descripcion={item.description}
                        price={item.price}
                        name={item.name}
                    />
                )}
                keyExtractor={(item) => item.id}
                numColumns={2} 
                columnWrapperStyle={styles.columnWrapper} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10, 
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
});
