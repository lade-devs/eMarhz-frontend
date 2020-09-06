import React from 'react';
import {Link} from "react-router-dom";
const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-light navbar-expand-md">
                <div className="container"><Link className="navbar-brand" to={'/'}>eMarhz</Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span
                        className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse"
                         id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation"><Link className="nav-link" to={'/'}>Home</Link></li>
                            <li className="nav-item" role="presentation"><Link className="nav-link" to={'/'}>Contact</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item" role="presentation"><Link className="nav-link" to={'/'}><i
                                className="material-icons">person</i></Link></li>
                            <li className="nav-item shopping-cart" role="presentation"><Link className="nav-link" to={'/'}><i
                                className="material-icons">shopping_cart</i><span>2</span></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;