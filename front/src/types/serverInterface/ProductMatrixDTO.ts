export type ProductMatrixItem = {
  id: number;
  cellNumber: number;
  rowNumber: number;
  price: number;
  imgPath: string;
  brandName: string;
  productName: string;
  calories?: number;
  proteins?: number;
  fats?: number;
  carbohydrates?: number;
  description?: string;
}

export type ProductMatrixDTO = ProductMatrixItem[]