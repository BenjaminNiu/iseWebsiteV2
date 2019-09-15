import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
//material-ui stuff
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
//pages for react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MC18 from './pages/MC18'
import CareerTalk from './pages/CareerTalk'
import CIP from './pages/CIP'
import Contact from './pages/Contact'
import ISEDay from './pages/ISEDay'
import NightCycling from './pages/NightCycling'
import ISEFOC from './pages/ISEFOC'
import NUSISEBACC from './pages/NUSISEBACC'
import Shop from './pages/Shop'
import Sponsorship from './pages/Sponsorship'
import Welfare from './pages/Welfare'

const store = createStore(rootReducer)


/*
ISELogoColours:{
    red:'#f54420',
    grey:'#464646',
    white:'#FFFFFF'
  },
*/

const theme = createMuiTheme({
  
  palette:{
    primary:{
      main:"#FFFFFF",
      //main:'#464646',
    },
    secondary:{
      main:"#f54420"
    },
    text:{
      primary:"#464646"
    }
  }
});
//TODO: map paths to components so that we can fully centralise this thing into pageLinks
render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            {/*add new route when adding new pages*/}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/18mc" component={MC18} />
            <Route path="/careertalk" component={CareerTalk} />
            <Route path="/cip" component={CIP} />
            <Route path="/contact" component={Contact} />
            <Route path="/iseday" component={ISEDay} />
            <Route path="/isefoc" component={ISEFOC} />
            <Route path="/isenightcycling" component={NightCycling} />
            <Route path="/nusisebacc" component={NUSISEBACC} />
            <Route path="/shop" component={Shop} />
            <Route path="/sponsorship" component={Sponsorship} />
            <Route path="/welfare" component={Welfare} />
          </Switch>
        </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

/*
<Route path="/about" component={About} />
*/