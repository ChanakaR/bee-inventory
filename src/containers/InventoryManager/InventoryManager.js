import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import NavBar from '../../components/NavBar/NavBar';

class InventoryManager extends Component {
    render() {
        return (
            <Aux>
                <NavBar />
                <div>Container</div>
                <div>Footer</div>
            </Aux>
        );
    }
}

export default InventoryManager;