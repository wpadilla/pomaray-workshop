import * as React from 'react';

export default class Navbar extends React.Component{
  
    render() {
        return (
            <>
        <ul id="dropdown1" class="dropdown-content" >
            <li><a href="#!">Premium</a></li>
            <li><a href="#!"><i className="material-icons">perm_data_setting</i>Configuración</a></li>
            <li className="divider"></li>
            <li><a href="#!"><i className="material-icons">highlight_off</i>Cerrar sesión</a></li>

        </ul>
    <nav className="teal lighten-1" >       
        <div class="nav-wrapper" >
            <a href="#!"  className="brand-logo"> <h2 style={{marginTop: "0rem"}}>POMARAY</h2></a>
            <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">Horario</a></li>
            <li><a href="badges.html">Eventos</a></li>
            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1" style={{width:"200px"}}>Prof Juan<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
        </div>
    </nav>
    </>
        );
    }
}