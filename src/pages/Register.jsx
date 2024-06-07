import React from 'react'
import { Formik,Form, Field, ErrorMessage } from 'formik'

const Register = () => {
  return (
 
    <Formik>
<div className="container">
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