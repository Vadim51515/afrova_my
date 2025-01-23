import {
    createElement,
    type CSSProperties,
    memo,
} from 'react';
import classNames from 'classnames';

import { type CFC } from '../../commonTypes';
import styles from './styles.module.scss';
type ITextTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface ITextProps {
    mix?: string;
    tagName?: ITextTag;
    isError?: boolean;
    isPrimary?: boolean;
    isPlaceholder?: boolean;
    isFieldText?: boolean;
    isCenter?: boolean;
    marginBottom?: number;
    dataTestId?: string;
}

export const Text: CFC<ITextProps> = memo(
    ({
        mix,
        tagName = 'p',
        isError,
        isPrimary,
        isPlaceholder,
        isFieldText,
        children,
        isCenter,
        marginBottom = 0,
        dataTestId,
    }) => {
        const mods = {
            [styles.error]: isError,
            [styles.primary]: isPrimary,
            [styles.placeholder]: isPlaceholder,
            [styles.fieldText]: isFieldText,
            [styles.centerText]: isCenter,
        };

        const style: CSSProperties = { marginBottom };

        return (
            createElement(tagName, {
                style,
                'data-test-id': dataTestId,
                className: classNames(styles.text, mods, styles[tagName], mix),
            }, children)
        );
    },
);
