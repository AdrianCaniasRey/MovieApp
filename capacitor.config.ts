import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.acanas.movies',
  appName: 'MovieApp',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      androidScaleType: 'CENTER',
      androidSplashResourceName: 'splash',
      backgroundColor: '#1F1F1F',
      launchAutoHide: true,
      launchShowDuration: 2500,
      spinnerColor: '#ffffff',
      splashImmersive: true,
    }
  }
};

export default config;
