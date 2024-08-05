import { CardInterface, Cart, Chat } from "./type";

const CARD_ITEM: CardInterface[] = [
  {
    uri: "https://images.pexels.com/photos/12269761/pexels-photo-12269761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "chair",
    rating: 4,
    user: "John",
    quantity: 3,
  },
  {
    uri: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "chair",
    rating: 3,
    user: "Alice",
    quantity: 4,
  },
];

const CHAT_LIST: Chat[] = [
  {
    name: "John",
    avatar:
      "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=600",
    message: "Hi there. This is item is available",
    date: "06/08/2024",
  },
];

const CART_LIST: Cart[] = CARD_ITEM.map((item) => ({
  item: { ...item },
  quantity: 1,
  isCheck: false,
}));

export { CARD_ITEM, CHAT_LIST, CART_LIST };
