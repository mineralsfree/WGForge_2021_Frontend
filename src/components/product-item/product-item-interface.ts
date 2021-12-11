interface ProductItemComponentInterface {
  id: string;
  tier?: number;
  type: string;
  name: string;
  price: string;
  nation?: string;
  images: Array<string>;
  tank_type?: string;
  size: string;
  linkToDescription: string;
  discount: number;
  price_discount: string;
  flag?: string;
}

export default ProductItemComponentInterface;
