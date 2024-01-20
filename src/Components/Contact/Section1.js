import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useMemo } from 'react'
import countryList from 'react-select-country-list'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Section1() {
    const options = useMemo(() => countryList().getData(), [])
    // const formSubmitURL = "https://script.google.com/macros/s/AKfycbzbYKlFzKqov-x_r2VPlpC1G9wU0b63geAzds2kLvzDHczgwciiMePwMkqxMGOycuis/exec";

    // const onSubmit = () => {
    //     const type = document.getElementById("inquiry-type")
    //     const name = document.getElementById("name");
    //     const company_name = document.getElementById("company-name");
    //     const country = document.getElementById("country");
    //     const city = document.getElementById("city");
    //     const address = document.getElementById("address");
    //     const email = document.getElementById("email");
    //     const number = document.getElementById("number");
    //     const subject = document.getElementById("subject");
    //     const msg = document.getElementById("msg");


    // form encoderspro

    const onSubmit = () => {
        var type = document.getElementById("inquiry-type").value
        var name = document.getElementById("name").value;
        var company = document.getElementById("company-name").value;
        var country = document.getElementById("country").value;
        var city = document.getElementById("city").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;
        var number = document.getElementById("number").value;
        var subject = document.getElementById("subject").value;
        var msg = document.getElementById("msg").value;



        if (type && name && company && country && city && address && email && number && email && number && subject && msg) {
            var formData = {
               type: type,
                name: name,
                company: company,
                country: country,
                city: city,
                address: address,
                email: email,
                number: number,
                email: email,
                number: number,
                subject: subject,
                msg: msg

            };

            fetch('https://script.google.com/macros/s/AKfycbwlwk2VEbo5hZIqVJZ7JxkiuQZ3S2VUokDWmErMxsO8BhGmsAUmkWlUXX-e3h8WwtoR/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData)
            })
                .then(response => {
                    


                    document.getElementById("inquiry-type").value = "";
                    document.getElementById("name").value = "";
                    document.getElementById("company-name").value = "";
                    document.getElementById("country").value = "";
                    document.getElementById("city").value = "";
                    document.getElementById("address").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("number").value = "";
                    document.getElementById("subject").value = "";
                    document.getElementById("msg").value = "";
                     toast.success("Your Response submitted suceesfully🥳")

                })
                .catch(error => {
                    toast.error('Error submitting form!');

                });
        } else {
            toast.warn("Please fill in all the fields");
        }

    }


