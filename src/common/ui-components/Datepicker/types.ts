import { type Func } from '../../commonTypes';
import { type ISharedFieldComponentProps } from '../types';

export interface IDatepickerProps extends ISharedFieldComponentProps {
    onChange: Func<[string]>;
    value?: string;
    dateFormat?: string;
    isForbiddenFuture?: boolean;
    isForbiddenPast?: boolean;
    minAvailableDate?: Date;
    maxAvailableDate?: Date;
}
