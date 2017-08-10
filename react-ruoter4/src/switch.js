import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import ReactDOM from 'react-dom';

const AmbiguousExample = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/company" component={Company}/>
        <Route path="/:user" component={User}/>
      </Switch>
    </div>
  </Router>
)

const Home = () => (
  <ul>
    <li><Link to="/about">About Us (static)</Link></li>
    <li><Link to="/company">Company (static)</Link></li>
    <li><Link to="/kim">Kim (dynamic)</Link></li>
    <li><Link to="/chris">Chris (dynamic)</Link></li>
  </ul>
);

const About = () => <h2>About</h2>
const Company = () => <h2>Company</h2>
const User = ({ match }) => (
  <div>
    <h2>User: {match.params.user}</h2>
  </div>
)

/*const IMAGES = [
  { id: 0, title: '深兰花紫', color: 'DarkOrchid' },
  { id: 1, title: '石灰绿', color: 'LimeGreen' },
  { id: 2, title: '番茄色', color: 'Tomato' },
  { id: 3, title: '#七八九', color: '#789' },
  { id: 4, title: '赤红色', color: 'Crimson' }
];

const Modal = () => (
  <Router>
    <div>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/gallery' component={Gallery} />
      </Switch>
    </div>
  </Router>
);

const Home = () => (
    <div>
        <Link to='/gallery'>访问 Galary</Link>
        <h2>精选图片</h2>
    </div>
);

const Gallery = () => (
    <div>
        {IMAGES.map((i, index) => (
            <div key={index}>
              <Thumbnail color={i.color} />
                <p>{i.title}</p>
            </div>
        ))}
    </div> 
);

const Thumbnail = ({color}) => (
    <div style={{width: 50, height: 50, background: color}}></div> 
);*/

ReactDOM.render(
    <AmbiguousExample />,
    document.getElementById('app')
);