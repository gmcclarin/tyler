import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import emailjs from '@emailjs/browser';


const initialValues = {
    firstName : "",
    lastName : "",
    phoneNumber : "",
    fromEmail : "",
    message1 : ""
};

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Required'),
    lastName: Yup.string()
      .required('Required'),
    phoneNumber : Yup.string(),
    // validate the phone number somehow
    fromEmail: Yup.string().email('Invalid email').required('Required'),
    message1: Yup.string().required("What service would you like?")
  });

  const serviceId = process.env.SERVICE_ID;
  const templateId = process.env.TEMPLATE_ID;
  const pubKey = process.env.PUBLIC_KEY;

//   this is undefined....
//   console.log(pubKey)


const Contact = () => {


    return (
        <div id="contact">
            <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values, {resetForm},) => {

                console.log(values)
                // const templateParams = {
                //     from_first: values.firstName,
                //     from_last: values.lastName,
                //     phone: values.phoneNumber,
                //     email: values.fromEmail,
                //     message : values.message
                //   };


                // emailjs.send(serviceId, templateId,templateParams, pubKey)
                //     .then((response) => {
                //         console.log("Email sent Successfully:", response)
                //  }).catch((error) => {
                //     console.error("Error sending email:", error)
                //  })

                // ALERT??
                // setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                // }, 400);

                resetForm({values : initialValues})
            }}
            >
            {({values, errors, handleChange, handleSubmit, touched, handleBlur, isSubmitting}) => (
                <form onSubmit={handleSubmit}
                className="max-w-sm mx-auto m-10"
                >
                    <div className="mb-5">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                            />
                {errors.firstName && touched.firstName && errors.firstName}
                </div>
                <div className="mb-5">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input
                            type="lastName"
                            name="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                            />
                {errors.lastName && touched.lastName && errors.lastName}
                </div>
                <div className="mb-5">
                    <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phoneNumber}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                            />
                {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                </div>
                <div className="mb-5">
                    <label htmlFor="fromEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            type="fromEmail"
                            name="fromEmail"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fromEmail}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                            />
                {errors.fromEmail && touched.fromEmail && errors.fromEmail}
                </div>

                <div className="mb-5">
                    <label htmlFor="message1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Inquiry</label>
                        <textarea
                            type="message1"
                            name="message1"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message1}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                            />
                {errors.message1 && touched.message1 && errors.message1}
                </div>
                <button type="submit" 
                disabled={isSubmitting}
                className="bg-white text-black rounded-xl px-2 p-1">
                  Send
                </button>
              </form>   
            )}
            </Formik>
        </div>
    )
};

export default Contact;