export interface Category {
  id: string;
  name: string;
  interests: Array<{ id: string; symbol: string }>;
  isChecked: boolean;
  order: number;
}
