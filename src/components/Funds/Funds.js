import React from 'react';
import { Button } from '@material-ui/core';

import TitleBar from "../TitleBar/TitleBar";
import './Funds.css';
import Fund from '../Fund/Fund';


const Funds = () => {
    return (
    <>
    <TitleBar>ABC Charity</TitleBar>
    <div className="funds-container">
        <Fund for={'Balance'}></Fund>
        <Fund for={'Charity'}></Fund>
    </div>
    <div className="action-buttons">
            <Button className="action" variant="outlined" color="secondary">+ 10000</Button>
            <Button className="action" variant="outlined" color="secondary">- 10000</Button>
            <Button className="action" variant="outlined" color="secondary">Donate</Button>
    </div>
    </>
    );
}

export default Funds;