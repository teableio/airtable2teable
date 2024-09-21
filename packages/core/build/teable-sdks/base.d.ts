import { ICreateBaseVo, ISdkConfig } from './index';
import { ICreateTableRo } from './schemas';
import { Table } from './table';
export declare class Base {
    private config;
    private info;
    constructor(config: ISdkConfig, info: ICreateBaseVo);
    get id(): string;
    get name(): string;
    get spaceId(): string;
    createTable(table: ICreateTableRo): Promise<Table>;
}
//# sourceMappingURL=base.d.ts.map