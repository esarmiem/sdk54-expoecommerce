import { Image, Pressable, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Product } from '@/data/products';
import { Link } from 'expo-router';
import { ThemedView } from './themed-view';
import { LinearGradient } from 'expo-linear-gradient';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable>
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
            <View style={styles.card}>
              <Image source={{ uri: 'https://picsum.photos/300' }} style={styles.image} />
              <ThemedText style={styles.name}>{product.name}</ThemedText>
              <ThemedText style={styles.price}>${product.price.toFixed(2)}</ThemedText>
            </View>
          </LinearGradient>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  glassContainer: {
    margin: 4,
    borderRadius: 16,
    overflow: 'hidden',
  },
  glassEffect: {
    borderRadius: 16,
    padding: 1, // Borde del efecto glass
  },
  card: {
    flex: 1,
    padding: 12,
    borderRadius: 15,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    // Agregamos borde sutil para el efecto glass
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    // Sombras mejoradas para fondos oscuros
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
    borderRadius: 8,
    // Sombra sutil en la imagen
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    // Mejoramos el contraste para fondos oscuros
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  price: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    // Mejoramos el contraste para fondos oscuros
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});
