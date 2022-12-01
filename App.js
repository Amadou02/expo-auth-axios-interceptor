import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { UserContext } from './src/context/userContext';
import { useState } from 'react';
import AxiosProvider from './src/providers/AxiosProvider';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <UserContext.Provider value={{ user, setUser: setUser }}>
        <AxiosProvider>
          <LoginScreen />
        </AxiosProvider>
      </UserContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
