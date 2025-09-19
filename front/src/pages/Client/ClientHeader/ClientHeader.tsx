import { FC } from 'react';
import { IconLogoShaker } from '../../../assets/icon/iconLogo';
import HorizontalContainer from '../../../components/HorizontalContainer';
import styles from './ClientHeader.module.scss';

const ClientHeader: FC = () => {
  return (
    <HorizontalContainer className={styles.ClientHeader} justify="center">
      <IconLogoShaker className={styles.icon} />
    </HorizontalContainer>
  );
};

export default ClientHeader;
