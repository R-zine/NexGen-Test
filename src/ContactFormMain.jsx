import React from 'react'
import { useForm } from 'react-hook-form'

export default function ContactFormMain() {
    // API URL, hookb.in was used for testing

    const url = 'https://hookb.in/Z2V63laXKyTKWedKLwXq'

    // BIN service setup

    const xhr = new XMLHttpRequest()

    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

    // React Hook form setup
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // the following function is invoked when all required fields are properly filled out

    const onSubmit = (data) => {
        xhr.send(JSON.stringify(data))
        alert('Form successfully submitted.')
    }

    // the following function fires when some fields are not field or do not match the requirements

    const onError = (errors) => {
        const missingFields = Object.keys(errors)
        alert(
            `Please fill out the following fields: ${missingFields.join(', ')}`
        )
    }

    return (
        <div className="form-section">
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="form-group">
                    <h2>Personal Information</h2>
                    <input
                        type="text"
                        placeholder="First name"
                        {...register('First name', {
                            required: true,
                            maxLength: 80,
                        })}
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        {...register('Last name', {
                            required: true,
                            maxLength: 100,
                        })}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        {...register('Email', {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                        })}
                    />
                    <input
                        type="tel"
                        placeholder="Mobile number"
                        {...register('Mobile number', {
                            required: true,
                            minLength: 6,
                            maxLength: 12,
                        })}
                    />
                    <input
                        type="date"
                        placeholder="Date of Birth"
                        {...register('Date of Birth', { required: true })}
                    />
                </div>
                <div className="form-group">
                    <h2>Employment Information</h2>

                    <div className="stack">
                        <h3>Frontend</h3>
                        <input
                            {...register('Stack', { required: true })}
                            type="radio"
                            value="Frontend"
                        />
                        <h3>Backend</h3>
                        <input
                            {...register('Stack', { required: true })}
                            type="radio"
                            value=" Backend"
                        />
                        <h3>Full-stack</h3>
                        <input
                            {...register('Stack', { required: true })}
                            type="radio"
                            value=" Full-stack"
                        />
                    </div>

                    <input
                        type="number"
                        placeholder="Years of Experience"
                        min="0"
                        {...register('Years of Experience', {
                            required: true,
                            max: 50,
                        })}
                    />
                    <select
                        {...register('Type of Employment', { required: true })}
                    >
                        <option value=" Full-time"> Full-time</option>
                        <option value=" Part-time"> Part-time</option>
                        <option value=" Freelancer"> Freelancer</option>
                    </select>
                </div>
                <div className="form-group">
                    <h2>Additional Information</h2>
                    <div className="stack">
                        <h3>Subscribe to our newsletter?</h3>
                        <input
                            type="checkbox"
                            placeholder="Subscribe to Newsletter?"
                            {...register('Subscribe to Newsletter?', {})}
                        />
                    </div>
                    <input
                        type="url"
                        placeholder="Portfolio Website"
                        {...register('Portfolio Website', {})}
                    />
                </div>
                <div className="form-group">
                    <h2>Message</h2>
                    <textarea
                        {...register('Message', {
                            required: true,
                            maxLength: 3000,
                        })}
                    />
                    <input className="submit-btn" type="submit" />
                </div>
            </form>
        </div>
    )
}
