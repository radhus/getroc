import React from 'react';

import styles from './style.scss';

export default class Highlight extends React.Component {
    static propTypes = {
        image: React.PropTypes.string.isRequired,
        children: React.PropTypes.node.isRequired
    }

    render() {
        return (
            <div className={styles.highlight}>
                <div className={(this.props.image in styles) ? styles[this.props.image] : styles.image} />
                <div className={styles.text}>
                    { this.props.children }
                </div>
            </div>
        );
    }
}
