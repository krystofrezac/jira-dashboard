export enum LocalStorageKey {
  auth = 'auth',
}

interface LocalStorageType {
  [LocalStorageKey.auth]: {
    authToken: string;
    url: string;
  };
}

export type LocalStorageData<Key extends LocalStorageKey> =
  LocalStorageType[Key];
