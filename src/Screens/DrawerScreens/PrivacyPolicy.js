import React from 'react'
import { WebView } from 'react-native-webview';

const PrivacyPolicy = () => {
  return <WebView source={{ uri: 'http://jewellerybliss.com/privacy-policy.html' }} style={{ flex: 1 }} />;
}

export default PrivacyPolicy;
