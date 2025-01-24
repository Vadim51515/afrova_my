import { type CFC } from '../commonTypes';

export const Button: CFC = ({ children }) => {
    console.log();

    return (
        <button>
            {children}
        </button>
    );
};
