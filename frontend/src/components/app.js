import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import BulletinBoard from './bulletin_board/bulletin_board'
import QuestionShowContainer from './question/question_show_container'
import ResolvedShowContainer from './resolved/resolved_show_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileFormContainer from './profile/profile_container'



const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileFormContainer} />
      <ProtectedRoute exact path="/bulletin" component={BulletinBoard} />
      <ProtectedRoute exact path="/question/:questionId" component={QuestionShowContainer} />
      <ProtectedRoute exact path="/resolved/:resolvedId" component={ResolvedShowContainer} />



    </Switch>
  </div>
);

export default App;