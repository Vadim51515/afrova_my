import { withMode } from '../../HOC/withMode';
import { EditMode } from './chunks/EditMode';
import { ViewMode } from './chunks/ViewMode';

export const Input = withMode({
    Edit: EditMode,
    View: ViewMode,
});
