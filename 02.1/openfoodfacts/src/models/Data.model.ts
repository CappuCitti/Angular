import { Product } from "./Product.model";

export interface Products {
  count: number;
  page: number;
  page_count: number;
  page_size: number;
  products: Product[];
  skip: number;
}
