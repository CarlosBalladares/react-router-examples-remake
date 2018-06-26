import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


class ModalSwitch extends React.Component{
  //Inital location where this was rendered
  previousLocation = this.props.location;


  componentWillUpdate(nextProps){
    const {location} = this.props;
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }
  render(){
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    // console.log("current"+(this.props.location.pathname));
    // console.log("previous"+(this.previousLocation.pathname));
    //
    // console.log(location);

    // location takes you to a specific path
    console.log(isModal);
    return (
      <div>
      <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home}/>
          <Route exact path="/gallery" component={Gallery}/>

          <Route path="/img/:id" component={ImageView}/>
        </Switch>

        {isModal? <Route exact path="/img/:id" component={Modal}/>:null}

        <button onClick={()=>console.log(this.previousLocation.pathname)}>
          {"showprev"}
        </button>

        <button onClick={()=>console.log(location.pathname)}>
          showcurr
        </button>
      </div>
    );
  }
}

function ImageView({match}){
  const img_no =parseInt(match.params.id ,10);
  //const img_no= props.no;
  //console.log(img_no)
  const image = IMAGES[img_no];
  if(!image){
    return <div>Image not Found</div>
  }

  return(
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color}/>
    </div>
  );
}

function Home(){
  return(
    <div>
      <Link to="/gallery">Visit the gallery</Link>
      <h2>Featured Images</h2>
      <ul>
        <li>
          <Link to="/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/img/4">Crimson</Link>
        </li>

        <li>
          <Link
            to={{
                pathname:"/img/4",
                state:{modal:true}
            }}
          >modalLink Crimson</Link>
        </li>

      </ul>
    </div>
  );
}

function Image({ color }){
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        background: color
      }}
    />
  );
}

function Gallery(){
  return (
    <div>
      {IMAGES.map((image, index)=>(
        <Link
          key={image.id}
          to={{
              pathname: `/img/${index}`,
              state:{modal:true}
          }}
        >
          <Thumbnail color={image.color}/>
          <p>{image.title}</p>
        </Link>
      ))}
    </div>
  );
}

function Thumbnail({color}){
  return(
    <div
      style={{
        width:50,
        height:50,
        background:color
      }}
    />
  );
}

function ModalGalleryExample(){
  return (
    <Router>
      <Route component={ModalSwitch}/>
    </Router>
  );
}

function Modal({match, history}){
  const back =(e)=>{
    e.stopPropagation(); // Not sure about this
    history.goBack();
  }
  //console.log(history);
  const img_no =parseInt(match.params.id ,10);
  //console.log(img_no)
  const image = IMAGES[img_no];
  if(!image){
    return null;
  }
  return(
    <div
      style={styles.modal_bg}
      onClick={back}
    >
        <div
          className="modal"
          style={styles.modal_content}
        >
          <h1>{image.title}</h1>
          <Image color={image.color}/>
          <button type="button" onClick={back}>
            close
          </button>
          <Link to={{
              pathname:"/gallery",
              state:{modal:false}
          }}>g</Link>
        </div>
    </div>
  );
}

const IMAGES = [
  { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
  { id: 1, title: "Lime Green", color: "LimeGreen" },
  { id: 2, title: "Tomato", color: "Tomato" },
  { id: 3, title: "Seven Ate Nine", color: "#789" },
  { id: 4, title: "Crimson", color: "Crimson" }
];

const styles={
  modal_bg:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.15)'
  },
  modal_content:{
    position: 'absolute',
    background: '#fff',
    top: 25,
    left: '10%',
    right: '10%',
    padding: 15,
    border: '2px solid #444'
  }
}



export default ModalGalleryExample;
