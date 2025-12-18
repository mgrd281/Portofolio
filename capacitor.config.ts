import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ekizulfar.portfolio',
  appName: 'Portfolio',
  webDir: 'dist',
  
  // iOS specific configuration
  ios: {
    contentInset: 'automatic',
    scrollEnabled: true
  },
  
  // Plugins configuration
  plugins: {
    // Status Bar configuration
    StatusBar: {
      style: 'dark',
      backgroundColor: '#000000'
    },
    
    // Splash Screen configuration
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#000000',
      showSpinner: false,
      androidSpinnerStyle: 'small',
      iosSpinnerStyle: 'small'
    },
    
    // Keyboard configuration
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true
    }
  }
};

export default config;
