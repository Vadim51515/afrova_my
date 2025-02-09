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
const options = [
    {
        value: 'chocolate',
        label: 'Chocolate',
    },
    {
        value: 'strawberry',
        label: 'Strawberry',
    },
    {
        value: 'vanilla',
        label: 'Vanilla',
    },
];

export const Select: FC<ISelectProps> = () => {
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
                123
            </Text>

            {isOpen && (
                <div className={styles.menu}>
                    {options.map((option) => (
                        <div
                            className={styles.option}
                            key={option.value}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
