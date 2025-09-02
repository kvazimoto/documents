import './styles/App.css'
import { Routes, Route } from "react-router";
import MainLayout from '../layers/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import StartWith from '../pages/StartWith/StartWith';
import OurProgramm from '../pages/OurProgramm/OurProgramm';
import ReviewsPage from '../pages/ReviewsPage/ReviewsPage';
import BlogPage from '../pages/BlogPage/BlogPage';
import NewsDetailPage from '../pages/NewsDetailPage/NewsDetailPage';
import Page404 from '../pages/Page404/Page404';
import ScrollToTop from '../shared/ScrollTop/ScrollTop';

function App() {
  return (
    <>
      <ScrollToTop /> 
      <Routes>
        <Route path='/' element={ <MainLayout /> }>
          <Route index element={ <HomePage /> } />
          <Route path='/start-with' element={ <StartWith /> } />
          <Route path='/our-programs' element={ <OurProgramm /> } />
          <Route path='/reviews' element={ <ReviewsPage /> } />
          <Route path='/blog' element={ <BlogPage /> } />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path='*' element={ <Page404 /> } />
        </Route> 
      </Routes>
    </>
  )
}

export default App
