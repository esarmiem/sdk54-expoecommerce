/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const MagiaInternaPalette = {
  primary: '#1a1a1a',
  secondary: '#2d2d2d',
  accent: '#B36233',
  highlight: '#D78C31',
  background: '#0f0f0f',
  surface: '#1c1c1c',
};

export const Colors = {
  light: {
    text: '#ffffff',
    background: MagiaInternaPalette.background,
    tint: MagiaInternaPalette.accent,
    icon: '#ffffff',
    tabIconDefault: '#cccccc',
    tabIconSelected: MagiaInternaPalette.accent,
    surface: MagiaInternaPalette.surface,
  },
  dark: {
    text: '#ffffff',
    background: MagiaInternaPalette.primary,
    tint: MagiaInternaPalette.highlight,
    icon: '#ffffff',
    tabIconDefault: '#cccccc',
    tabIconSelected: MagiaInternaPalette.highlight,
    surface: MagiaInternaPalette.surface,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
