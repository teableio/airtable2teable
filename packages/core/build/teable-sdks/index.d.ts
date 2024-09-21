import { Space } from './space';
export * from './base';
export * from './schemas';
export * from './space';
export * from './table';
export interface ISdkConfig {
    token: string;
    baseUrl?: string;
}
export declare class TeableSdk {
    private config;
    constructor(config: ISdkConfig);
    getSpaces(): Promise<Space[]>;
    getSpace(spaceId: string): Promise<Space>;
}
//# sourceMappingURL=index.d.ts.map