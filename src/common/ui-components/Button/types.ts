import { type Func } from '../../commonTypes';
import { type ISharedUIComponentProps } from '../types';
type TButtonPatterns = 'common';

type TButtonSize = ('sm' | 'md' | 'lg' | 'xl');

export interface IButtonProps extends ISharedUIComponentProps {
    pattern?: TButtonPatterns;
    size?: TButtonSize;
    isFullWidth?: boolean;
    onClick: Func;
}
