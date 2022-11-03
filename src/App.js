// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NavIcons from "./Components/NavIcons";
import TableContent from "./Components/TableContent";
import HeadingComponent from "./Components/HeadingComponent";
import ArticleCard from "./Components/ArticleCard";
import CollegeCard from "./Components/CollegeCard";
import HeadingContent from './Components/HeadingContent';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div id="top-header" className="bg_secondary_mj mb-4">
      <div className="container-mj container-fluid pt-1 pb-1">
        <div className="row" style={{'alignItems':'center'}}>
          <div className="col-md-6"> <Navbar/> </div>
          <div className="col-md-6"> <NavIcons/> </div>
        </div>
        
      </div>
      </div>
      
      <div className="container">
      <div className="row">
          <div className="col-12">
            <TableContent/>
          </div>
        </div>
      </div>


      <div className='container'>
        <HeadingContent/>
      </div>
      <hr/>

      <section id="article-section">
      <div className="container">
        <div className="row">
          <div className="col-12 title-mj">
            <HeadingComponent title='Articles'/>
          </div>
        </div>
      </div>
      <div className="container-fluid container-mj">
        <div className="row">
          <div className="col-12 mb-3">
          <button type="button" className="btn-mj btn_primary_large mr-2">Latest Blog</button>
          <button type="button" className="btn-mj btn_secondary_large">Latest News</button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2 "> <ArticleCard/> </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"> <ArticleCard/> </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"> <ArticleCard/> </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"> <ArticleCard/> </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"> <ArticleCard/> </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"> <ArticleCard/> </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"> <ArticleCard/> </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"> <ArticleCard/> </div>
        </div>
      </div>
      </section>

      <hr/>

      <section id="college-list">
      <div className="container">
        <div className="row">
          <div className="col-12 title-mj">
            <HeadingComponent title='College Title'/>
          </div>
        </div>
      </div>
      <div className="container-fluid container-mj">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"> <CollegeCard/> </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">  <CollegeCard/></div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">  <CollegeCard/></div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">  <CollegeCard/></div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"> <CollegeCard/></div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"> <CollegeCard/></div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"> <CollegeCard/></div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"> <CollegeCard/></div>
        </div>
      </div>
      </section>
    </div>
    </BrowserRouter>
  );
}

export default App;
