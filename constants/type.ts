interface CardInterface {
  uri: string;
  name: string;
  rating: number;
  user?: string;
  quantity: number;
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
