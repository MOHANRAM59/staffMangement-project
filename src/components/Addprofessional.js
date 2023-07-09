import {  Field, Form, Formik,ErrorMessage } from "formik";
import axios from "axios";



export default function NewUser() {
  
    
  const submitHandler = async(values, setSubmitting) => {
    alert(JSON.stringify(values));
    await axios.post('http://localhost:8099/Staff',values)
  };
  const validator=(values)=>{
    const errors = {};
    if (!values.id) {
      errors.id = "Required";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
     values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  return (
    <Formik
      onSubmit={submitHandler}
      initialValues={{ name: "",email: "",mobile: "" }}
      validate={validator}
      style={{margin:'0 auto'}}
    >
      {({ isSubmitting }) => (
        <Form class="card" style={{width:'18rem',padding:'10px',marginLeft:'auto',marginRight:'auto'}}>
            

            <div class="form-group">
            <Field type="text" id="id" name="id" class="form-control" placeholder="Create your User ID" />
            <ErrorMessage class="form-text text-muted" name="id" id="id" component="div" />
            </div>

            <div class="form-group">
            <Field
            text="text"
            id="name" name="name"
            placeholder="Enter your First name"
            class="form-control"
            />
            <ErrorMessage class="form-text text-muted" name="name" id="name" component="div" />
            </div>

            

            <div class="form-group">
            <Field type="email" id="email" name="email" class="form-control" placeholder="Enter email address"/>
            <ErrorMessage class="form-text text-muted" name="email" id="email" component="div" />
            </div>

            <div class="form-group">
            <Field type="tel" id="mobile" name="mobile" class="form-control" placeholder="Enter your mobile "/>
            <ErrorMessage class="form-text text-muted" name="mobile" id="mobile" component="div" />
            </div>

            

          <button type="submit" class="btn btn-primary"  disabled={isSubmitting} >
            Create
          </button>
        </Form>
      )}
    </Formik>
    
  );
}