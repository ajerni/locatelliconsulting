import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Locatelli Consulting</h1>
                <p>Rock-solid accounting.</p>
                <h4>Fabio Locatelli, Teststrasse 10, 8000 Arni</h4>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Über uns</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Dienstleistungen</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Referenzen</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Kontakt</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
