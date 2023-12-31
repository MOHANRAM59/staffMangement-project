import { Field, Form, Formik, ErrorMessage } from "formik";
import axios from "axios";

export default function NewUser() {
  const submitHandler = async (values, setSubmitting) => {
    alert(JSON.stringify(values));
    await axios.post("http://localhost:8099/Staff", values);
  };

  const validator = (values) => {
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
      values.email.indexOf("@") < 0 ||
      values.email.indexOf("@") > values.email.lastIndexOf(".")
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  return (
    <Formik
      onSubmit={submitHandler}
      initialValues={{ name: "", email: "", mobile: "" }}
      validate={validator}
      style={{ margin: "0 auto" }}
    >
      {({ isSubmitting }) => (
        <Form className="card" style={{ width: "18rem", padding: "10px", margin: "0 auto" }}>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="id">Create your User ID</label>
              <Field type="text" id="id" name="id" className="form-control" />
              <ErrorMessage name="id" component="div" className="form-text text-muted" />
            </div>

            <div className="form-group">
              <label htmlFor="name">Enter your First name</label>
              <Field type="text" id="name" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="form-text text-muted" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Enter email address</label>
              <Field type="email" id="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="form-text text-muted" />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Enter your mobile</label>
              <Field type="tel" id="mobile" name="mobile" className="form-control" />
              <ErrorMessage name="mobile" component="div" className="form-text text-muted" />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Create
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
