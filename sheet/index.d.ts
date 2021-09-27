declare type Downlaod = () => void;
interface ICell {
    get(): string;
    setCell(cell: string | HTMLElement): ICell;
}
interface ISheetRow {
    get(): ICell[];
    addCell(cell: string | HTMLElement): ISheetRow;
}
export declare class SheetRow implements ISheetRow {
    private cells;
    get(): ICell[];
    addCell(cell: string | HTMLElement): ISheetRow;
}
interface ISheet {
    setStyle(style: string): ISheet;
    setStyle(style: HTMLStyleElement): ISheet;
    addColumn(colum: string): ISheet;
    addColumn(colum: HTMLElement): ISheet;
    addRow(row: ISheetRow): ISheet;
    compile(): {
        download?: Downlaod;
    };
}
export declare class Sheet implements ISheet {
    private extStyle;
    private headers;
    private rows;
    setStyle(style: string): ISheet;
    setStyle(style: HTMLStyleElement): ISheet;
    addColumn(colum: string): ISheet;
    addColumn(colum: HTMLElement): ISheet;
    addRow(row: ISheetRow): ISheet;
    compile(): {
        download?: Downlaod;
    };
    compileWithTable(table: HTMLTableElement): {
        download?: Downlaod;
    };
}
export {};
