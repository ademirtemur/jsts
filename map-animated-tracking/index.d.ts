export declare type AMOUNT_PART_OF_LINES_TYPE = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export declare enum MOVEMENT_TYPES {
    MOVING = 1,
    SHORT_HALT = 2,
    LONG_HALT = 3
}
export interface ICoord {
    lat: number;
    lng: number;
}
export declare type IRLine = {
    color: string;
    points: ICoord[];
};
export declare type OnRemoveLine = (index: number, id: number) => void;
export declare type OnJoinLine = (color: string, line: IRLine, lines: Array<IRLine>) => void;
export declare type OnPushPoint = (point: ICoord, line: IRLine, lines: Array<IRLine>) => void;
export declare type OnChangeStatus = (angle: number, movementType: MOVEMENT_TYPES) => void;
export declare type OnChangeLocation = (coord: ICoord, angle: number | null, isMoving: boolean | null) => void;
export declare type PushCoord = void | string;
export interface IOptions {
    color: string;
    velocityTimeout: number;
    velocityLongTimeout?: number;
    minDistanceChangeRate: number;
    partOfLine: AMOUNT_PART_OF_LINES_TYPE;
}
export interface IRHandler {
    handeChangeStatus: OnChangeStatus;
    handleChangeLocation: OnChangeLocation;
    onRemoveLine: OnRemoveLine;
    onJoinLine: OnJoinLine;
    onPushPoint: OnPushPoint;
}
export interface IRAnimatedTracking {
    handler: IRHandler;
    pushCoord: (coord: ICoord) => PushCoord;
    destroy: () => void;
}
export declare function factoryAnimatedTracking(options: IOptions): IRAnimatedTracking;
