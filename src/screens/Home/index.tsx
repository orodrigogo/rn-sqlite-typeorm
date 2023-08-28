import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { styles } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Product } from '../../components/Product';

export function Home() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Liste de compras
      </Text>

      <Input
        placeholder="Nome do item"
        onChangeText={setName}
        value={name}
      />

      <Input
        placeholder="Quantidade"
        keyboardType="numeric"
        onChangeText={setQuantity}
        value={quantity}
      />

      <Button
        title="Adicionar"
      />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Itens</Text>
        <Text style={styles.headerQuantity}>5</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.items}
        showsVerticalScrollIndicator={false}
      >
        <Product
          name="Produto A"
          quantity={3}
          onRemove={() => { }}
        />
        <Product
          name="Produto B"
          quantity={2}
          onRemove={() => { }}
        />
      </ScrollView>
    </View>
  );
}