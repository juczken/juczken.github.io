export type Category = {
  id: string;
  name: string;
  photo?: string;
  createdAt: Date;
  updatedAt: Date;
  commandId: string;
};

//   type Order = {
//     id: string;
//     products: OrderProduct[];
//     user: User;
//     status: OrderStatus;
//     createdAt: Date;
//     updatedAt: Date;
//     commandId: string;
//   };

//   type OrderProduct = {
//     _id: string; // служебный id - это не id продукта
//     product: Product;
//     quantity: number;
//   }

//   enum OrderStatus {
//     PendingConfirmation = 'pending_confirmation',
//     Processing = 'processing',
//     Packaging = 'packaging',
//     WaitingForDelivery = 'waiting_for_delivery',
//     InTransit = 'in_transit',
//     Delivered = 'delivered',
//     ReturnRequested = 'return_requested',
//     OrderCancelled = 'order_cancelled',
//   }

export type Product = {
  id: string;
  name: string;
  photo?: string;
  desc?: string;
  createdAt: Date;
  updatedAt: Date;
  oldPrice?: number;
  price: number;
  commandId: string;
  category: Category;
};

export type Pagination = {
  pageSize?: number;
  pageNumber?: number;
};

export type Sorting = {
  type: 'ASC' | 'DESC';
  field: 'id' | 'createdAt' | 'updatedAt' | 'name';
};

export type AuthResult = {
  token: string;
};

export type SignUpBody = {
  email: string;
  password: string;
  commandId: string;
};

export type SignInBody = {
  email: string;
  password: string;
};

export type Profile = {
  id: string;
  name: string;
  email: string;
  signUpDate: Date;
  commandId: string;
};

export type UpdateProfileBody = {
  name: string;
};

export type ChangePasswordBody = {
  password: string;
  newPassword: string;
};

export type ChangePasswordResult = {
  success: boolean;
};
