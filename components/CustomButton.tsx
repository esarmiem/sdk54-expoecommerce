import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';
import { LinearGradient } from 'expo-linear-gradient';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

export function CustomButton({ title, onPress }: CustomButtonProps) {
  const backgroundColor = useThemeColor({}, 'tint');
  const color = useThemeColor({}, 'background');

  return (
    <View style={styles.glassContainer}>
      <LinearGradient
        colors={[
          'rgba(255, 255, 255, 0.25)',
          'rgba(255, 255, 255, 0.1)',
          'rgba(255, 255, 255, 0.15)'
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.glassEffect}
      >
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
            pressed && styles.pressed,
          ]}
        >
          <Text style={[styles.text, { color: '#fff' }]}>{title}</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  glassContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    margin: 4,
  },
  glassEffect: {
    borderRadius: 16,
    padding: 1,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // Fondo semi-transparente mejorado para fondos oscuros
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    // Borde sutil mejorado para el efecto glass
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    // Sombras más profundas para fondos oscuros
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    // Texto blanco con sombra mejorada para fondos oscuros
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});
