import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Servicios from '@/pages/Servicios'
import ServicioDetalle from '@/pages/ServicioDetalle'
import Proyectos from '@/pages/Proyectos'
import ProyectoDetalle from '@/pages/ProyectoDetalle'
import Brochure from '@/pages/Brochure'
import Nosotros from '@/pages/Nosotros'
import Contacto from '@/pages/Contacto'
import CodigoEtica from '@/pages/CodigoEtica'

export const router = createBrowserRouter([
  {
    element: <Layout />, 
    children: [
      { path: '/', element: <Home /> },
      { path: '/servicios', element: <Servicios /> },
      { path: '/servicios/:slug', element: <ServicioDetalle /> },
      { path: '/proyectos', element: <Proyectos /> },
      { path: '/proyectos/:slug', element: <ProyectoDetalle /> },
      { path: '/brochure', element: <Brochure /> },
      { path: '/nosotros', element: <Nosotros /> },
      { path: '/contacto', element: <Contacto /> },
      { path: '/codigo-de-etica', element: <CodigoEtica /> },
    ],
  },
])
