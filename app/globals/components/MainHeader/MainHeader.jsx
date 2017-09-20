import React from 'react';

export default class MainHeader extends React.Component {

    render() {
        return (
            <section className="mainNav">
                <nav>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </nav>
            </section>
        );
    }
}