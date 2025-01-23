import { type TReducersList } from '../../../app/store/types';
import { useAsyncReducer } from '../../hooks/useAsyncReducer';
import { Text } from '../../ui-components/Text';
import { BotItem } from './components/BotItem';
import { bootsReducer } from './redux/slices/app';
import { type IBotItemData } from './types';
import styles from './styles.module.scss';

const reducers: TReducersList = { bots: bootsReducer };

export default () => {
    useAsyncReducer(reducers, true);

    const bots = [
        {
            id: 1,
            name: 'Тестовый бот 1',
            status: 'online',
        },
        {
            id: 2,
            name: 'Тестовый бот 2',
            status: 'offline',
        },
        {
            id: 3,
            name: 'Тестовый бот 3',
            status: 'awaits',
        },
        {
            id: 4,
            name: 'Тестовый бот 4',
            status: 'error',
        },
    ] as Array<IBotItemData>;

    return (
        <div className={styles.container}>
            <Text tagName='h1'>Список sdf</Text>

            <div className={styles.botsContainer}>
                {bots.map((bot) => (
                    <BotItem
                        data={bot}
                        key={bot.id}
                    />
                ))}
            </div>

        </div>
    );
};
