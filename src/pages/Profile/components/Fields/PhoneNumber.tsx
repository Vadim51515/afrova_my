import { useActions } from '../../../../common/hooks/useActions';
import { useParamSelector } from '../../../../common/hooks/useParamSelector';
import { Field } from '../../../../common/ui-components/Field';
import { profileActions } from '../../redux/actions';
import {
    profileFormIsReadonlySelector,
    profileFormValueSelector,
} from '../../redux/selectors';

export const PhoneNumber = () => {
    const fieldName = 'phoneNumber';
    const location = useParamSelector(profileFormValueSelector, fieldName);
    const isReadonly = useParamSelector(profileFormIsReadonlySelector);

    const { updateFormValue } = useActions(profileActions);

    return (
        <Field
            dataTestId={fieldName}
            fieldType='input'
            isReadonly={isReadonly}
            label='Номер телефона'
            onChange={(newValue: string) => { updateFormValue(fieldName, newValue); }}
            value={location}
        />
    );
};
