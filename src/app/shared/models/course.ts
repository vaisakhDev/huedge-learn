export interface ICourse {
  tags: Array<string>;
  details: string;
  description: string;
  discountedPrice?: number;
  actualPrice: number;
  author: string;
  title: string;
  id: number;
  saleEndTime?: Date;
  // Frontend field

  isWishlisted?: boolean;
}
