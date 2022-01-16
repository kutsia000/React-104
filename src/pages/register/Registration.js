import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Card } from '../../components/Card/Card';

const Registration = (props) =>{
    return(
        <div className="row">
            <h1 className="text-muted">Registration</h1>
            <Card className="p-4">
                <RegistrationForm />
            </Card>
        </div>
    )
}

export default Registration;