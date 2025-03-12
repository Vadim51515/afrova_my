import { type Func } from '../../commonTypes';
import { type IDatepickerProps } from '../Datepicker/types';
import { type IFieldLabelProps } from '../FieldLabel/types';
import { type IInputProps } from '../Input/types';
import { type ISelectProps } from '../Select/types';

interface IBaseFieldProps extends IFieldLabelProps {
    errors?: Array<string>;
    isReadonly?: boolean;
}

type TSelectFieldProps = IBaseFieldProps & ISelectProps & {
    fieldType: 'select';
};

type TInputFieldProps = IBaseFieldProps & IInputProps & {
    fieldType: 'input';
};

type TDatepickerFieldProps = IBaseFieldProps & IDatepickerProps & {
    fieldType: 'datepicker';
};

export type TFieldProps = TInputFieldProps | TSelectFieldProps | TDatepickerFieldProps;

type ExtractOnChangeArgType<T> = T extends { onChange: Func<infer Args, any> } ? Args[0] : never;

export type TFieldValueType = ExtractOnChangeArgType<TFieldProps>;
