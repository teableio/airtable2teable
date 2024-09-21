export class AirtableFieldVo {
    tableId;
    id;
    name;
    type;
    description;
    options;
    constructor(vo) {
        this.tableId = vo.tableId;
        this.id = vo.id;
        this.name = vo.name;
        this.type = vo.type;
        this.description = vo.description;
        this.options = vo.options;
    }
}
