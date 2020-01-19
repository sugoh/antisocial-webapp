import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

class CTA extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Button color="link" variant="success" className="py-3 px-md-4 md greenButton" onClick={this.handleClick}>
                    Get early access for free
                    </Button>
            </div >
        );
    }

}
export default CTA;