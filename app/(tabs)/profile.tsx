import { StyleSheet, View, Alert } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { CustomButton } from '@/components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function ProfileScreen() {
  const backgroundColor = useThemeColor({}, 'background');

  const handleLogout = () => {
    Alert.alert('Cerrar Sesión', 'Has cerrado la sesión.');
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Perfil de Usuario</ThemedText>
        <View style={styles.infoContainer}>
          <ThemedText style={styles.label}>Nombre:</ThemedText>
          <ThemedText style={styles.value}>Usuario de Magia Interna</ThemedText>
        </View>
        <View style={styles.infoContainer}>
          <ThemedText style={styles.label}>Email:</ThemedText>
          <ThemedText style={styles.value}>usuario@email.com</ThemedText>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Cerrar Sesión" onPress={handleLogout} />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    marginBottom: 32,
  },
  infoContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 46,
  }
});
