import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/Login";
import CreatAccount from "../../screens/CreateAccount";

const Stack = createStackNavigator();

export default function LoginStack() {
    return (
        <Stack.Navigator initialRouteName="LoginStack">
            <Stack.Screen
                name="LoginStack"
                component={Login}
                options={{ title: "Iniciar sesión" }}
            />

            <Stack.Screen
                name="CreatAccountStack"
                component={CreatAccount}
                options={{ title: "Crear Cuenta" }}
            />

        </Stack.Navigator>
    );
}