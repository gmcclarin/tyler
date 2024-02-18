import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import emailjs from '@emailjs/browser';


const initialValues = {
    firstName : "",
    lastName : "",
    phoneNumber : "",
    fromEmail : "",
    message : ""
};

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Required'),
    lastName: Yup.string()
      .required('Required'),
    phoneNumber : Yup.string(),
    // validate the phone number somehow
    fromEmail: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required("What service would you like?")
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
                    <label htmlFor="fromEmail" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <Field 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        type="email" 
                        name="fromEmail"
                        id="fromEmail"
                        placeholder="example@gmail.com" />
                        <ErrorMessage name="fromEmail" component="div" />
                </div>
                <div class="mb-5">
                    <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                        <textarea 
                        type="text"
                        class="form-textarea mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" 
                        rows="5" 
                        placeholder="Have a question? Want to request a service? Lets talk about it."
                        id="message"
                        name="message" >
                        </textarea>
                        
                        <ErrorMessage name="message" component="div" />
                </div>
                <button 
                type="submit" 
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