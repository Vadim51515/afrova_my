import React, { type FC } from 'react';

import { Button } from '../Button';
import { type IActionControlsProps } from './types';

export const ActionControls: FC<IActionControlsProps> = ({
    editButtonText,
    cancelButtonText,
    onEdit,
    saveButtonText,
    onSave,
    onCancel,
    isReadonly,
    dataTestId,
}) => (
    <div>
        {isReadonly && (
            <Button
                data-testid={`${dataTestId}EditBtn`}
                onClick={onEdit}
            >
                {editButtonText || 'Редактировать'}
            </Button>
        )}

        {!isReadonly && (
            <div className='d-flex gap-10'>
                {onCancel && (
                    <Button
                        data-testid={`${dataTestId}CancelBtn`}
                        onClick={onCancel}
                        pattern={'outline'}
                    >
                        {cancelButtonText || 'Отменить'}
                    </Button>
                )}

                {onSave && (
                    <Button
                        data-testid={`${dataTestId}SaveBtn`}
                        onClick={onSave}
                    >
                        {saveButtonText || 'Сохранить'}
                    </Button>
                )}
            </div>
        )}
    </div>
);
