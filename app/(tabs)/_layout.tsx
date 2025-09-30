import { NativeTabs, Icon, Label, Badge } from 'expo-router/unstable-native-tabs';
import React from 'react';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon sf="basket" drawable="shopping_basket" />
        <Label>Tienda</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="cart">
        <Icon sf="cart" drawable="shopping_cart" />
        <Label>Carrito</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <Icon sf="person.circle" drawable="account_circle" />
        <Label>Perfil</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}