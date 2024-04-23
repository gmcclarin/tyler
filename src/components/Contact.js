import { Formik} from 'formik';
import * as Yup from 'yup';
import React, {useRef} from 'react';
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

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const pubKey = process.env.REACT_APP_PUBLIC_KEY;

  console.log(serviceId)

//   this is undefined....
//   console.log(pubKey)

const Contact = () => {

    const form = useRef();

    return (
        <div id="contact" className="m-5 sm:m-0 text-black">
            <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values, {resetForm},) => {

                const templateParams = {
                    from_first: values.firstName,
                    from_last: values.lastName,
                    phone: values.phoneNumber,
                    email: values.fromEmail,
                    message : values.message1
                  };

                // emailjs.send(serviceId, templateId, templateParams, pubKey)
                //     .then((response) => {
                //         console.log("Email sent Successfully:", response)
                //  }).catch((error) => {
                //     console.error("Error sending email:", error)
                //  })


                setTimeout(() => {
                alert(("Your was Inquiry sent to Tyler!"));
                }, 400);

                resetForm({values : initialValues})
            }}
            >
            {({values, errors, handleChange, handleSubmit, touched, handleBlur, isSubmitting}) => (
                <form onSubmit={handleSubmit}
                ref={form}
                className="max-w-sm mx-auto m-10"
                >
                    <div className="mb-5">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium ">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                            />
                {errors.firstName && touched.firstName && errors.firstName}
                </div>
                <div className="mb-5">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium ">Last Name</label>
                        <input
                            type="lastName"
                            name="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                            />
                {errors.lastName && touched.lastName && errors.lastName}
                </div>
                <div className="mb-5">
                    <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium ">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phoneNumber}
                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                            />
                {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                </div>
                <div className="mb-5">
                    <label htmlFor="fromEmail" className="block mb-2 text-sm font-medium ">Email</label>
                        <input
                            type="fromEmail"
                            name="fromEmail"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fromEmail}
                            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                            />
                {errors.fromEmail && touched.fromEmail && errors.fromEmail}
                </div>

                <div className="mb-5">
                    <label htmlFor="message1" className="block mb-2 text-sm font-medium ">Inquiry</label>
                        <textarea
                            type="message1"
                            name="message1"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message1}
                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                            />
                {errors.message1 && touched.message1 && errors.message1}
                </div>
                <button type="submit" 
                disabled={isSubmitting}
                className="bg-white text-black rounded-xl px-4 p-1 shadow-2xl shadow-black">
                  Send
                </button>
              </form>   
            )}
            </Formik>
        </div>
    )
};

export default Contact;