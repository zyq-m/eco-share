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
  {
    uri: "https://images.pexels.com/photos/3804408/pexels-photo-3804408.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "history books",
    rating: 4,
    user: "Lance",
    quantity: 10,
  },
  {
    uri: "https://images.pexels.com/photos/7218517/pexels-photo-7218517.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "printer",
    rating: 4,
    user: "Anas",
    quantity: 1,
  },
  {
    uri: "https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "notebook",
    rating: 3,
    user: "Alia",
    quantity: 6,
  },
  {
    uri: "https://images.pexels.com/photos/998591/pexels-photo-998591.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "pen",
    rating: 5,
    user: "Ahmad",
    quantity: 10,
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
