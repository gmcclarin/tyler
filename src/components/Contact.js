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
         <Form>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
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