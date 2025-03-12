import { useActions } from '../../../../common/hooks/useActions';
import { useParamSelector } from '../../../../common/hooks/useParamSelector';
import { Field } from '../../../../common/ui-components/Field';
import { profileActions } from '../../redux/actions';
import {
    profileFormIsReadonlySelector,
    profileFormValueSelector,
} from '../../redux/selectors';

export const BirthDate = () => {
    const fieldName = 'birthDate';
    const birthDate = useParamSelector(profileFormValueSelector, fieldName);
    const isReadonly = useParamSelector(profileFormIsReadonlySelector);
    const { updateFormValue } = useActions(profileActions);

    return (
        <Field
            fieldType='datepicker'
            isReadonly={isReadonly}
            label='Дата рождения'
            onChange={(newValue) => { updateFormValue(fieldName, newValue); }}
            value={birthDate !== undefined && String(birthDate)}
            isForbiddenFuture
        />
    );
};
