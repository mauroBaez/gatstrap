import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Icon from 'components/Icon'
import ContactForm from 'components/ContactForm'

class Inicio extends React.Component {
  render() {
    const { location, data } = this.props
    const work1 = get(data, 'work1.childImageSharp.sizes')
    const work2 = get(data, 'work2.childImageSharp.sizes')
    const back1 = get(data, 'back1.childImageSharp.sizes')
    const back2 = get(data, 'back2.childImageSharp.sizes')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Inicio" />
        
        <div>
          
          <div className="jumbotron mb-0">
            <div className="row">
              <div className="col-md-6 ">
                  <ContactForm />
              </div>
              <div className="col-md-6 headline">
                <h1 itemprop="name" className="display-4">Mudanzas AVC</h1>
                <h2 itemprop="description">Somos una Empresa de Transportes especializada en Mudanzas, Desalojos Judiciales y Guardamuebles</h2>
              </div>
            </div>
            
          </div>
          <div className="linea mt-4 mb-4">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                      <p className="lead mb-0">
                        Háganos depositarios de su confianza, será un placer atenderle
                      </p>
                    </div>
                    <div className="col-sm-4">
                        <div className="btn-wrapper">
                            <a className="btn btn-primary btn-block" href="contactos.php">Contáctenos</a>
                        </div>
                    </div>
                </div>
        
            </div>
          </div>
          <section className="bg-primary text-white text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">Nuestros Servicios de Transporte y Mudanzas</h2>
                  <hr className="border-white" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-lg-4 col-12">
                  <h2 className="section-heading">Mudanzas</h2>
                  <Icon title="HTML" name="html5" />
                  <div className="btn-wrapper">
                      <a className="btn btn-secondary btn-block" href="contactos.php">Contáctenos</a>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <h2 className="section-heading">Guardamuebles</h2>
                  <Icon title="HTML" name="html5" />
                  <div className="btn-wrapper">
                      <a className="btn btn-secondary btn-block" href="contactos.php">Contáctenos</a>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <h2 className="section-heading">Embalaje</h2>
                  <Icon title="HTML" name="html5" />
                  <div className="btn-wrapper">
                      <a className="btn btn-secondary btn-block" href="contactos.php">Contáctenos</a>
                  </div>
                </div>
                
              </div>
            </div>
          </section>

          <section id="features" className="text-center jumboimage">
            <Img sizes={back1} className="cover-image" />
            <div className="container">
              <div className="row cover-over">
                <div className="col-md-12 text-left">
                  
                </div>
              </div>
            </div>
          </section>

          <section
            className="bg-primary text-white text-center color-inverse"
            id="concept"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">WORKS</h2>
                  <hr className="border-white" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 slide-left" data-emergence="hidden">
                  <Img sizes={work1} />
                  <p>Yomu</p>
                </div>
                <div className="col-md-6 slide-right" data-emergence="hidden">
                  <Img sizes={work2} />
                  <p>Detector</p>
                </div>
              </div>
            </div>
          </section>

          <section id="repos">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Repositories</h2>
                  <p>
                    リポジトリは
                    <a href="https://github.com/jaxx2104/">こちら</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="features" className="jumboimage">
            <Img sizes={back2} className="cover-image" />
            <div className="container">
              <div className="row cover-over">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Degree Works</h2>
                  <p>
                    過去の制作は
                    <a className="text-white" href="https://old.jaxx2104.info/">
                      こちら
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Inicio

export const query = graphql`
  query InicioPageQuery {
    
    work1: file(name: { eq: "work1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work2: file(name: { eq: "work2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work3: file(name: { eq: "work3" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back1: file(name: { eq: "back1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back2: file(name: { eq: "back2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`
