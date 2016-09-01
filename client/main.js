import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// import '../imports/startup/client';

import App from '../imports/ui/layouts/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
})