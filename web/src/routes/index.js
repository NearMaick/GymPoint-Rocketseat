import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import StudentIndex from '~/pages/Student/Index';
import StudentCreate from '~/pages/Student/Create';
import StudentUpdate from '~/pages/Student/Update';

import PlansIndex from '~/pages/Plans/Index';
import PlansCreate from '~/pages/Plans/Create';
import PlansUpdate from '~/pages/Plans/Update';

import RegistrationIndex from '~/pages/Registration/Index';
import RegistrationCreate from '~/pages/Registration/Create';
import RegistrationUpdate from '~/pages/Registration/Update';

import HelpOrderIndex from '~/pages/HelpOrder/Index';
import HelpOrderAnswer from '~/pages/HelpOrder/Answer';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/student/index" component={StudentIndex} isPrivate />
      <Route path="/student/create" component={StudentCreate} isPrivate />
      <Route path="/student/update" component={StudentUpdate} isPrivate />

      <Route path="/plans/index" component={PlansIndex} isPrivate />
      <Route path="/plans/create" component={PlansCreate} isPrivate />
      <Route path="/plans/update/" component={PlansUpdate} isPrivate />

      <Route
        path="/registration/index"
        component={RegistrationIndex}
        isPrivate
      />
      <Route
        path="/registration/create"
        component={RegistrationCreate}
        isPrivate
      />
      <Route
        path="/registration/update/:id"
        component={RegistrationUpdate}
        isPrivate
      />

      <Route path="/help-order/index" component={HelpOrderIndex} isPrivate />
      <Route path="/help-order/answer" component={HelpOrderAnswer} isPrivate />
    </Switch>
  );
}
