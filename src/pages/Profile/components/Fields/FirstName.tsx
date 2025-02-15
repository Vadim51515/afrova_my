import { useActions } from '../../../../common/hooks/useActions';
import { useParamSelector } from '../../../../common/hooks/useParamSelector';
import { Field } from '../../../../common/ui-components/Field';
import { profileActions } from '../../redux/actions';
import {
    profileFormIsReadonlySelector,
    profileFormValueSelector,
} from '../../redux/selectors';

export const FirstName = () => {
    const fieldName = 'firstName';
    const name = useParamSelector(profileFormValueSelector, fieldName);
    const isReadOnly = useParamSelector(profileFormIsReadonlySelector);

    const { updateFormValue } = useActions(profileActions);

    return (
        <Field
            dataTestId={fieldName}
            fieldType="input"
            label='Имя'
            onChange={(newValue: string) => { updateFormValue(fieldName, newValue); }}
            value={name}
            isReadOnly
        />
    );
};
