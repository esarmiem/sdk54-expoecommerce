/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const MagiaInternaPalette = {
  primary: '#535347',
  secondary: '#2B4916',
  accent: '#B36233',
  highlight: '#D78C31',
  background: '#F2E8C7',
};

export const Colors = {
  light: {
    text: MagiaInternaPalette.secondary,
    background: MagiaInternaPalette.background,
    tint: MagiaInternaPalette.accent,
    icon: MagiaInternaPalette.primary,
    tabIconDefault: MagiaInternaPalette.primary,
    tabIconSelected: MagiaInternaPalette.accent,
  },
  dark: {
    text: MagiaInternaPalette.background,
    background: MagiaInternaPalette.primary,
    tint: MagiaInternaPalette.highlight,
    icon: MagiaInternaPalette.background,
    tabIconDefault: MagiaInternaPalette.background,
    tabIconSelected: MagiaInternaPalette.highlight,
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
