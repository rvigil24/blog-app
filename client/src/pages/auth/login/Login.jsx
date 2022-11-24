import { Link } from 'react-router-dom';
import { Main } from '@layout';

import './login.css';

export const Login = () => {
  return (
    <Main>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="login-wrap p-4 p-md-5">
            <h3 className="text-center mb-4">Iniciar sesion</h3>
            <form className="login-form">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control rounded-left my-3"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group d-flex">
                <input
                  type="password"
                  className="form-control rounded-left"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-dark rounded submit px-5 mt-3 mb-2"
                >
                  Iniciar sesion
                </button>
                ¿No tienes cuenta? <Link to="/auth/register">Registrate aqui</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
};
