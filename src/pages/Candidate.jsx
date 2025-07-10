import React from 'react'
import { Head } from '../components/Candidate/Head'
import { Mid } from '../components/Candidate/Mid'

import Footer from '../components/Footer'
import "./Candidate.css"
import { CandidatesFeedback } from '../components/Candidate/CandidatesFeedback'


function Candidate() {
  return (
    <div className='div_of_Candidate'>
    <Head/>
    <Mid/>
    
   
    <CandidatesFeedback/>
    
    <Footer/>
    
    </div>
  )
}

export default Candidate
