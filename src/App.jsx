
import { useState } from 'react';
import './App.css'
import Tours from './components/Tours';

const toursData =
  [

    {
      id: 1,
      tourImgLink: "https://hblimg.mmtcdn.com/content/hubble/img/Narkanda/mmt/activities/t_ufs/m_activities_narkanda_jalori_pass_l_332_721.jpg",
      nameOfTour: "Kashmir",
      tourDesc: "Jammu & Kashmir, a piece of heaven on earth, is the 19th largest state in India and it is located mostly all in the Himalayan mountains. It is also the only state in India with a Muslim-majority population. J&K consists of three main regions – Jammu, the Kashmir Valley and Ladakh.",
      tourPrice:"1,500",

    },
    {
      id: 2,
      tourImgLink: "https://hblimg.mmtcdn.com/content/hubble/img/Narkanda/mmt/activities/t_ufs/m_activities_narkanda_tani_jubbar_lake_l_379_574.jpg",

      nameOfTour: "Kerala",
      tourDesc: "Kerala is a popular destination for both domestic as well as foreign tourists. Kerala is well known for its beaches, backwaters in Alappuzha and Kollam, mountain ranges and wildlife sanctuaries.",
      tourPrice:"2,000",

    },
    {
      id: 3,
      tourImgLink: "https://hblimg.mmtcdn.com/content/hubble/img/Narkanda/mmt/activities/t_ufs/m_activities_narkanda_shimla_l_329_493.jpg",
      nameOfTour: "shimla",
      tourDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse similique reiciendis aliquid qui earum consectetur optio quas in inventore, perferendis quos doloremque rem nemo tenetur accusantium eveniet repudiandae. Provident, non!",
      tourPrice:"3,000",
    }
  ];

function App() {

  const [ownToursData, setOwnToursData] = useState(toursData);

  function removeTour(currId) {

    const filteredToursData = ownToursData.filter((tour) => tour.id !== currId);
    setOwnToursData(filteredToursData);
  }
  return (
    <div className='demo'>
    <h1 className='head'>Our Tours</h1>
      
      <div className='app'>
      

      {
        ownToursData.map((tour) => {

          return <Tours tour={tour} removeTour={removeTour} />




        })
      }

    </div>


    </div>
  

  )
}



export default App
