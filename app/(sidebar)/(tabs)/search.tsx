import { Box, Button, ScrollView, VStack } from 'native-base';
import CardItem from '@/components/CardItem';

import { useEffect, useState } from 'react';
import { ItemT, CategoryT } from '@/constants/type';
import api from '@/utils/axios';
import { useIsFocused } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';

export default function SearchScreen() {
  const isFocused = useIsFocused();
  const { categoryId, name } = useLocalSearchParams() as {
    categoryId?: string;
    name?: string;
  };
  const [items, setItems] = useState<ItemT[]>([]);
  const [category, setCategory] = useState<CategoryT[]>([]);
  const [selectedCat, setSelectCat] = useState<string>('1');

  useEffect(() => {
    isFocused &&
      api.get('/category').then((res) => {
        setCategory(res.data);
      });
    categoryId && setSelectCat(categoryId);
  }, [isFocused, categoryId]);

  useEffect(() => {
    api
      .get('/item', {
        params: {
          categoryId: selectedCat,
          name,
        },
      })
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        if (err.response.status == '404') setItems([]);
      });
  }, [selectedCat, name]);

  return (
    <Box safeAreaTop={2} safeAreaX={2}>
      <ScrollView>
        <ScrollView horizontal>
          <Button.Group mt="2" mb="4">
            {category?.map((cat) => (
              <Button
                key={cat.id}
                onPress={() => setSelectCat(cat.id)}
                variant={cat.id == selectedCat ? 'solid' : 'outline'}
                px="4"
                rounded="full"
              >
                {cat.name}
              </Button>
            ))}
          </Button.Group>
        </ScrollView>
        <CardItem items={items} />
      </ScrollView>
    </Box>
  );
}
