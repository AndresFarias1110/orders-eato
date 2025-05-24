import { Formik } from "formik";
import { useAppDispatch } from "../../hooks/hooks";
import { postAuth } from "../../store/slices/auth/authThunks";
import type { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
            <div className="bg-dark text-light p-4 p-md-5 rounded shadow-sm">
              <div className="row">
                <div className="col-12">
                  <div className="mb-5">
                    <h3>Iniciar sesión</h3>
                  </div>
                </div>
              </div>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={async (values, { setSubmitting }) => {
                  await dispatch(
                    postAuth({ username: values.email, password: values.password })
                  );
                  setSubmitting(false);
                  navigate('/');
                }}
              >
                {({ values, isSubmitting, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3 gy-md-4 overflow-hidden text-danger">
                      <div className="col-12">
                        <label className="form-label text-danger">
                          Correo <span>*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          value={values.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">
                          Contraseña <span>*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className="btn btn-lg btn-primary"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            Iniciar sesión
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
