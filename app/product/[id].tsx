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
        <ThemedText type="title">Producto no encontrado</ThemedText>
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
      <Stack.Screen options={{ title: product.name }} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={{ uri: 'https://picsum.photos/400' }} style={styles.image} />
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
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  detailsContainer: {
    padding: 24,
    gap: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});
