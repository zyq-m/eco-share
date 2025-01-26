import { Box, Button, ScrollView, Text, useToast, VStack } from 'native-base';
import CardItem from '@/components/CardItem';

import { useEffect, useState } from 'react';
import { ItemT, CategoryT } from '@/constants/type';
import api from '@/utils/axios';
import { useIsFocused } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';
import Toast from '@/components/Toast';

export default function SearchScreen() {
  const isFocused = useIsFocused();
  const { categoryId, name } = useLocalSearchParams() as {
    categoryId?: string;
    name?: string;
  };
  const [items, setItems] = useState<ItemT[]>([]);
  const [category, setCategory] = useState<CategoryT[]>([]);
  const [selectedCat, setSelectCat] = useState<string>('1');
  const toast = useToast();

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
          name: name,
        },
      })
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        if (err.response.status == '404') setItems([]);
      });
  }, [selectedCat, name]);

  async function addFav(id: number) {
    api.post('/favourite', { itemId: id }).then((res) => {
      toast.show({
        placement: 'top',
        render: () => (
          <Toast title="Success" desc={res.data.message} toast={toast} />
        ),
      });
    });
  }

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

        {items.length ? (
          <VStack space={2} mb="4">
            {items?.map((item) => (
              <CardItem key={item.id} {...item} onFav={() => addFav(item.id)} />
            ))}
          </VStack>
        ) : (
          <Text color="gray.500" textAlign="center">
            Nothing yet
          </Text>
        )}
      </ScrollView>
    </Box>
  );
}
