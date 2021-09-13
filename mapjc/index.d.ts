interface IMODEL_T {
    new (): {};
}
declare enum SPECIAL_KEY {
    OMM_MJC = "__OMM__MJC__"
}
interface EnumConstructor {
    [key: string]: string | number;
}
declare type MODEL_PROP_TYPE_ENUM = EnumConstructor;
declare type MODEL_PROP_TYPE_WITH_BASE = NumberConstructor | StringConstructor | BooleanConstructor | DateConstructor | Exclude<IMODEL_T, SPECIAL_KEY.OMM_MJC>;
declare type MODEL_PROP_TYPE_COMBINE = MODEL_PROP_TYPE_WITH_BASE | MODEL_PROP_TYPE_ENUM;
declare type MODEL_PROP_TYPE_COMBINE_FN = () => MODEL_PROP_TYPE_COMBINE;
declare type PROP_TYPE_PARAM = MODEL_PROP_TYPE_COMBINE | MODEL_PROP_TYPE_COMBINE_FN;
interface FIELD_OPTIONS {
    optional?: boolean;
    from?: string;
}
declare type MODEL_TYPE<T> = {
    [K in keyof Pick<T, keyof T>]: T[K];
}[keyof T];
/**
 * DEC
*/
export declare function Model<T extends IMODEL_T>(model: T): T;
export declare function Prop(type: PROP_TYPE_PARAM, options?: FIELD_OPTIONS): <MODEL>(model: MODEL, propName: { [K in keyof Pick<MODEL, keyof MODEL>]: MODEL[K] extends Function ? never : K; }[keyof MODEL]) => void;
export declare function PropArr(type: PROP_TYPE_PARAM, options?: FIELD_OPTIONS): <MODEL>(model: MODEL, propName: { [K in keyof Pick<MODEL, keyof MODEL>]: MODEL[K] extends Function ? never : K; }[keyof MODEL]) => void;
/**
 * COERCING
*/
export declare function sinCoerce<T extends IMODEL_T>(model: T, data: unknown): MODEL_TYPE<T>;
export declare function multiCoerce<T extends IMODEL_T>(model: T, data: unknown): Array<MODEL_TYPE<T>>;
export declare const MAPJC: Readonly<{
    Model: typeof Model;
    Prop: typeof Prop;
    PropArr: typeof PropArr;
    sinCoerce: typeof sinCoerce;
    multiCoerce: typeof multiCoerce;
}>;
export {};
