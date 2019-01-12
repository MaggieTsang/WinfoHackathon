import React from "react";


export default class Homepage extends React.Component {   
    render() {
        return (
            <div>
                <header className="jumbotron jumbotron-fluid bg-primary text-white">
                    <div className="container">
                        <h1>The Ever Thankful Dropouts</h1>
                    </div>
                </header>
                <main>
                    <div className="container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                    <div className="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>

                      </div>
                    </div>
                </main>
            </div>
        );
    }
}