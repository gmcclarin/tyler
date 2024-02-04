import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const initialValues = {
    firstName : "",
    lastName : "",
    phoneNumber : "",
    email : "",
    description : ""
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
    return (
        <div>
     <h1>Contact Us</h1>
     <Formik
       initialValues={initialValues}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form className="max-w-sm mx-auto m-10">
            <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                <Field 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="firstName" 
                name="firstName" i
                d="firstName" />
                <ErrorMessage name="firstName" component="div" />
           </div>
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
    )
};

export default Contact;