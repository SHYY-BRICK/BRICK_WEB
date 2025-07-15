export interface GetUserInfo {
  id: number;
  nickname: string;
  role: "USER" | "ADMIN";
  gender: "man" | "woman";
  money: number;
  cloth: WearableItem[];
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
