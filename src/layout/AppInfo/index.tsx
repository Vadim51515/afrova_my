import { store } from '../../app/store';
import { type CFC } from '../../common/commonTypes';
import { appInfoReducer } from './redux/slices/slice';

store.addModule('appInfo', appInfoReducer);

export const AppInfo: CFC = ({ children }) => children;
