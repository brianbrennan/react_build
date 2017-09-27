import React from 'react';
import { render } from 'react-dom';

import MainHeader from '../globals/components/MainHeader/MainHeader.jsx';

class App extends React.Component {

    render() {
        return (
            <section className="appWrap">
                <MainHeader></MainHeader>
            </section>
        );
    }
}

render(<App/>, document.getElementById('app'));