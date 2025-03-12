import {
    type IWithMode,
    type IWithModeProps,
} from './types';

export const withMode = <T, P extends T & IWithModeProps>(OriginalComponent: IWithMode<T>) => (props: P) => {
    const { isReadonly } = props;

    console.log('isReadonly', isReadonly);
    console.log('props', props);

    if (isReadonly) return <OriginalComponent.View {...props} />;

    return <OriginalComponent.Edit {...props} />;
};
