import { View, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PRODUCTS } from '@/data/products';
import { CustomButton } from '@/components/CustomButton';
import { useCart } from '@/context/CartContext';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const { addToCart } = useCart();
  const router = useRouter();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <ThemedView style={styles.container}>
        <View style={styles.errorContainer}>
          <ThemedText type="title" style={styles.errorText}>Producto no encontrado</ThemedText>
        </View>
      </ThemedView>
    );
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      Alert.alert('Agregado', `${product.name} ha sido agregado al carrito.`,
        [
          { text: 'OK', onPress: () => router.back() },
        ]
      );
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          title: product.name,
          headerStyle: {
            backgroundColor: '#0f0f0f',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            color: '#ffffff',
          },
          headerShadowVisible: true,
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://picsum.photos/400' }} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <ThemedText type="title" style={styles.name}>{product.name}</ThemedText>
          <ThemedText type="subtitle" style={styles.price}>${product.price.toFixed(2)}</ThemedText>
          <ThemedText style={styles.description}>{product.description}</ThemedText>
          <CustomButton title="Agregar al Carrito" onPress={handleAddToCart} />
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 32,
    paddingHorizontal: 8,
  },
  imageContainer: {
    padding: 16,
    paddingBottom: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  detailsContainer: {
    padding: 24,
    gap: 16,
    margin: 16,
    marginTop: 0,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  price: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#cccccc',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    margin: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  errorText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});
