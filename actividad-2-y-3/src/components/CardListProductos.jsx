import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image, Card } from '@rneui/base';

export default function CardListProductos(props) {
    // Extraer las propiedades desde props
    const { name, price, imagen, descripcion } = props;

    return (
        <Card containerStyle={styles.card}>
            <Image
                source={{ uri: imagen || 'https://placehold.co/128x128.png' }} 
                style={styles.image}
            />
            <Text style={styles.name}>{name || 'Nombre no disponible'}</Text>
            <Text style={styles.price}>{price ? `$${price}` : 'Precio no disponible'}</Text>
            <Text style={styles.description}>{descripcion || 'Descripción no disponible'}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '48%',
        margin: 5,
        padding: 10,
        alignItems: 'center', 
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center',
    },
    price: {
        fontSize: 14,
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        fontSize: 12,
        color: 'gray',
        textAlign: 'center',
        marginTop: 5,
    },
});
