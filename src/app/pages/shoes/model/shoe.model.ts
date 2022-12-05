export interface Shoe {
  id: number;
  shoe: string;
  wearer: string;
  duration: number;
  borrowedAt: string;
  returnedAt?: string;
  payment?: number; // totalBayar
  fine?: number; // denda
  condition?: string // kondisiSepatu
  status?: string; //status kembali/telat
}