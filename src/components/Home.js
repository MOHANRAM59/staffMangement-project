import { Link } from "react-router-dom";

export default function Home(){
    return (
      <div class="kid">
    <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
       
      </div>
      <div class="col-md-6">
      <div class="jumbotron">
      <photo src="area-removebg-preview.png"></photo>
  </div>
  <h1>Welcome to our Project!</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <button  class="btn btn-light" ><Link to="/Login">Get Started</Link></button>
</div>
      </div>
    </div>
  </div>
  

  )
}