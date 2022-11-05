import { Switch, Route } from 'react-router-dom';
import { Blog, NotFound, Post, Login } from '@pages';

export const BlogApp = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/post/:postId" component={Post} />
        <Route path="/*" component={NotFound} />
        <Blog />
      </Switch>
    </>
  );
};
