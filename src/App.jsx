import './App.css'
import resourcesList from './components/resourcesList';
import Cards from './components/Cards';
import bees from './assets/bees.svg';
import combs from './assets/combs.svg';



function App() {
  
  const resources = resourcesList.map(resources => {
    return(
      <Cards 
        key={resources.id}
        resources={resources}
      />
    )
  })

  return (
    <>
      <h1 className='title my-8 md:my-16 text-3xl sm:text-4xl md:text-5xl font-bold text-center playwrite-de-grund-font'>Web Dev Hive</h1>
      
      <img src={bees} alt='bees' className='w-1/2 md:w-1/3 mx-auto'/>
      <img src={combs} alt='' className='w-full -z-10 absolute top-0 left-0'/>
      
      <section className='content-center'>
        
        <h2 className='my-10 text-2xl md:text-3xl text-center playwrite-de-grund-font'>Resources for Learning Web Development</h2>
        
        <div className='px-4' >

          <div class='flex flex-wrap items-center justify-center'>
        
            {resources}

          </div>
        </div>

      </section>
      <footer className='mt-8 py-4 text-center' >
        <p>Web Dev Hive ©️2024</p>
        <p>Nereida Rondon</p>
         </footer>
      
      
    </>
  )
}

export default App
