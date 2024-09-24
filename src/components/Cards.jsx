export default function Cards(props) {

return(
        <>     
        <div class="sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 p-5 self-center">
          
          <div class="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-gray-800 hover:drop-shadow-xl">

            <img class="w-full h-44" src={props.resources.img} alt={props.resources.alt}/>

            <div class="px-6 py-4 h-72 grid content-stretch">
              
              <div class='h-40 text-white'>
                <h3 className='font-bold text-xl mb-6 playwrite-de-grund-font'>
                {props.resources.name} 
                </h3>

                <p class='text-white'>{props.resources.desc}</p>
              </div>
                
              <div>
              <a aria-current='page' href={props.resources.url}  target='_blank' rel='noreferrer'>
              
              <button className='py-2 px-8 mt-8 mb-4 mx-auto flex bg-yellow-200 hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white  border border-yellow-500 hover:border-transparent rounded'>
                  <p className='text-center playwrite-de-grund-font'>View</p>
              </button>  

              </a>
              </div>

            </div>

          </div>

        </div> 

        </>      
    );


}  