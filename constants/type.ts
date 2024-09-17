type ItemT = {
  id: number;
  email: string;
  name: string;
  category: string;
  quantity: number;
  condition: string | null;
  expiry: Date | null;
  location: {};
  description: string | null;
  timestamp: Date;
  available: boolean;
  images: { uri: string }[] | null;
  user?: User;
};

interface CardInterface {
  id: string;
  uri: string;
  name: string;
  rating: number;
  user?: User;
  quantity: number;
}

type User = {
  email: string;
  name: string | null;
  avatar: string | null;
  timestamp: Date;
  username: string;
  phone: string | null;
};

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

export { CardInterface, Chat, Cart, ItemT, User };
