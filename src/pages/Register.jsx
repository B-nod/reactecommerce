import React from 'react'
import { Formik,Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  return (
 
    <Formik
    // in initalvalues we define object
    initialValues={{firstname:'', lastname:'', email:'', password:'', cpassword:''}}

    validationSchema={Yup.object({
        firstname:Yup.string()
        .max(20,'must be 20 characters as less')
        .required('firstname is mandatory'),

        lastname:Yup.string()
        .max(20, 'must be 20 characgters or less')
        .required('lastname is mandatory'),

        email:Yup.string()
        .email('invalid email format')
        .required('email is mandatory'),

        password:Yup.string()
        .matches(/(?=.[A-Za-z])(?=.*[0-9])(?=.*[s#$-_?!])[A-Za-z0-9@#$-_?!]{8,9}$/,'must be minimum 8 character and contain uppercase, lowercase, numeric and special characters')
        .required('password is mandatory'),

        cpassword:Yup.string()
        .required('Confirm password is mandatory')
        .oneOf([Yup.ref('password'), null],'password and confirm password must match')
    
            
    })}


    >
<div className="container my-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-5 shadow-lg">
            <Form>
                <h2 className="text-muted text-center">Register Form</h2>
                <div className="mb-2">
                    <label htmlFor="firstname">First Name</label>
                    <Field type="text" name="firstname" id="firstname" className="form-control"/>
                    <ErrorMessage name='firstname'>
                        {msg=><div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>

                </div>
                <div className="mb-2">
                    <label htmlFor="lastname">Last Name</label>
                    <Field type="text" name="lastname" id="lastname" className="form-control"/>
                    <ErrorMessage name='lastname'>
                        {msg=><div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>

                </div>
                <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" id="email" className="form-control"/>
                    <ErrorMessage name='email'>
                        {msg=><div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>

                </div>
                <div className="mb-2">
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" id="password" className="form-control"/>
                    <ErrorMessage name='password'>
                        {msg=><div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>

                </div>
                <div className="mb-2">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <Field type="password" name="cpassword" id="cpassword" className="form-control"/>
                    <ErrorMessage name='cpassword'>
                        {msg=><div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>

                </div>
                <div className="mb-2">
                    <button className="btn btn-success">
                        Register
                    </button>
                </div>

            </Form>
        </div>
    </div>
</div>
    </Formik>
 
  )
}

export default Register