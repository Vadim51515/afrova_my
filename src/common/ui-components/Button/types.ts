import { type Func } from '../../commonTypes';
import { type ISharedFieldComponentProps } from '../types';
type TButtonPatterns = 'common';

type TButtonSize = ('sm' | 'md' | 'lg' | 'xl');

export interface IButtonProps extends ISharedFieldComponentProps {
    pattern?: TButtonPatterns;
    size?: TButtonSize;
    isFullWidth?: boolean;
    onClick: Func;
}
