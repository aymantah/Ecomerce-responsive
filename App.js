import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'
import { auth, db } from './config/Config'
import { AddProducts } from './comp/AddProducts';
import { AddWProducts } from './comp/AddWProducts';
import { AddAccProducts } from './comp/AddAccProducts';
import { ProductsContextProvider } from './global/ProductsContext';
import { SignUp } from './comp/SignUp';
import { LogIn } from './comp/LogIn';
import { Admin } from './comp/Admin';
import Import from './comp/Import';
import TopCategory from './comp/TopCategory';





export class App extends Component {

      state = {
        user: null,
    }

    componentDidMount() {

      // getting user info for navigation bar
      auth.onAuthStateChanged(user => {
          if (user) {
              db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                  this.setState({
                      user: snapshot.data().Name
                  })
              })
          }
          else {
              this.setState({
                  user: null
              })
          }
      })

    }

    render() {
      return (
        <ProductsContextProvider>
            <Router>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/addprd' component={AddProducts} />
                <Route path='/addwprd' component={AddWProducts} />
                <Route path='/category' component={TopCategory} />
                <Route path='/addaccprd' component={AddAccProducts} />
                <Route path='/signup' component={SignUp} />
                <Route path='/login' component={LogIn} />
                <Route path='/import' component={Import} />
                <Route path='/admin' component={() => <Admin user={this.state.user} />} />
              </Switch>
            </Router>
        </ProductsContextProvider>
        
      )
    }
}

export default App