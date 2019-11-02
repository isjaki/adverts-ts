import React, { useState, useEffect } from 'react';

import { Option } from '../../../typings/global';

import styles from './Selector.scss';

type Props = {
    options: readonly Option[];
    initialValue: string;
    onSelectorChange: (value: string) => void;
}

const Selector = ({ options, initialValue, onSelectorChange }: Props): JSX.Element => {
    const [value, setValue] = useState(initialValue);

    const handleSelectorChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setValue(event.target.value);
    }

    useEffect(() => {
        onSelectorChange(value);
    }, [value]);

    return (
        <select value={value} className={styles.selector} onChange={handleSelectorChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.displayValue}</option>
            ))}
        </select>
    );
}

export default Selector;