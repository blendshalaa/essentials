
import './App.css'
import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import img1 from './images/alexa.png'
import img2 from './images/cortana.png'
import img3 from './images/siri.png'


function App() {
 

  return (
    <>
    <div>
      <h1>Personal Assistants</h1>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
            <ProfileCard title="Alexa" handle="Alexa99" image={img1}/>
            </div>
            <div className='column is-4'>
            <ProfileCard title='Cortana' handle="Cortana99" image={img2}/>
              </div>
              <div className='column is-4'>
              <ProfileCard title='Siri' handle="Siri99" image={img3}/>
              </div>
          </div>
        </section>
      </div>
      
     
      
    </div>
     
    </>
  )
}

export default App
