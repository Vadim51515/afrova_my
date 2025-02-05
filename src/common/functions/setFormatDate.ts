import { isValid } from 'date-fns';
import {
    format,
    toDate,
} from 'date-fns-tz';

import { type Nullable } from '../commonTypes';
import { RESULT_FORMAT } from '../constants/formatDate';

export const setFormatDate = (
    date?: Nullable<Date | string>,
    formatDate: string = RESULT_FORMAT,
) => {
    if (!date) return null;
    const newDate = date && toDate(date);

    return isValid(newDate) && (format(newDate, formatDate) || null);
};
