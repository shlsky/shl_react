import React from 'react';
import { render } from 'react-dom';

import App from './container/App';

const renderDom = Component => {
    render(
        <Component />,
        document.getElementById('app')
    );
}
renderDom(App);