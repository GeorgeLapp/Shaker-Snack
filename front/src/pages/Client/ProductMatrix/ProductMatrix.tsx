import { FC, useEffect } from 'react';
import styles from './ProductMatrix.module.scss';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/store';
import { selectProductMatrix } from '../../../state/client/selectors';
import { Loader } from '@consta/uikit/Loader';
import { Text } from '@consta/uikit/Text';
import { getProductMatrixAction } from '../../../state/client/action';
import HorizontalContainer from '../../../components/HorizontalContainer';
import VerticalContainer from '../../../components/VerticalContainer';
import { Badge } from '@consta/uikit/Badge';
import classNames from 'classnames';

const ProductMatrix: FC = () => {
  const dispatch = useAppDispatch();

  const { state: productMatrix, isLoading, isReject } = useAppSelector(selectProductMatrix());

  useEffect(() => {
    dispatch(getProductMatrixAction());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (isReject) {
    return <Text size="6xl">Ошибка</Text>;
  }

  if (!productMatrix) {
    return <Text size="6xl">Нет продуктов</Text>;
  }

  console.log('productMatrix, ', productMatrix);

  return (
    <VerticalContainer className={styles.ProductMatrix} space="xs">
      {productMatrix.map((rowCells) => (
        <HorizontalContainer className={styles.ProductRow} space="xs">
          {rowCells.map(({ id, imgPath, cellNumber, price }) => (
            <VerticalContainer key={id} className={styles.ProductCell} space="2xs" align="center">
              <HorizontalContainer className={styles.imgWrapper} justify="center">
                <img className={styles.img} src={imgPath} />
              </HorizontalContainer>
              <VerticalContainer className={styles.info} space={0}>
                <div className={styles.badge}>
                  <Text>{`№${cellNumber}`}</Text>
                </div>
                <div className={classNames(styles.badge, styles.badgeFilled)}>
                  <Text>{`${price} ₽`}</Text>
                </div>
              </VerticalContainer>
            </VerticalContainer>
          ))}
        </HorizontalContainer>
      ))}
    </VerticalContainer>
  );
};

export default ProductMatrix;
