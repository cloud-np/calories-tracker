import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './Target.css';
import ProgressBar from './ProgressBar';
import { FcSportsMode, FcLineChart, FcAutomatic } from 'react-icons/fc';

class Target extends Component {

    static defaultProps = {
        percentage: 20,
        subTitle: '',
        val: 0
    }

    render() {
        let icon = <FcSportsMode size="35px" />

        switch(this.props.icon){
            case 'lineChart':
                icon = <FcLineChart size="35px" />
            break;

            case 'settings':
                icon = <FcAutomatic size="35px" />
            break;
        }

        return (
            <Card body className="m-3 Target">
                <Card.Title style={{ marginBottom: 0 }}>
                    {icon}
                    <h4 className="float-right">
                        {this.props.val}
                    </h4>
                </Card.Title>

                <p className="float-right text-muted description">
                    {this.props.subTitle}
                </p>

                <ProgressBar 
                    width={`${this.props.percentage}%`} 
                    title={this.props.subTitle.toUpperCase()} 
                />
            </Card>
        );
    }
}

export default Target;