import { Provider } from 'react-redux'
import './App.css'
import FooterCard from './components/FooterCard'
import Header from './components/Header'
import MainBoard from './components/mainBoard'
import weatherStore from './Store/weatherSore'
function App() {

  return (
    <>
    <Provider store={weatherStore}>
    <div className='bg-[#1e1f23] min-h-screen overflow-x-hidden'>
      <Header/>
      <MainBoard/>
      <FooterCard/>
    </div>
    </Provider>
    </>
  )
}

export default App
