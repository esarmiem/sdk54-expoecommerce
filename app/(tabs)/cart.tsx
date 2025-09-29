import { FlatList, StyleSheet, View, Alert } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useCart } from '@/context/CartContext';
import { CustomButton } from '@/components/CustomButton';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function CartScreen() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const backgroundColor = useThemeColor({}, 'background');

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    Alert.alert('Compra Finalizada', '¡Gracias por tu compra en Magia Interna!', [
      { text: 'OK', onPress: clearCart },
    ]);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <ThemedView style={styles.container}>
        {cartItems.length === 0 ? (
          <View style={styles.emptyContainer}>
            <ThemedText type="title">Tu carrito está vacío</ThemedText>
            <Link href="/(tabs)" asChild>
              <CustomButton title="Ir a la tienda" onPress={() => {}} />
            </Link>
          </View>
        ) : (
          <>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.cartItem}>
                  <View style={styles.itemInfo}>
                    <ThemedText style={styles.itemName}>{item.name}</ThemedText>
                    <ThemedText style={styles.itemPrice}>
                      ${item.price.toFixed(2)} x {item.quantity}
                    </ThemedText>
                  </View>
                  <CustomButton title="Quitar" onPress={() => removeFromCart(item.id)} />
                </View>
              )}
              ListHeaderComponent={<ThemedText type="title" style={styles.title}>Carrito de Compras</ThemedText>}
              contentContainerStyle={styles.listContent}
            />
            <View style={styles.footer}>
              <ThemedText style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</ThemedText>
              <CustomButton title="Finalizar Compra" onPress={handleCheckout} />
            </View>
          </>
        )}
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
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    padding: 16,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    gap: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});