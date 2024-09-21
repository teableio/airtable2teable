import { Base } from './base';
import { ISdkConfig } from './index';
import { ICreateBaseRo, IGetSpaceVo } from './schemas';
export declare class Space {
    private config;
    private info;
    constructor(config: ISdkConfig, info: IGetSpaceVo);
    get id(): string;
    get name(): string;
    createBase(base: ICreateBaseRo): Promise<Base>;
}
//# sourceMappingURL=space.d.ts.map