import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottonTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import LoginStack from './stacks/LoginStack';
import CreatAccount from '../screens/CreateAccount';
const Tab = createBottonTabNavigator();
export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarIcon:({focused, color, size}) =>{
                        const{iconName, iconType} = getIconName(route.name, focused);
                        return(
                            <Icon name={iconName} type={iconType} size={size} color={color} />
                        );
                    },
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                    headerShown: false,
                })}
            >
                <Tab.Screen 
                    name="Login"
                    component={LoginStack}
                    options={{ title: "Iniciar sesion" }}
                />
                <Tab.Screen 
                    name="CreateAccount"
                    component={CreatAccount}
                    options={{ title: "Crear Cuenta" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const getIconName = (routeName, focusesd) =>{
    let iconName = "";
    let iconType = "material-community";
    switch (routeName) {
        case 'Login':
            iconName = focused ? 'account' : 'home-outline';
            break;
        case 'CreateAccount':
            iconName = focused ? 'account-plus' : 'account-plus-outline';
            break;
    }
    return{iconName, iconType};
}


const styles = StyleSheet.create({})