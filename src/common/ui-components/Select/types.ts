import {
    type Func,
    type TNumStr,
    type TOptions,
} from '../../commonTypes';
import { type ISharedFieldComponentProps } from '../types';

export interface ISelectProps extends ISharedFieldComponentProps {
    options: TOptions;
    onChange: Func<[TNumStr]>;
    value: TNumStr | undefined;
}
