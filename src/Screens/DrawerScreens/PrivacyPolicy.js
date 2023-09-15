import React from 'react'
import { WebView } from 'react-native-webview';
import { SafeAreaView} from "react-native"
const PrivacyPolicy = () => {

  return (
    <SafeAreaView style={{flex:1}}>
       <WebView source={{ uri: 'http://jewellerybliss.com/privacy-policy.html' }} style={{ flex: 1 }} />
  </SafeAreaView>
  )
}

export default PrivacyPolicy;
