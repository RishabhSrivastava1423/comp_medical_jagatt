import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import NavIcons from "./Components/NavIcons";
import TableContent from "./Components/TableContent";
import HeadingComponent from "./Components/HeadingComponent";
import ArticleCard from "./Components/ArticleCard";
import CollegeCard from "./Components/CollegeCard";

function App() {
  return (
    <div className="App">
      <div className="text-center">
        <div className="row" style={{'backgroundColor':'black', 'color':'white', 'fontSize':'12px'}}>
          <div className="col-sm-8"> <Navbar/> </div>
          <div className="col-sm-4"> <NavIcons/> </div>
        </div>
        
      </div>
      <div className="container" style={{'fontSize':'18px'}}>
      <div className="row">
          <div className="col">
            <TableContent/>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <HeadingComponent title='Articles'/>
          </div>
        </div>
      </div>
      <div className="text-start">
        <div className="row">
          <div className="col">
          <button type="button" class="btn btn-primary btn-lg m-2 p-2">Latest Blog</button>
<button type="button" class="btn btn-outline-secondary btn-lg m-2 p-2">Latest News</button>
          </div>
        </div>
      </div>
      <div className="text-start mt-5">
        <div className="row mx-2 my-3">
          <div className="col-md-3 "> <ArticleCard/> </div>
          <div className="col-md-3"> <ArticleCard/> </div>
          <div className="col-md-3"> <ArticleCard/> </div>
          <div className="col-md-3"> <ArticleCard/> </div>
        </div>
        <div className="row mx-2 my-3">
          <div className="col-md-3"> <ArticleCard/> </div>
          <div className="col-md-3"> <ArticleCard/> </div>
          <div className="col-md-3"> <ArticleCard/> </div>
          <div className="col-md-3"> <ArticleCard/> </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <HeadingComponent title='College Title'/>
          </div>
        </div>
      </div>
      <div className="text-start mt-5">
        <div className="row mx-2 my-3">
          <div className="col-md-3 "> <CollegeCard/> </div>
          <div className="col-md-3">  <CollegeCard/></div>
          <div className="col-md-3">  <CollegeCard/></div>
          <div className="col-md-3">  <CollegeCard/></div>
        </div>
        <div className="row mx-2 my-3">
          <div className="col-md-3"> <CollegeCard/></div>
          <div className="col-md-3"> <CollegeCard/></div>
          <div className="col-md-3"> <CollegeCard/></div>
          <div className="col-md-3"> <CollegeCard/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
