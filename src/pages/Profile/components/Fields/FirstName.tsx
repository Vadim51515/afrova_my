import { useActions } from '../../../../common/hooks/useActions';
import { useParamSelector } from '../../../../common/hooks/useParamSelector';
import { Field } from '../../../../common/ui-components/Field';
import { profileActions } from '../../redux/actions';
import { profileFormValue } from '../../redux/selectors';

export const FirstName = () => {
    const fieldName = 'firstName';
    const name = useParamSelector(profileFormValue, fieldName);

    const { updateFormValue } = useActions(profileActions);

    return (
        <Field
            fieldType="input"
            label='Имя'
            onChange={(newValue: string) => { updateFormValue(fieldName, newValue); }}
            value={name}
        />
    );
};
