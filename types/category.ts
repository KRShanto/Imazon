export interface Category {
  name: string;
  parent?: string;
  href?: string;
  subCategory?: SubCategory;
}

export interface SubCategory {
  id: string;
  categories: Category[];
}
