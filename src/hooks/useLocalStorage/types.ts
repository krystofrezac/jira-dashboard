export enum LocalStorageKey {
  auth = 'auth',
  statusFilter = 'statusFilter',
}

interface LocalStorageType {
  [LocalStorageKey.auth]: {
    authToken: string;
    url: string;
  };
  [LocalStorageKey.statusFilter]: {
    selectedStatuses: string[];
  };
}

export type LocalStorageData<Key extends LocalStorageKey> =
  LocalStorageType[Key];
