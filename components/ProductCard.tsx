import { Image, Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Product } from '@/data/products';
import { Link } from 'expo-router';
import { ThemedView } from './themed-view';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable>
        <ThemedView style={styles.card}>
          <Image source={{ uri: 'https://picsum.photos/300' }} style={styles.image} />
          <ThemedText style={styles.name}>{product.name}</ThemedText>
          <ThemedText style={styles.price}>${product.price.toFixed(2)}</ThemedText>
        </ThemedView>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 4,
    padding: 8,
    borderRadius: 8,
    alignItems: 'flex-start',
    backgroundColor: '#f9f9f9f9',
    borderColor: '#000',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
    borderRadius: 4,
  },
  name: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 4,
    fontSize: 18,
  },
});
