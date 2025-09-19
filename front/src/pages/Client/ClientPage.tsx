import { FC } from 'react';
import ProductMatrix from './ProductMatrix';
import VerticalContainer from '../../components/VerticalContainer';
import ClientHeader from './ClientHeader';
import styles from './ClientPage.module.scss';

/**
 * Страница покупателя
 */
const ClientPage: FC = () => {
  return (
    <VerticalContainer className={styles.ClientPage} space="m">
      <ClientHeader />
      <ProductMatrix />
    </VerticalContainer>
  );
};

export default ClientPage;
