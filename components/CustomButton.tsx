import { Pressable, StyleSheet, Text } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

export function CustomButton({ title, onPress }: CustomButtonProps) {
  const backgroundColor = useThemeColor({}, 'tint');
  const color = useThemeColor({}, 'background');

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor },
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
