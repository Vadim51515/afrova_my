import { useState } from 'react';
import ReactSelect from 'react-select';

import {
    type IOption,
    type Nullable,
} from '../../commonTypes';

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

export const Select = () => {
    const [selectedOption, setSelectedOption] = useState<Nullable<IOption>>(null);

    return (
        <ReactSelect
            onChange={(item) => { setSelectedOption(item); }}
            options={options}
            value={selectedOption}
        />
    );
};
