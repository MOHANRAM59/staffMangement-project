import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div class="kid text-center">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6"></div>
          <div class="col-md-6">
            <div class="jumbotron">
              <photo src="area-removebg-preview.png"></photo>
            </div>
            <h1 class="text-center">Welcome to our Project!</h1>
            <p></p>
            <div className="my-3">
              <button class="btn btn-light">
                <Link to="/Login">Login</Link>
              </button>
            </div>
            <div className="mb-3">
              <button class="btn btn-light">
                <Link to="/Signup">Signup</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
