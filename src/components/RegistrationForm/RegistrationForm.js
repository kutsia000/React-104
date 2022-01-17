import { memo } from "react"

import { useForm } from 'react-hook-form';
import { Input, Button } from '../ui';

import { useAuth } from '../../hook/useAuthState';

import { registerAsync } from "../../api/auth";

const RegistrationForm = ({customSubmit}) =>{
    const { register, handleSubmit } = useForm();
    const { registration } = useAuth();
    const onSubmit = async({email,password}) => {
        const response = await registerAsync(email,password);
        //console.log(response)
        if(response.success){
            //console.log(response)
            registration(response.data.token)
        }
        else{

        }
        customSubmit(response);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <code>
                <pre>"email": "eve.holt@reqres.in", "password": "cityslicka"</pre>
            </code>
            <div className="form-group mb-3">
                <Input
                label="ელ. ფოსტა"
                name="email"
                placeholder="example@mail.com"
                type="email"
                className="form-control"
                id="email"
                {...register('email', { required: true })}
                />
            </div>

            <div className="form-group mb-3">
                <Input
                label="პაროლი"
                name="password"
                placeholder="*******"
                type="password"
                className="form-control"
                id="password"
                {...register('password', { required: true })}
                />
            </div>

            <div className="form-group mb-3">
                <Button className="btn btn-outline-primary" type="submit" text="რეგისტრაცია" />
            </div>
        </form>
    )
}

export default memo(RegistrationForm);