import { Datepicker } from '../../../../common/ui-components/Datepicker';

export const BirthDate = () => {
    const a = 1;

    return (
        // <Field fieldType="date" />
        <Datepicker
            onChange={(newValue) => {
                console.log('BirthDate', newValue);
            }}
            isForbiddenFuture
        />
    );
};
