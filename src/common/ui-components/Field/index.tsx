import {
    type FC,
    memo,
    useEffect,
    useState,
} from 'react';

import { FieldLabel } from '../FieldLabel';
import { Input } from '../Input/Input'; // TODO импорт кривой
import { Select } from '../Select';
import { Text } from '../Text';
import { type IInputProps } from '../Input/types';
import { type ISelectProps } from '../Select/types';
import {
    type TFieldProps,
    type TFieldValueType,
} from './types';

export const Field: FC<TFieldProps> = memo(({
    fieldType,
    label,
    isRequired,
    errors,
    onChange,
    ...otherProps
}) => {
    console.log('errors', errors);

    const [localErrors, setLocalErrors] = useState<Array<string>>([]);

    useEffect(() => {
        console.log('useEffect');

        if (errors) setLocalErrors(errors.filter(Boolean));
    }, [errors]);

    const updateValue = (value: TFieldValueType) => {
        setLocalErrors([]);

        // TODO Пока не очень понятно как это можно обхитрить
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        onChange(value);
    };

    const componentProps = {
        ...otherProps,
        hasError: !!localErrors.length,
        onChange: updateValue,
    };

    let Component;

    switch (fieldType) {
        case 'input':
            Component = <Input {...componentProps as IInputProps} />;
            break;
        case 'select':
            Component = <Select {...componentProps as ISelectProps} />;
            break;
        default:
            Component = <Input {...componentProps as IInputProps} />;
    }

    console.log('localErrors', localErrors);

    return (
        <div>
            <FieldLabel
                isRequired={isRequired}
                label={label}
            />

            {Component}

            {localErrors.map((error) => (
                <Text
                    key={error}
                    isError
                >
                    {error}
                </Text>
            ))}
        </div>
    );
});
