import { type Func } from '../../commonTypes';

export interface IActionControlsProps {
    className?: string;
    onEdit: Func;
    onSave?: Func;
    onCancel?: Func;
    saveButtonText?: string;
    cancelButtonText?: string;
    editButtonText?: string;
    isReadonly?: boolean;
    dataTestId?: string;
}
