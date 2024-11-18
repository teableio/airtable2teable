import { State } from "./standard-sync-output";

export interface SourceConnectionImplementation {
  name: string;
  sourceId: string;
  sourceImplementationId: string;
  workspaceId: string;
  configuration: Record<string, any>;
  tombstone: boolean;
}

export interface DestinationConnectionImplementation {
  name: string;
  destinationId: string;
  workspaceId: string;
  destinationImplementationId: string;
  configuration: Record<string, any>;
  tombstone: boolean;
}

export interface StandardSyncInput {
  sourceConnectionImplementation: SourceConnectionImplementation;
  destinationConnectionImplementation: DestinationConnectionImplementation;
  connectionId: string;
  state: State;
  catalog: Record<string, any>;
}
