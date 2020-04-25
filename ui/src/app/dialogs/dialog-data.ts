export interface StatusDialogData {
    title: string;
    text: string;
    type: StatusDialogType;
}

export enum StatusDialogType {
    MESSAGE = 1,
    ERROR,
    WARN
}
