import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationSchema = Yup.object().shape({
	username: Yup.string().required("Required"),
	password: Yup.string().required("Required"),
});

const RegistrationForm = ({ onSubmit }) => (
	<Formik
		initialValues={{ username: "", password: "" }}
		validationSchema={RegistrationSchema}
		onSubmit={(values, { setSubmitting }) => {
			onSubmit(values);
			setSubmitting(false);
		}}
	>
		{({ isSubmitting }) => (
			<Form>
				<Field type="text" name="username" placeholder="Username" />
				<ErrorMessage name="username" component="div" />
				<Field type="password" name="password" placeholder="Password" />
				<ErrorMessage name="password" component="div" />
				<button type="submit" disabled={isSubmitting}>
					Register
				</button>
			</Form>
		)}
	</Formik>
);

export default RegistrationForm;
