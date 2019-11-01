import React from 'react';

import styles from './Backdrop.scss';

type Props = {
    isVisible: boolean,
    onClick: () => void
};

const Backdrop = ({ isVisible, onClick }: Props) => (
    isVisible && <div className={styles.backdrop} onClick={onClick} role="presentation"></div>
);

export default Backdrop;