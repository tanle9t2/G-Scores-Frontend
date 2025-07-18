
import BarChartOne from './features/dashboard/BarChartOne'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Applayout from './ui/Applayout'
import Home from './pages/Home';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import { ToastContainer } from 'react-toastify';
import TopStudentPage from './pages/TopStudentPage';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    },
  },
})
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Applayout />
            }
          >
            <Route index element={<Home />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/top' element={< TopStudentPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </QueryClientProvider>
  )
}

export default App

