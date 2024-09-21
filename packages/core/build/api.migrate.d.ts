export declare class ApiMigrate {
    private readonly option;
    private teableSdk;
    private airtableSdk;
    constructor(option: {
        from: {
            airtableToken: string;
            baseId: string;
        };
        to: {
            teableToken: string;
            spaceId: string;
        };
        baseUrl?: string;
    });
    execute(): Promise<void>;
    private generateTables;
    private postTablesCreated;
    private postLinkFieldsCreated;
    private getRecordCreateRos;
    private fieldDependency;
}
//# sourceMappingURL=api.migrate.d.ts.map