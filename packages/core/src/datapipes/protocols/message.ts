import { z } from 'zod';

import { ConnectionStatus } from './connection-status.enum';
import { MessageLogLevel } from './message-log-level.enum';
import { MessageType } from './message-type.enum';

const stateSchema = z.object({
  data: z.record(z.string(), z.unknown()),
});

const logSchema = z.object({
  level: z.nativeEnum(MessageLogLevel),
  message: z.string(),
});

const connectionStatusSchema = z.object({
  status: z.nativeEnum(ConnectionStatus),
  message: z.string(),
});

const catalogSchema = z.object({
  catalog: z.record(z.string(), z.unknown()),
});

const recordSchema = z.object({
  record: z.unknown(),
  emitted_at: z.date(),
});

const messageSchema = z.object({
  type: z.nativeEnum(MessageType),
  log: logSchema.optional(),
  state: stateSchema.optional(),
  connection_status: connectionStatusSchema.optional(),
  catalog: catalogSchema.optional(),
  record: recordSchema.optional(),
});

export type Message = z.infer<typeof messageSchema>;
