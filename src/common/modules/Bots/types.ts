export type TBotsStatus = 'online' | 'offline' | 'awaits' | 'error';

export interface IBotItemData {
    id: number;
    name: string;
    status: TBotsStatus;
}

export interface IBotItemProps {
    data: IBotItemData;
}

export interface IBotStatus {
    status: TBotsStatus;
}
