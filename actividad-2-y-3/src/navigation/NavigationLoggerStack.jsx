import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import LoginStack from "../navigation/stacks/LoginStack";
import Profile from "../kernel/components/modules/auth/screens/Profile";
import HomeStack from "./stack/navigationLoggerStarck/HomeStack";
import TopventasStack from "../navigation/stacks/navigationLoggerStack/TopventasStack";

const Tab = createBottomTabNavigator();

export default function NavigationLogger() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        const { iconName, iconType } = getIconName(route.name, focused);
                        return (
                            <Icon name={iconName} type={iconType} size={size} color={color} />
                        );
                    },
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                    headerShown: false,
                })}
            >

                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{ title: "Inicio" }}
                />

                <Tab.Screen
                    name="TopventasStack"
                    component={TopventasStack}
                    options={{ title: "Top 5" }}
                />

                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{ title: "Perfil" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const getIconName = (routeName, focused) => {
    let iconName = "";
    let iconType = "material-community";
    switch (routeName) {
        case "Home":
            iconName = focused ? "home" : "home-outline";
            break;

        case "Profile":
            iconName = focused ? "account" : "account-outline";
            break;

        case "TopventasStack":
            iconName = focused ? "trophy" : "trophy-outline";
            break;
    }
    return { iconName, iconType };
};