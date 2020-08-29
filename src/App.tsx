import React from 'react';
import className from 'classnames/bind';

import style from './App.module.scss';

const cx = className.bind(style);

function App() {
    return (
        <div className={cx('App')}>
            Hello CRA!
        </div>
    );
}

export default App;
