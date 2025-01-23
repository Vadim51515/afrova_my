import {
    memo,
    useState,
} from 'react';

const Child = memo(({ onClick }) => {
    console.log('Child rendered');

    return <button onClick={onClick}>Click me</button>;
});

export const ProfileBtn = () => {
    const [test, setTest] = useState(true);
    const [test2, setTest2] = useState(true);

    function printArgs() {
        console.log('arguments', arguments);
        arguments.join = [].join; // одолжили метод (1)

        const argStr = arguments.join(':'); // (2)

        console.log('argStr', argStr); // сработает и выведет 1:2:3
    }

    printArgs({
        1: 1,
        2: 2,
        3: 3,
        lenght: 3,
    });

    return (
        <div>
            <button onClick={() => { setTest(!test); }}>Меняет</button>

            <button onClick={() => { setTest2(!test2); }}>Не меняет</button>

        </div>
    );
};
