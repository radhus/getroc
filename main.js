import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { click } from './clicker';

import styles from './style.scss';

function mapStateToProps(state) {
    return {
        clicker: state.clicker
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ click }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends React.Component {
    static propTypes = {
        clicker: React.PropTypes.number.isRequired,
        click: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <div className={styles.main}>
                <h1>Getroc.org</h1>
                <div>
                    { this.props.clicker } <button onClick={ this.props.click }>Click me!</button>
                </div>
                <p>
                    Get Roc!
                </p>
            </div>
        );
    }
}
