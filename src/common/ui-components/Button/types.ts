type TButtonPatterns = 'common';

type TButtonSize = ('sm' | 'md' | 'lg' | 'xl');

export interface IButtonProps {
    pattern?: TButtonPatterns;
    size?: TButtonSize;
}
