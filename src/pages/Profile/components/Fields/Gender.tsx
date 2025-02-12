import { useActions } from '../../../../common/hooks/useActions';
import { useParamSelector } from '../../../../common/hooks/useParamSelector';
import { Field } from '../../../../common/ui-components/Field';
import { profileActions } from '../../redux/actions';
import { profileFormValueSelector } from '../../redux/selectors';
import { getGender } from '../../utils';

export const Gender = () => {
    const fieldName = 'gender';
    const location = useParamSelector(profileFormValueSelector, fieldName);

    const { updateFormValue } = useActions(profileActions);

    const genderOptions = getGender();

    return (
        <Field
            dataTestId={fieldName}
            fieldType='select'
            label='Пол'
            onChange={(newValue) => { updateFormValue(fieldName, newValue); }}
            options={genderOptions}
            value={location}
        />
    );
};
