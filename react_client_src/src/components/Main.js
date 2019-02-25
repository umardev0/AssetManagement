import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Models from './Models';
import ModelDetails from './ModelDetails';
import AddModel from './AddModel';
import EditModel from './EditModel';
import Shelves from './Shelves';
import ShelfDetails from './ShelfDetails';
import AddShelf from './AddShelf';
import EditShelf from './EditShelf';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Models} />
      <Route exact path='/models' component={Models} />
      <Route exact path='/models/add' component={AddModel} />
      <Route exact path='/models/edit/:id' component={EditModel} />
      <Route exact path='/models/:id' component={ModelDetails} />
      <Route exact path='/shelves' component={Shelves} />
      <Route exact path='/shelves/add' component={AddShelf} />
      <Route exact path='/shelves/edit/:id' component={EditShelf} />
      <Route exact path='/shelves/:id' component={ShelfDetails} />
      <Route exact path='/about' component={About} />
    </Switch>
  </main>
)

export default Main;