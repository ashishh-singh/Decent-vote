import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Node } from './components/Node'
import Nodeapp from './components/Nodeapp'
import Navbar from "./components/Navbar" 
import Card from './components/Card'
import VerificationForm from './components/Createrverification'
import CreateVote from './components/CreateVote'
import Footer from './components/Footer'
import Homeabout from './components/Homeabout'
import Started from './components/Started'
import Result from './components/Result'
// import Typed from 'react-typed';

// import Text from "./components/Text"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   
    
        {/* <Typed
          strings={[
            "Decent-Vote",
            "Best-Platform",
            "Decentralized Fast And Secure",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        /> */}
    
    {/* <Nodeapp/> */}
  
    <Nodeapp/>
    <div className='px-20 my-5' >
      <Homeabout/>
    </div>
    <div className='grid grid-cols-3 gap-4 ml-5 mr-5'>
  <Card title={"College Election"}
  content={"DecentVote provides a secure and transparent platform for student council elections. It ensures fairness, trust among students and faculty by leveraging blockchain technology."} />
  <Card title={"School Election"} content={"DecentVote enhances campus elections by providing a fair and transparent platform. Blockchain technology ensures secure, verifiable voting, fostering trust among students and administration."}/>
  <Card title={"Polls"} content={"DecentVote simplifies opinion polling with a secure and transparent blockchain system. It ensures integrity in data collection, making results reliable and tamper-proof for informed decision-making."}/>
  <Card title={"Organization Election"}
  content={"DecentVote streamlines internal voting processes for organizations, offering a tamper-proof and auditable system. It enhances decision-making by ensuring every vote is securely recorded and verifiable."}/>
  <Card title={"State Election"} content={"DecentVote modernizes state elections with blockchain-based voting, delivering unmatched security and transparency. It eliminates fraud risks and guarantees accurate, immutable election outcomes."}/>
  
</div>

    <div className=' bg-emerald-500 my-5 w-auto h-[70vh]'>
      <Started/>
    </div>
    <div className='my-[100px]'>
      <Result/>
    </div>
    <div>
      <VerificationForm />
    </div>

    <div>
      <CreateVote/>
    </div>
 
      
    </>
  )
}

export default App
