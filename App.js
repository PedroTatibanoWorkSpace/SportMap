import * as Font from 'expo-font';

import { ActivityIndicator, View } from 'react-native';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import React, { useEffect, useState } from 'react';

import AppRoutes from './FrontEnd/src/routes/app-routes';
import { Lato_400Regular } from '@expo-google-fonts/lato';

const App = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            try {
                await Font.loadAsync({
                    Inter_400Regular,
                    Lato_400Regular,
                    Inter_600SemiBold
                });
                setFontsLoaded(true);
            } catch (error) {
                console.error("Erro ao carregar as fonts", error);
            }
        };

        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return <AppRoutes />;
};

export default App;
