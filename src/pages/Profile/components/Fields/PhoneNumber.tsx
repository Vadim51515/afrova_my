import { useActions } from '../../../../common/hooks/useActions';
import { useParamSelector } from '../../../../common/hooks/useParamSelector';
import { Field } from '../../../../common/ui-components/Field';
import { profileActions } from '../../redux/actions';
import { profileFormValueSelector } from '../../redux/selectors';

export const PhoneNumber = () => {
    const fieldName = 'phoneNumber';
    const location = useParamSelector(profileFormValueSelector, fieldName);

    const { updateFormValue } = useActions(profileActions);

    return (
        <Field
            dataTestId={fieldName}
            fieldType='input'
            label='Номер телефона'
            onChange={(newValue: string) => { updateFormValue(fieldName, newValue); }}
            value={location}
        />
    );
};
