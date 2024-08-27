interface CardInterface {
  id: string;
  uri: string;
  name: string;
  rating: number;
  user?: User;
  quantity: number;
}

interface User {
  name: string;
  avatar: string;
}

interface Chat {
  name: string;
  avatar: string;
  message: string;
  date: string;
}

interface Cart {
  item: CardInterface;
  quantity: number;
  isCheck: boolean;
}

export { CardInterface, Chat, Cart };
