import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image, Card } from '@rneui/base';

export default function CardListProductos(props) {
    const { name, price, image, description } = props;

    return (
        <Card>
            <View style={{ flexDirection: 'row' }}>
    
                <Image
                    source={{ uri: image || 'https://placehold.co/128x128.png' }} 
                    style={{ width: 128, height: 128 }}
                />
    
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold' }}>{name || 'name no disponible'}</Text>
                        <Text style={{ fontWeight: 'bold', color: 'green' }}>
                            {price ? `$${price}` : 'price no disponible'}
                        </Text>
                    </View>
                    <Text style={{ color: 'gray', marginTop: 4 }}>
                        {description || 'Descripción no disponible'}
                    </Text>
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({});