import React, { useContext, useEffect } from 'react'
import Navigation from './src/navigation/Navigation'
import { AuthContext, AuthProvider } from "./src/Screens/AuthContext";
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import WaitSplash from './src/Screens/WaitSplash'
import FlashMessage from 'react-native-flash-message'
import { StyleSheet } from 'react-native'
import { NativeBaseProvider } from 'native-base';
import { moderateScale, moderateScaleVertical, textScale } from './src/utils/responsive';
import CustomTabNavigator from './src/Screens/CustomTabNavigator';
import ResetPassword from './src/Screens/ResetPassword';

const App = () => {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <WaitSplash />
  } else
    return (
      <Navigation />
    )
}


export default () => {
  return (
    <NavigationContainer >
      <NativeBaseProvider>
        <AuthProvider>
          <App />
          {/* <ResetPassword/> */}
          <FlashMessage position="top" style={styles.FlashMessage} titleStyle={{ fontWeight: 'bold', fontSize: 15, color: "black", justifyContent: "center", alignItems: "center" }} />
        </AuthProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  FlashMessage: {
    backgroundColor: "#eec06b",
    alignItems: "center",
    height: moderateScaleVertical(70),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    fontSize: textScale(14),
    fontFamily: "Poppins-Medium",
    color: "black"
  }
});


