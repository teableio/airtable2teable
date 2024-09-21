import { IAirtableTable } from '../types';
export * from './schemas';
export declare class AirtableSdk {
    private airtableToken;
    constructor(airtableToken: string);
    getTables(baseId: string): Promise<IAirtableTable[]>;
    getRecords(table: IAirtableTable): Promise<{
        createdTime: string;
        id: string;
        fields: Record<string, string | number | boolean | any[] | (string | number)[] | string[] | {
            isValid: boolean;
            recordLinkFieldId?: string | null | undefined;
        } | {
            value: string | null;
            state: import("../types").AirtableCellState;
            isStale: boolean;
            errorType?: string | undefined;
        } | {
            url: string;
            id: string;
            type: string;
            filename: string;
            height: number;
            size: number;
            width: number;
            thumbnails: {
                small: {
                    url: string;
                    height: number;
                    width: number;
                };
                full?: {
                    url: string;
                    height: number;
                    width: number;
                } | undefined;
                large?: {
                    url: string;
                    height: number;
                    width: number;
                } | undefined;
            };
        }[] | {
            type?: string | null | undefined;
            text?: string | undefined;
        } | {
            url: string | null;
            label: string;
        } | {
            id: string;
            email?: string | undefined;
            name?: string | undefined;
            profilePicUrl?: string | undefined;
        } | null>;
        commentCount?: number | undefined;
    }[]>;
}
//# sourceMappingURL=index.d.ts.map