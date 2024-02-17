import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const initialValues = {
    firstName : "",
    lastName : "",
    phoneNumber : "",
    email : "",
    message : ""
};

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Required'),
    lastName: Yup.string()
      .required('Required'),
    phoneNumber : Yup.string(),
    // validate the phone number somehow
    email: Yup.string().email('Invalid email').required('Required'),
    description: Yup.string().required("What service would you like?")
  });


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <div id="contact">
            <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({ isSubmitting }) => (
                <Form className="max-w-sm mx-auto m-10">
                    <div className="mb-5">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <Field 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                        type="text" 
                        name="firstName"
                        id="firstName"
                        placeholder="Willow" />
                        <ErrorMessage name="firstName" component="div" />
                </div>
                <div className="mb-5">
                    <label for="LastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <Field 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        type="lastName" 
                        name="lastName"
                        id="lastName"
                        placeholder="Wood" />
                        <ErrorMessage name="lastName" component="div" />
                </div>
                <div className="mb-5">
                    <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <Field 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        type="text" 
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="555-555-5555" />
                        <ErrorMessage name="phoneNumber" component="div" />
                </div>
                <div class="mb-5">
                    <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <Field 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        type="text" 
                        name="email"
                        id="email"
                        placeholder="example@gmail.com" />
                        <ErrorMessage name="email" component="div" />
                </div>
                <div class="mb-5">
                    <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                        {/* <Field 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        type="text" 
                        name="message"
                        id="message" /> */}
                        <textarea class="form-textarea mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" rows="5" placeholder="Have a question? Want to request a service? Tell us about it." ></textarea>
                        <ErrorMessage name="message" component="div" />
                </div>
                <button 
                type="submit" 
                disabled={isSubmitting}
                className="rounded-full bg-dark text-white px-3 py-2">
                    Send
                </button>
                </Form>
            )}
            </Formik>
        </div>
    )
};

export default Contact;