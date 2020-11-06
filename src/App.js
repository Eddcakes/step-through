import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GuideList } from './components/GuideList';
import { Walkthrough } from './components/Walkthrough';
import data from './data.json';

export default function App() {
  return (
    <Router>
      <div className='p-6 flex justify-center'>
        <div className='w-full md:max-w-4xl'>
          <Switch>
            <Route path='/walkthrough/:id'>
              <Walkthrough />
            </Route>
            <Route path='/'>
              <GuideList data={data} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
