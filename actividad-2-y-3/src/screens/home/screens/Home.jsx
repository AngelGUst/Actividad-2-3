import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CardListProductos from '../../../components/CardListProductos';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../kernel/contex/FirebaseConnection';

export default function Home() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const arrayProductos = [];
            try {
                const querySnapshot = await getDocs(collection(db, "productos")); // Consultar la colección "productos"
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    data.id = doc.id;
                    arrayProductos.push(data);
                });
                setProductos(arrayProductos);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
            setLoading(false);
        })();
    }, []);

    return (
        <View>
            <FlatList
                data={productos}
                renderItem={({ item }) => (
                    <CardListProductos
                        image={item.imagen}
                        title={item.nombre}
                        description={item.descripcion}
                        price={item.precio}
                    />
                )}
                keyExtractor={(item) => item.id}
                numColumns={2} 
            />
        </View>
    );
}