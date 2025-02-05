export interface ISharedUIComponentProps {
    dataTestId?: string;
    mix?: string;
}

export interface ISharedFieldComponentProps extends ISharedUIComponentProps {
    hasError?: boolean;
}
