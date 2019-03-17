import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <footer class="container py-5">
  <div class="row">
    <div class="col-md-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
      <small class="d-block mb-3 text-muted">© 2017-2019</small>
    </div>
    <div class="col-md-9">
      <h5>Datos de Contacto</h5>
      <ul class="list-unstyled text-small">
        <li>Teléfono: 4942-7002/3880</li>
        <li>Fax: 4941-3166 </li>
        <li> Dirección: Moreno 2141 (1094) Capital Federal </li>
        <li>E-mail: admin@mudanzas-avc.com.ar</li>
      </ul>
    </div>
    
  </div>
</footer>
)

export default Footer
