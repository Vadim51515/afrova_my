import { withMode } from '../../HOC/withMode';
import { EditMode } from './chunks/EditMode';
import { ViewMode } from './chunks/ViewMode';

export const Select = withMode({
    Edit: EditMode,
    View: ViewMode,
});
