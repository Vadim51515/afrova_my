import { type ISharedUIComponentProps } from '../types';

type TLinkPattern = 'common' | 'primary'

export interface ILinkProps extends ISharedUIComponentProps {
    pattern?: TLinkPattern;
    isRoute?: string;
    href: string;
}
