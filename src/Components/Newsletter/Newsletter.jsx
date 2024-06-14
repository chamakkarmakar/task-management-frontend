import React from 'react'

const Newsletter = () => {
    return (
        <div className='md:w-1/2 mx-auto w-full my-20'>
                <h6 className="text-3xl font-bold text-center text-emerald-600">Newsletter</h6>

            <form className='flex flex-col justify-center items-center'>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Newsletter
