import { useActions } from '../../../../common/hooks/useActions';
import { useParamSelector } from '../../../../common/hooks/useParamSelector';
import { Field } from '../../../../common/ui-components/Field';
import { profileActions } from '../../redux/actions';
import { profileFormValue } from '../../redux/selectors';

export const Gender = () => {
    const fieldName = 'gender';
    const location = useParamSelector(profileFormValue, fieldName);

    const { updateFormValue } = useActions(profileActions);

    return (
        <Field
            dataTestId={fieldName}
            fieldType='select'
            label='Пол'
            onChange={(newValue) => { updateFormValue(fieldName, newValue); }}
            options={[]}
            value={location}
        />
    );
};
