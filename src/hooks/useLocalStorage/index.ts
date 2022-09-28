import { useEffect, useState } from 'react';

import { LocalStorageData, LocalStorageKey } from './types';

type UseLocalStorageReturn<Data> = [
  Data | undefined,
  (data: Data) => void,
  { synced: boolean },
];

const useLocalStorage = <
  Key extends LocalStorageKey,
  Data = LocalStorageData<Key>,
>(
  key: Key,
): UseLocalStorageReturn<Data> => {
  const [storage, setStorage] = useState<Data | undefined>();
  const [synced, setSynced] = useState(false);

  useEffect((): void => {
    if (typeof window === 'undefined') return;

    setSynced(true);

    const rawData = window.localStorage.getItem(key);
    if (!rawData) return;

    const parsedData = JSON.parse(rawData) as Data;

    setStorage(parsedData);
  }, []);

  const setItem = (data: Data): void => {
    setStorage(data);
    window.localStorage.setItem(key, JSON.stringify(data));
  };

  return [storage, setItem, { synced }];
};

export default useLocalStorage;
