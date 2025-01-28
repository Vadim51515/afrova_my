import {
    type Func,
    type IOption,
    type TOptions,
} from '../../commonTypes';
import { type ISharedFieldComponentProps } from '../types';

export interface ISelectProps extends ISharedFieldComponentProps {
    options: TOptions;
    onChange: Func<[IOption]>;
}
