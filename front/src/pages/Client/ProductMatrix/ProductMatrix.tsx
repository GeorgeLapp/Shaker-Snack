import { FC } from 'react';
import styles from './ProductMatrix.module.scss'
import { productMatrix } from '../../../app/api/modules/cleint/mockData';

const ProductMatrix: FC = () => {
  return <div className={styles.ProductMatrix}>{productMatrix.map((item) => <div><img src={item.imgPath} />
  </div>)}</div>
}

export default ProductMatrix
