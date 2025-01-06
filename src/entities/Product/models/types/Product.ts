type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photos?: string[];
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};
