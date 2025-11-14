import React, { FC, ReactNode } from 'react';
import { Text } from '@consta/uikit/Text';
import VerticalContainer from '../../../components/VerticalContainer';
import HorizontalContainer from '../../../components/HorizontalContainer';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/icons/IconClose';
import { useNavigate } from 'react-router-dom';
import styles from './ServiceMenu.module.scss';
import ContentCard from '../../../components/ContentCard';
import { IconArrowRight } from '../../../assets/icon/iconArrowRight';
import { IconWrench } from '@consta/icons/IconWrench';
import { IconShakerCup } from '../../../assets/icon/iconShakerCup';
import { IconFilter } from '../../../assets/icon/iconFilter';
import { IconFavoriteFilled } from '../../../assets/icon/iconFavoriteFilled';
import { IconDollarCircle } from '../../../assets/icon/iconDollarCircle';

/**
 * Сервисное меню
 */
const ServiceMenu: FC = () => {
  const navigate = useNavigate();

  // render методы
  const renderHeader = () => (
    <HorizontalContainer isAutoWidth isAutoSpace>
      <Text size="3xl" weight="semibold">
        Настройки
      </Text>
      <Button
        view="secondary"
        size="m"
        onlyIcon
        iconLeft={IconClose}
        onClick={() => navigate('/')}
      />
    </HorizontalContainer>
  );

  const renderCard = (title: string, description: string, icon: ReactNode) => (
    <ContentCard className={styles.contentCard}>
      <HorizontalContainer isAutoWidth isAutoSpace>
        <HorizontalContainer space="m">
          <div className={styles.circle}>{icon}</div>
          <VerticalContainer space="3xs">
            <Text size="l" weight="medium">
              {title}
            </Text>
            <Text size="m" view="secondary">
              {description}
            </Text>
          </VerticalContainer>
        </HorizontalContainer>
        <IconArrowRight size="m" className={styles.iconArrow} />
      </HorizontalContainer>
    </ContentCard>
  );

  const renderCards = () => (
    <VerticalContainer space="m">
      {renderCard(
        'Управление ячейками',
        'Остатки, Глубина, Цены, Товары, Конфигурация ячеек',
        <IconShakerCup size="m" className={styles.icon} />,
      )}
      {renderCard(
        'Настройки покупки',
        'Уведомления, Учёт остатков, Реклама и др.',
        <IconWrench size="m" className={styles.icon} />,
      )}
      {renderCard(
        'Настройки автомата',
        'Температура, Подсветка, Серийный порт, Лифт',
        <IconFilter size="m" className={styles.icon} />,
      )}
      {renderCard(
        'Общие настройки',
        'Список товаров, Сервер, Устройства, Роли',
        <IconFilter size="m" className={styles.icon} />,
      )}
      {renderCard(
        'Диагностика',
        'Тест ячеек, ошибки, Информация, Логи',
        <IconFavoriteFilled size="m" className={styles.icon} />,
      )}
      {renderCard(
        'Приложение',
        'Файлы приложения, Настройки приложения',
        <IconDollarCircle size="m" className={styles.icon} />,
      )}
    </VerticalContainer>
  );

  return (
    <VerticalContainer space="l" className={styles.ServiceMenu}>
      {renderHeader()}
      {renderCards()}
    </VerticalContainer>
  );
};

export default ServiceMenu;
