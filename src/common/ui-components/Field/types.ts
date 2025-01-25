import { type IFieldLabelProps } from '../FieldLabel/types';
import { type IInputProps } from '../Input/types';
import { type ISelectProps } from '../Select/types';

interface IBaseFieldProps extends IFieldLabelProps {
    errors?: Array<string>;
}

type TSelectFieldProps = IBaseFieldProps & ISelectProps & {
    fieldType: 'select';
};

type TInputFieldProps = IBaseFieldProps & IInputProps & {
    fieldType: 'input';
};

export type TFieldProps = TInputFieldProps | TSelectFieldProps;
