import { Field, Form, Formik, ErrorMessage } from "formik";
import axios from "axios";

export default function NewUser() {
  const deleteHandler = async (id, form) => {
    await axios.delete(`http://localhost:8099/staff/${id}`);
    alert(`User with ID ${id} has been deleted.`);
  };

  const validator = (values) => {
    const errors = {};
    if (!values.deleteId) {
      errors.deleteId = "Required";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{ deleteId: "" }}
      validate={validator}
      style={{ margin: "0 auto" }}
    >
      {(form) => (
        <Form
          className="card"
          style={{ width: "18rem", padding: "10px", margin: "0 auto" }}
        >
          <div className="form-group">
            <Field
              type="text"
              id="deleteId"
              name="deleteId"
              className="form-control"
              placeholder="Enter the User ID to delete"
            />
            <ErrorMessage
              className="form-text text-muted"
              name="deleteId"
              id="deleteId"
              component="div"
            />
          </div>

          <button
            type="button"
            className="btn btn-danger mt-2"
            onClick={(e) => deleteHandler(form.values.deleteId, form)}
            disabled={form.isSubmitting}
          >
            Delete
          </button>
        </Form>
      )}
    </Formik>
  );
}
