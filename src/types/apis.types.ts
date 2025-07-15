export interface GetUserInfo {
  id: number;
  nickname: string;
  role: "USER" | "ADMIN";
  gender: "man" | "woman";
  money: number;
  clothes: WearableItem[];
  accessories: WearableItem[];
  coins: UserCoin[];
}

export interface WearableItem {
  id: number;
  type: "clothes" | "accessories";
  name: string;
  wear: boolean;
}

export interface UserCoin {
  id: number;
  coinName: string;
  price: string;
  amount: number;
  date: string;
  nowAmount: number;
}

export interface GetUserAllNews {
  id: number;
  title: string;
  content: string;
  date: string;
  time: string;
}

export interface GetAdminAllNews {
  id: number;
  title: string;
  content: string;
  date: string;
  time: string;
}

export interface UserItem {
  id: number;
  type: "clothes" | "accessories";
  name: string;
  wear: boolean;
}

export interface UserCoin {
  id: number;
  coinName: string;
  price: string;
  amount: number;
  date: string;
  nowAmount: number;
}

export interface UserRank {
  id: number;
  nickname: string;
  role: "USER" | "ADMIN";
  gender: "man" | "woman";
  money: number;
  clothes: UserItem[];
  accessories: UserItem[];
  coins: UserCoin[];
}

export interface CoinDetails {
  name: string;
  price: string;
  date: string;
}

export interface Coin {
  coinName: string;
  fluctuationPercent: DoubleRange;
  previousPrice: number;
  currentPrice: number;
  totalUserHolding: number;
}
