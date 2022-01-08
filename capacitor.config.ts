import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.acanas.movies',
  appName: 'MovieApp',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      spinnerColor: '#ffffff',
      backgroundColor: '#1F1F1F',
      launchShowDuration: 2000,
      launchAutoHide: true,
      androidSplashResourceName: 'splash',
    }
  }
};

export default config;