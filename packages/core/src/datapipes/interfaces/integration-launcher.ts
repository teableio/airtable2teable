export interface IIntegrationLauncher {
  discover(): Promise<void>;
  read(): Promise<void>;
  write(): Promise<void>;
}