return (
        <div className=' w-full flex justify-center gap-y-8 flex-col items-center px-4 lg:px-32 lg:py-20 py-10'>


            <h1 className=' text-black text-6xl font-extrabold'>
                Contact
            </h1>


            <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-16 flex flex-col justify-center text-xl lg:text-2xl items-center w-full"
            >



                <div className='w-full h-20'>
                    <label className="font-medium">
                        Inquiry Type*
                    </label>
                    <div className="relative h-full  text-black text-xl font-bold mt-2">
                        <select id='inquiry-type' className="w-full mt-1 h-full px-4  outline-none border shadow-lg rounded-xl bg-[#F3F3F3] appearance-none">
                            <option value="" disabled selected className=' '>Select Type</option>
                            <option value="US">We a Certified Builder</option>
                            <option value="ES">FeedBack/Complaint</option>
                            <option value="MR">Project Inquiry</option>
                            <option value="MR"> Suplier</option>
                            <option value="MR"> Write Us</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                            <svg className="fill-current h-14 w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a1 1 0 0 1-.7-.29l-3-3a1 1 0 1 1 1.41-1.42L10 9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-3 3a1 1 0 0 1-.7.29z" /></svg>
                        </div>
                    </div>
                </div>
                <div className=' w-full flex gap-y-12 gap-x-5 lg:flex-row flex-col'>
                    <div className=' lg:w-1/2 w-full h-20'>
                        <label className="font-medium">
                            Full name*
                        </label>
                        <input
                            id='name'
                            type="text"
                            required
                            className="w-full mt-1 h-full px-4  text-black  outline-none border  shadow-lg rounded-xl  bg-[#F3F3F3]"
                        />
                    </div>
                    <div className=' lg:w-1/2 w-full h-20'>
                        <label className="font-medium">
                            Company name*
                        </label>
                        <input
                            id='company-name'
                            type="text"
                            required
                            className="w-full mt-1 h-full px-4  text-black  outline-none border  shadow-lg rounded-xl  bg-[#F3F3F3]"
                        />
                    </div>
                </div>


                <div className=' w-full flex gap-x-5 lg:flex-row gap-y-12 flex-col'>
                    <div className=' lg:w-1/2 w-full h-20'>
                        <label className="font-medium">
                            Select Country*
                        </label>
                        <div className="relative h-full  text-black text-xl font-bold mt-2">
                            <select id='country' className="w-full mt-1 h-full px-4  outline-none border shadow-lg rounded-xl bg-[#F3F3F3] appearance-none">
                                <option value="" disabled selected className=' '>Select </option>
                                {options.map((country) => (
                                    <option key={country.value} value={country.value}>
                                        {country.label}
                                    </option>
                                ))}


                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                                <svg className="fill-current h-14 w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a1 1 0 0 1-.7-.29l-3-3a1 1 0 1 1 1.41-1.42L10 9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-3 3a1 1 0 0 1-.7.29z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className=' lg:w-1/2 w-full h-20'>
                        <label className="font-medium">
                            City*
                        </label>
                        <input
                            id='city'
                            type="text"
                            required
                            className="w-full mt-1 h-full px-4  text-black  outline-none border  shadow-lg rounded-xl  bg-[#F3F3F3]"
                        />
                    </div>
                </div>


                <div className='  w-full h-20'>
                    <label className="font-medium">
                        Address*
                    </label>
                    <input
                        id='address'
                        type="text"
                        required
                        className="w-full mt-1 h-full px-4  text-black  outline-none border  shadow-lg rounded-xl  bg-[#F3F3F3]"
                    />
                </div>


                <div className=' w-full flex gap-x-5 gap-y-12 lg:flex-row flex-col'>
                    <div className=' lg:w-1/2 w-full h-20'>
                        <label className="font-medium">
                            Email Address*
                        </label>
                        <input
                            id='email'
                            type="email"
                            required
                            className="w-full mt-1 h-full px-4  text-black  outline-none border  shadow-lg rounded-xl  bg-[#F3F3F3]"
                        />
                    </div>
                    <div className=' lg:w-1/2 w-full h-20'>
                        <label className="font-medium">
                            Contact*
                        </label>
                        <input
                            id='number'
                            type="number"
                            required
                            className="w-full mt-1 h-full px-4  text-black  outline-none border  shadow-lg rounded-xl  bg-[#F3F3F3]"
                        />
                    </div>
                </div>

                <div className='  w-full h-20'>
                    <label className="font-medium">
                        Subject*
                    </label>
                    <input
                        id='subject'
                        type="text"
                        required
                        className="w-full mt-1 h-full px-4  text-black  outline-none border  shadow-lg rounded-xl  bg-[#F3F3F3]"
                    />
                </div>

                <div className='  w-full h-40'>
                    <label className="font-medium">
                        Message*
                    </label>
                    <textarea
                        id='msg'
                        type="text"
                        required
                        className="w-full mt-1 h-full px-4  text-black  outline-none border  shadow-lg rounded-xl  bg-[#F3F3F3]"
                    />
                </div>

                <div className=' lg:justify-between flex lg:flex-row flex-col justify-center items-center gap-y-5 w-full'>
                    <button onClick={onSubmit} className='flex justify-center items-center bg-bg-orange text-white rounded-full w-full lg:w-1/4 px-8 lg:px-6 py-3'>
                        Submit
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>

    )
}
