import { Switch, Route } from 'react-router-dom';
import { Blog, NotFound, Post, Login, Register } from '@pages';
import { AuthRoute } from './AuthRoute';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Blog} />
      <AuthRoute exact path="/auth/login">
        <Login />
      </AuthRoute>
      <AuthRoute exact path="/auth/register">
        <Register />
      </AuthRoute>
      <Route exact path="/post/:postId" component={Post} />
      <Route path="/*" component={NotFound} />
      <Blog />
    </Switch>
  );
};
