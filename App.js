import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './components/reducers'
import {persistStore,persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react';

// Comps
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ProfileScreen from './components/ProfileScreen';
import CardsScreen from './components/CardScreen'

const Stack = createNativeStackNavigator();
const persistedReducer = persistReducer({key: 'persist-key', storage: AsyncStorage }, allReducers);
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Cards" component={CardsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
     </PersistGate>
     </Provider>
  );
}

export default App;
