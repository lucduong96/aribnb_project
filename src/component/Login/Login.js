import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { dangNhapAction } from "../../redux/action/dangNhapAction";
export default function Login() {
  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(4, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  return (
    <Formik
      class="container mx-auto bg-white"
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        dispatch(dangNhapAction(values));
      }}
    >
      {({ errors, touched }) => (
        <div class="w-2/3 md:w-1/2 lg:w-1/3 border-solid border-2 rounded-3xl border-primary shadow-2xl p-6 mt-10 my-0 mx-auto">
          <h1 class="text-lg text-primary font-bold">Login</h1>
          <Form class="flex flex-col mt-4">
            <Field
              type="email"
              name="email"
              class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-pink-500 text-sm"
              placeholder="Email"
            />
            {errors.email && touched.email ? (
              <div className="text-primary">{errors.email}</div>
            ) : null}
            {errors.taiKhoan && touched.taiKhoan ? (
              <div className="text-primary">{errors.taiKhoan}</div>
            ) : null}
            <Field
              type="password"
              name="password"
              class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-pink-500 text-sm"
              placeholder="Mật khẩu"
            />
            {errors.password && touched.password ? (
              <div className="text-primary">{errors.password}</div>
            ) : null}
            <button
              type="submit"
              class="mt-4 px-4 py-3 text-base rounded-md border border-transparent text-white focus:outline-none bg-pink-500 text-blue-100 hover:bg-red-300 cursor-pointer inline-flex  w-full justify-center items-center font-medium "
            >
              Login
            </button>
            <div class="flex flex-col items-center mt-5">
              <p class="mt-1 text-xs font-light text-gray-500">
                Are you register?
                <NavLink to="/register" class="ml-1 font-medium text-primary">
                  Register now
                </NavLink>
              </p>
              <p class="mt-1 text-xs font-light text-gray-500">
                Are you come back Home Page?
                <NavLink to="/" class="ml-1 font-medium text-primary">
                  Yes
                </NavLink>
              </p>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
