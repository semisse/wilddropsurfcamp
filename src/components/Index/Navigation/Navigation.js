import React from 'react'
import Link from 'gatsby-link'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import './Navigation.sass'

import Logo from '../../../img/logo.svg'

const Navigation = () => (
  <div>
    <Grid>
      <Row className="show-grid">
        <div className="col-9">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo Wild Drop" />
            </Link>
          </div>
        </div>
        <div className="col-1">
          <div id="burger">
            <span />
            <span />
            <span />
          </div>
        </div>
      </Row>
    </Grid>

    <div id="nav" className="overlay">
      <div id="close">
        <a href="javascript:void(0)" className="closebtn" />
      </div>
      <div className="grid-x">
        <div className="small-12 medium-12 large-9 cell navigation">
          <div className="overlay-content">
            <a data-scroll href="#quemsomos">
              Quem Somos
            </a>
            <a data-scroll href="#areasdenegocio">
              Áreas de Negócio
            </a>
            <a data-scroll href="#clientes">
              Clientes
            </a>
            <a data-scroll href="#contactos">
              Contactos
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Navigation
