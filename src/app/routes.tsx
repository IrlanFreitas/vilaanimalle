import { lazy, Suspense } from 'react'
import type { RouteObject } from 'react-router'
import RootLayout from '../layouts/RootLayout'

const Home = lazy(() => import('../pages/Home'))
const ServicosPage = lazy(() => import('../pages/ServicosPage'))
const SobrePage = lazy(() => import('../pages/SobrePage'))
const ContatoPage = lazy(() => import('../pages/ContatoPage'))
// const BlogPage = lazy(() => import('../pages/BlogPage'))
// const BlogPostPage = lazy(() => import('../pages/BlogPostPage'))

function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      color: 'var(--verde-acento)',
      fontFamily: 'var(--font-nunito)',
      fontSize: '18px',
    }}>
      Carregando...
    </div>
  )
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<PageLoader />}><Home /></Suspense>,
      },
      {
        path: 'servicos',
        element: <Suspense fallback={<PageLoader />}><ServicosPage /></Suspense>,
      },
      {
        path: 'produtos',
        element: <Suspense fallback={<PageLoader />}></Suspense>,
      },
      {
        path: 'sobre',
        element: <Suspense fallback={<PageLoader />}><SobrePage /></Suspense>,
      },
      {
        path: 'contato',
        element: <Suspense fallback={<PageLoader />}><ContatoPage /></Suspense>,
      },
      // {
      //   path: 'blog',
      //   element: <Suspense fallback={<PageLoader />}><BlogPage /></Suspense>,
      // },
      // {
      //   path: 'blog/:slug',
      //   element: <Suspense fallback={<PageLoader />}><BlogPostPage /></Suspense>,
      // },
    ],
  },
]
