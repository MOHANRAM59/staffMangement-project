import { Field, Form, Formik, ErrorMessage } from "formik";
import axios from "axios";

export default function SignUp() {
  const submitHandler = async (values, setSubmitting) => {
    alert(JSON.stringify(values));
    await axios.post("http://localhost:8099/signup", values);
  };

  const validator = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      values.email.indexOf("@") < 0 ||
      values.email.indexOf("@") > values.email.lastIndexOf(".")
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  return (
    <Formik
      onSubmit={submitHandler}
      initialValues={{ username: "", email: "", password: "" }}
      validate={validator}
      style={{ margin: "0 auto" }}
    >
      {({ isSubmitting }) => (
        <Form className="card" style={{ width: "18rem", padding: "10px", margin: "0 auto" }}>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" className="form-control" />
              <ErrorMessage name="username" component="div" className="form-text text-muted" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <Field type="email" id="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="form-text text-muted" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="form-text text-muted" />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Sign Up
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
