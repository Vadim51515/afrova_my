import { EMPTY_CAPTION } from '../../common/constants';

export const getGender = () => [
    {
        value: 'unknown',
        label: EMPTY_CAPTION,
    },
    {
        value: 'male',
        label: 'Мужской',
    },
    {
        value: 'female',
        label: 'Женский',
    },
];
