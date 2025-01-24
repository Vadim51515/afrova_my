import { TReducersList } from "@/app/store/types";
import { CFC } from "@/common/commonTypes"
import { appInfoReducer } from "./slice";
import { useAsyncReducer } from "@/common/hooks/useAsyncReducer";

const reducers: TReducersList = { appInfo: appInfoReducer };

export const AppInfo: CFC = ({children}) => {
    useAsyncReducer(reducers, true);


    return  children
}