import {
    type FC,
    useState,
} from 'react';
import DatePicker from 'react-datepicker';

import { type Nullable } from '../../commonTypes';
import { SHOW_FORMAT } from '../../constants/formatDate';
import { setFormatDate } from '../../functions/setFormatDate';
import { type IDatepickerProps } from './types';
import './styles.scss';

// import 'react-datepicker/dist/react-datepicker.css';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Datepicker: FC<IDatepickerProps> = ({
    onChange,
    value,
    dateFormat,
    isForbiddenFuture,
    isForbiddenPast,
    maxAvailableDate,
    minAvailableDate,
}) => {
    const [startDate, setStartDate] = useState<Nullable<Date>>(value || new Date());

    const _onChange = (newDate: Nullable<Date>) => {
        setStartDate(newDate);
        onChange(setFormatDate(newDate, dateFormat) || '');
    };

    const pickerProps = {
        maxDate: isForbiddenFuture
            ? new Date()
            : maxAvailableDate,
        minDate: isForbiddenPast
            ? new Date()
            : minAvailableDate,
    };

    return (
        <DatePicker
            className='picker'
            dateFormat={SHOW_FORMAT}
            onChange={_onChange}
            selected={startDate}
            {...pickerProps}
        />
    );
};
