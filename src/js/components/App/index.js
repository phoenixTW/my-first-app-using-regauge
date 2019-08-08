import React, { PureComponent } from 'react';
import './index.scss';
import logo from '../../../assets/images/Logo.png';
import Card from '../Card/card';

export default class App extends PureComponent {
    render() {
        return (
            <div className="app__wrapper">
                <div className="app__header" />
                <div className="app__content">
                    <Card
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing."
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit, lacus elementum eu vivamus sem urna penatibus cras, mus volutpat egestas dapibus inceptos auctor."
                    />
                </div>
            </div>
        );
    }
}
