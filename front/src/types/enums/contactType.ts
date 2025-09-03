/**
 * Возможные типы контактов
 */
export enum ContactType {
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
}

// TODO: вынести в глобальные методы
/**
 * Трансформация enum => array
 *
 * @param enumObject enum
 */
export const enumToArray = <T extends Record<string, string>>(enumObject: T): T[keyof T][] => {
  return Object.keys(enumObject)
    .filter((key) => typeof enumObject[key as keyof T] === 'string')
    .map((key) => enumObject[key as keyof T]) as T[keyof T][];
};
