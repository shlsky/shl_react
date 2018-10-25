import React from 'react';
import { render } from 'react-dom';
import IncrementBtn from './component/IncrementBtn'

const renderDom = Component => {
    render(
        <Component />,
        document.getElementById('app')
    );
}
renderDom(IncrementBtn);