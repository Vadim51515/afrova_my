import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';
import { StoreProvider } from './app/providers/router/StoreProvider';
import './app/styles/index.scss';
const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>,
);
