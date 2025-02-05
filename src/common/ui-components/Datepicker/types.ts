import {
    type Func,
    type Nullable,
} from '../../commonTypes';
import { type ISharedFieldComponentProps } from '../types';

export interface IDatepickerProps extends ISharedFieldComponentProps {
    onChange: Func<[string]>;
    value?: Nullable<Date>;
    dateFormat?: string;
    isForbiddenFuture?: boolean;
    isForbiddenPast?: boolean;
    minAvailableDate?: Date;
    maxAvailableDate?: Date;
}
