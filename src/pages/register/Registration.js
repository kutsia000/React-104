import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Card } from '../../components/Card/Card';

import { useState, useMemo, useCallback } from 'react';

const Registration = (props) =>{

    const onSubmit = useCallback((data) => {
        console.log('onSubmit', data);
    }, []);

    return(
        <div className="row">
            <h1 className="text-muted">Registration</h1>
            <Card className="p-4">
                <RegistrationForm customSubmit={onSubmit} />
            </Card>
        </div>
    )
}

export default Registration;