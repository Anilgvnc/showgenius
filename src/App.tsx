import TopBar from './components/TopBar'
import './App.css'
import ModuleButton from './components/ModuleButton'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <TopBar />
      <div className='module-buttons'>
        <ModuleButton
          title="Watch with your friend"
          description="Suggestions for series or movies to watch with your friends"
          source="./public/multiple.jpg"
        />
        <ModuleButton
          title='By favorite content'
          description='Suggestions similar to your favorite movie or TV series'
          source="./public/single.jpg"
        />
        <ModuleButton
          title='By genres'
          description='Suggestions similar to your favorite genres of movies or TV series'
          source="./public/genre.jpg"
        />
      </div>
      <Footer />
    </div>
  )
}

export default App