import { StyleSheet, View, Alert, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { CustomButton } from '@/components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColor } from '@/hooks/use-theme-color';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileScreen() {
  const backgroundColor = useThemeColor({}, 'background');

  const handleLogout = () => {
    Alert.alert('Cerrar Sesión', 'Has cerrado la sesión.');
  };

  const handleSettings = () => {
    Alert.alert('Configuración', 'Aquí irían las opciones de configuración.');
  };

  const handleOrders = () => {
    Alert.alert('Mis Pedidos', 'Aquí se mostrarían los pedidos del usuario.');
  };

  const handleFavorites = () => {
    Alert.alert('Favoritos', 'Aquí se mostrarían los productos favoritos.');
  };

  const handleSupport = () => {
    Alert.alert('Soporte', 'Contactar con soporte técnico.');
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedText type="title" style={styles.title}>Mi Perfil</ThemedText>

        {/* Tarjeta de perfil principal */}
        <View style={styles.profileCard}>
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
            <View style={styles.profileContent}>
              <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                  <ThemedText style={styles.avatarText}>ES</ThemedText>
                </View>
              </View>
              <View style={styles.profileInfo}>
                <ThemedText style={styles.profileName}>Elder Sarmiento</ThemedText>
                <ThemedText style={styles.profileEmail}>elder@email.com</ThemedText>
                <ThemedText style={styles.profileLevel}>Nivel Premium</ThemedText>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Estadísticas rápidas */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <ThemedText style={styles.statNumber}>12</ThemedText>
            <ThemedText style={styles.statLabel}>Pedidos</ThemedText>
          </View>
          <View style={styles.statCard}>
            <ThemedText style={styles.statNumber}>8</ThemedText>
            <ThemedText style={styles.statLabel}>Favoritos</ThemedText>
          </View>
          <View style={styles.statCard}>
            <ThemedText style={styles.statNumber}>4.8</ThemedText>
            <ThemedText style={styles.statLabel}>Rating</ThemedText>
          </View>
        </View>

        {/* Opciones del menú */}
        <View style={styles.menuContainer}>
          <View style={styles.menuCard}>
            <LinearGradient
              colors={[
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.05)',
                'rgba(255, 255, 255, 0.1)'
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.glassEffect}
            >
              <View style={styles.menuContent}>
                <CustomButton title="🎨 Mis Pedidos" onPress={handleOrders} />
                <CustomButton title="❤️ Favoritos" onPress={handleFavorites} />
                <CustomButton title="⚙️ Configuración" onPress={handleSettings} />
                <CustomButton title="🆘 Soporte" onPress={handleSupport} />
              </View>
            </LinearGradient>
          </View>
        </View>

        {/* Botón de cerrar sesión */}
        <View style={styles.logoutContainer}>
          <CustomButton title="Cerrar Sesión" onPress={handleLogout} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    marginBottom: 24,
    textAlign: 'center',
    color: '#ffffff',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  profileCard: {
    marginBottom: 24,
    borderRadius: 20,
    overflow: 'hidden',
  },
  glassEffect: {
    borderRadius: 20,
    padding: 2,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  profileLevel: {
    fontSize: 14,
    color: '#D78C31',
    fontWeight: '600',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    marginHorizontal: 4,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#cccccc',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  menuContainer: {
    marginBottom: 24,
  },
  menuCard: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  menuContent: {
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    gap: 12,
  },
  logoutContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
