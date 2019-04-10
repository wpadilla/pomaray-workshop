import * as React from 'react';

export default class Home extends React.Component {
  state = {
    sidenavIsOpen: false
  };

  render() {
    return (
      <>
        <div class="card">
          <div class="card-content">
            <p><h5>Alguien dijo una vez</h5> <i>"El que hace lo que debe sabe lo que quiere."</i></p>
          </div>
          <div class="card-tabs">
            <ul class="tabs tabs-fixed-width">
              <li class="tab"><a class="active btn light red lighten-5" href="#test4">Quiero <i className="material-icons right">arrow_forward</i></a></li>
              <li class="tab"><a  class="btn light red lighten-5" href="#test5">Decirte <i className="material-icons right">arrow_forward</i></a></li>
              <li class="tab"><a class="btn light red lighten-5" href="#test6">Algo <i className="material-icons right">arrow_forward</i></a></li>
            </ul>
          </div>
          <div class="card-content grey lighten-4">
            <div id="test4"><h3>Oye!</h3></div>
            <div id="test5"><h2>Cristo</h2></div>
            <div id="test6"><h1>Te Ama</h1></div>
          </div>
        </div>
      </>
    )
  }
}