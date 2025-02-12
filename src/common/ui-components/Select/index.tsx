import {
    type FC,
    useEffect,
    useState,
} from 'react';
import classNames from 'classnames';

import {
    type IOption,
    type Nullable,
} from '../../commonTypes';
import { useClickOutside } from '../../hooks/useClickOutside';
import { Text } from '../Text';
import { type ISelectProps } from './types';
import styles from './styles.module.scss';

export const Select: FC<ISelectProps> = ({
    onChange,
    options = [],
    value,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<Nullable<IOption>>(null);

    useEffect(() => {
        const currentOption = options.find((option) => option.value === value);

        if (currentOption) setSelectedOption(currentOption);
    }, [value]);

    const refForContent = useClickOutside(() => {
        console.log('useClickOutside');
        setIsOpen(false);
    });

    console.log('isOpen', isOpen);

    return (
        <div onClick={() => { setIsOpen(!isOpen); }}>
            <div
                className={styles.wrapper}
                ref={refForContent}
            >
                <Text
                    mix={classNames(styles.value, !selectedOption && styles.emptyValue)}
                    tagName='span'
                    isFieldText
                >
                    {selectedOption?.label ?? 'Не указано'}
                </Text>

                {isOpen && (
                    <div className={styles.menu}>
                        {options.map((option) => (
                            <div
                                className={styles.option}
                                key={option.value}
                                onClick={(e) => {
                                    onChange(option.value);
                                    setSelectedOption(option);
                                    setIsOpen(false);

                                    e.stopPropagation();
                                }}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
