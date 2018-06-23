import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

function AnimationExample(){
  return (
    <Router>
      <Route
        render={({location})=>{console.log(location.key
        );return (
          //Self rerirec
          <div style={styles.fill}>
            {/*----- Self redirect route -----*/}
            <Route
              exact
              path="/"
              component={()=>(<Redirect to="/hsl/10/90/50"/>)}
            />

            {/*----- Links Section -----*/}
            <ul style={styles.nav}>
              <NavLink to="/hsl/10/90/50">Red</NavLink>
              <NavLink to="/hsl/120/100/40">Green</NavLink>
              <NavLink to="/rgb/33/150/243">Blue</NavLink>
              <NavLink to="/rgb/240/98/146">Pink</NavLink>

            </ul>
            {/*----- Routes Section and Animation -----*/}
            <div style={styles.content}>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                  <Switch location={location}>
                    <Route exact path="/hsl/:h/:s/:l" component={HSL}/>
                    <Route exact path="/rgb/:r/:g/:b" component={RGB}/>
                    <Route component={NotFoundComponent}/>
                  </Switch>
                </CSSTransition>

              </TransitionGroup>
            </div>

          </div>

        );}}
      />
    </Router>
  );
}

// function DummyComponent(){
//   return<h3>h</h3>;
// }
function NotFoundComponent(){
  return<h3>Not Found</h3>;
}

function HSL({ match: { params } }){
  return(
    <div
      style={{
        ...styles.fill,
        ...styles.hsl,
        background: `hsl(${params.h}, ${params.s}%, ${params.l}%`
      }}
    >
      hsl({params.h}, {params.s}%, {params.l}%)
    </div>
  );
}

function RGB({ match: { params } }){
  return(
    <div
      style={{
        ...styles.fill,
        ...styles.hsl,
        background: `rgb(${params.r}, ${params.g}, ${params.b}`
      }}
    >
      rgb({params.r}, {params.g}, {params.b})
    </div>
  );
}

function NavLink(props){
  return(
    <li style={styles.navItem}>
      <Link {...props} style={{ color: "inherit" }} />
    </li>
  );
}

const styles = {};

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
};

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
};

styles.hsl = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
};

styles.rgb = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
};


export default AnimationExample;
