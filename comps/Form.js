import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ formGroup, formControl, formSelect, button }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitted, setIsSubmmitted] = useState(false);
    const onSubmit = (data) => {
        var formattedData = JSON.stringify(data);
        console.log(formattedData);
        if (data) {
            setIsSubmmitted(true);
        };
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} action="" name="client register form" noValidate className={`${isSubmitted && "is-submitted"}`}>
            <h1 className="form-header">Client register form</h1>
            <div className={formGroup}>
                <label htmlFor="name">Name</label>
                <input className={formControl} type="text" id="name" name="name" placeholder="" {...register("name", { required: true, minLength: 6, maxLength: 50 })} />
                {
                    errors.name
                        ? errors.name.type === "required"
                            ? <span className="error-message">Name is requred.</span>
                            : errors.name.type === "minLength"
                                ? <span className="error-message">Must be longer than 6 characters.</span>
                                : errors.name.type === "maxLength"
                                    ? <span className="error-message">Must be less than 50 characters.</span>
                                    : ""
                        : ""
                }
            </div>
            <div className={formGroup}>
                <label htmlFor="email">Email</label>
                <input className={formControl} type="email" id="email" name="email" placeholder=""  {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} />
                {
                    errors.email
                        ? errors.email.type === "required"
                            ? <span className="error-message">Email is required.</span>
                            : errors.email.type === "pattern"
                                ? <span className="error-message">Incorrect format.</span>
                                : ""
                        : ""
                }
            </div>
            <div className={formGroup}>
                <label htmlFor="number">Phone number</label>
                <input className={formControl} type="tel" id="number" name="number" placeholder="" {...register("number", { required: true, pattern: /^[0-9]*$/ })} />
                {
                    errors.number
                        ? errors.number.type === "required"
                            ? <span className="error-message">Phone number is required.</span>
                            : errors.number.type === "pattern"
                                ? <span className="error-message">Numbers only.</span>
                                : ""
                        : ""
                }
            </div>
            <div className={formGroup}>
                <label htmlFor="country">Country</label>
                <select className={formSelect} name="country" id="country" {...register("country", { required: true })}>
                    <option value="" defaultValue>-Country-</option>
                    <option value="AU">Australia</option>
                    <option value="CN">China</option>
                    <option value="JP">Japan</option>
                    <option value="NZ">New Zealand</option>
                    <option value="KR">South Korea</option>
                    <option value="UK">United Kingdom</option>
                </select>
                {
                    errors.country
                        ? errors.country.type === "required" && <span className="error-message">Country is required.</span>
                        : ""
                }
            </div>
            <button className={button} type="submit">Submit</button>
        </form>
    );
}

export default Form;