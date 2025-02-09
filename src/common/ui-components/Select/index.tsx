import {
    type FC,
    useState,
} from 'react';

import {
    type IOption,
    type Nullable,
} from '../../commonTypes';
import { Text } from '../Text';
import { type ISelectProps } from './types';
import styles from './styles.module.scss';

export const Select: FC<ISelectProps> = ({
    onChange,
    options = [],
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<Nullable<IOption>>(null);

    return (
        <div
            className={styles.wrapper}
            onClick={() => { setIsOpen(!isOpen); }}
        >
            <Text
                mix={styles.value}
                tagName='span'
                isFieldText
            >
                {selectedOption?.label}
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
    );
};
