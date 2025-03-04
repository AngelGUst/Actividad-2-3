import React, { useState, useEffect } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { app, auth, db, storage } from './src/kernel/contex/FirebaseConnection';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from './src/components/Loading';
import NavigationLoggerStack from './src/navigation/NavigationLoggerStack';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuario logueado", user);
        setIsLogged(true);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Loading
        isVisible={true}
        title="Cargando"
        sizeActivity="large"
        color="tomato"
        activityColor="tomato"
      />
    );
  } else {
    return isLogged ? <NavigationLoggerStack /> : <Navigation />; 
  }
}