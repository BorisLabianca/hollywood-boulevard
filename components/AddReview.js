import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useRouter } from "next/router";

const AddReview = ({ id }) => {
  const router = useRouter();
  const initialValues = {
    author: "",
    rate: 0,
    text: "",
  };
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { author, rate, text } = values;
    console.log(id);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/movies/addReview",
        {
          author,
          rate,
          text,
          id: id,
        }
      );
      console.log(data);
    } catch (error) {
      console.log("AddReview catch>> ", error);
    }
    resetForm(initialValues);
    setSubmitting(false);
    router.replace(`/movies/${id}`, null, { scroll: false });
  };
  console.log(initialValues.rate);
  return (
    <div className="add-review-main">
      <h2>Ajoutez un commentaire </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
        validate={(values) => {
          const errors = {};
          if (!values.author) {
            errors.author = "Il faut renseigner votre nom d'utilisateur.";
          }
          if (values.author.length > 20) {
            errors.author =
              "Votre nom d'utilisateur doit faire 20 caractères maximum.";
          }
          if (!values.text) {
            errors.text = "Il faut entre un commentaire.";
          }
          if (values.text.length < 30) {
            errors.text = "Votre commentaire doit faire 30 caractères minimum.";
          }
          return errors;
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              gap: "10px",
            }}
          >
            <Field
              type="text"
              name="author"
              placeholder="Author"
              style={{ height: "25px", fontSize: "16px" }}
            />
            <ErrorMessage name="author" component="div" />
            <Field
              name="rate"
              as="select"
              style={{ height: "25px", fontSize: "16px" }}
            >
              <option value={0}>0 : 🤮</option>
              <option value={1}>1 : ⭐️</option>
              <option value={2}>2 : ⭐️⭐️</option>
              <option value={3}>3 : ⭐️⭐️⭐️</option>
              <option value={4}>4 : ⭐️⭐️⭐️⭐️</option>
              <option value={5}>5 : ⭐️⭐️⭐️⭐️⭐️</option>
            </Field>
            <Field
              type="text"
              name="text"
              as="textarea"
              rows={5}
              placeholder="Type in your review"
              style={{ fontSize: "16px" }}
            />
            <ErrorMessage name="text" component="div" />
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: "#0d98ba",
                borderRadius: "5px",
                border: "#0d98ba 1px solid",
                padding: "8px",
                fontSize: "18px",
                fontWeight: "700",
                color: "white",
              }}
            >
              Valider
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddReview;
