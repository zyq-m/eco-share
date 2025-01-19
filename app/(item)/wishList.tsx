import CardItem from '@/components/CardItem';
import { ItemT } from '@/constants/type';
import api from '@/utils/axios';
import { useIsFocused } from '@react-navigation/native';
import { Box, ScrollView } from 'native-base';
import { useEffect, useState } from 'react';

type RequestItemT = {
  id: number;
  item: ItemT;
  item_id: number;
  quantity: number;
  email: string;
  completed: boolean;
};

export default function RequestList() {
  const [item, setItem] = useState<RequestItemT[]>([]);
  const isFocussed = useIsFocused();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemRes = await api.get('/item/my-request');
        setItem(itemRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    isFocussed && fetchItem();
  }, []);

  return (
    <ScrollView>
      <Box safeAreaX={2}>
        <CardItem items={item.map((i) => ({ ...i.item }))} />
      </Box>
    </ScrollView>
  );
}
