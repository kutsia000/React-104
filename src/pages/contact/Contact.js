import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { withAuthProtection } from '../../hoc/withAuthProtection';
// import { Input } from '../../components/ui';

function Contact(props) {
  const [value, setValue] = useState(0);
  const [number, setNumber] = useState(0);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, touchedFields },
  } = useForm();

  // useEffect(() => {
  //   console.log('CONTACT PAGE RENDERING...');
  // });

  useEffect(() => {
    // console.log('ერთჯერადი');
    // document.body.style.backgroundColor = 'red';

    return () => {
      // cleanup function
      // console.log('გამოსახულებების გასუფთავება');
      // document.body.style.backgroundColor = 'white';
    };
  }, []);

  useEffect(() => {
    // console.log('ახალი რიცხვი დაგენერირდა', value);
    // setNumber(value);
  }, [value]);

  useEffect(() => {
    // setValue(number + 1);
  }, [number]);

  // CUSTOM LOGIC

  const onSubmit = (data) => {
    console.log(data);
    console.log(isValid);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Random Number - {value}</h2>
        <button
          onClick={() => setValue(Math.floor(Math.random() * 100))}
          className="btn btn-primary"
        >
          Generate Number
        </button>

        <h2>Random Big Number - {number}</h2>
        <button
          onClick={() => setNumber(Math.floor(Math.random() * 10000))}
          className="btn btn-warning"
        >
          Generate Big Number
        </button>
      </div>
      <br />
      <br />
      <div className="col-md-12 shadow mt-2 p-3">
        <h2 className="text-muted">Contact Page</h2>
        <h4 className="text-muted">Contact Us</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email<sup className="text-danger">*</sup>
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              className={classNames('form-control', {
                'is-invalid': errors.email && touchedFields.email,
                'is-valid': !errors.email && touchedFields.email,
              })}
              {...register('email', {
                required: {
                  message: 'Email field is mandatory',
                  value: true,
                },
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.email && <span className="invalid-feedback">{errors.email.message}</span>}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="feedback">
              Feedback<sup className="text-danger">*</sup>
            </label>
            <textarea
              id="feedback"
              className={classNames('form-control', {
                'is-invalid': errors.feedback && touchedFields.feedback,
                'is-valid': !errors.feedback && touchedFields.feedback,
              })}
              {...register('feedback', {
                required: {
                  message: 'Feedback field is mandatory',
                  value: true,
                },
              })}
            ></textarea>
            {errors.feedback && <span className="invalid-feedback">{errors.feedback.message}</span>}
          </div>

          <div>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withAuthProtection(Contact);
