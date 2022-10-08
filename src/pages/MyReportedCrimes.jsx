
import React, {useEffect, useState} from 'react'

import { Box } from '@mui/material'
import axios from 'axios'

import Header from '../components/Header'
import ReportedCrime from '../components/ReportedCrime'

const BASE_URL = "http://localhost:8000/api/v1";

const MyReportedCrimes = () => {

  const token = localStorage.getItem("token")

  const [crimeReports, setCrimeReports] = useState(null)

  useEffect(()=>{
    loadCrimeReports()
  }, [])

  const loadCrimeReports = async ()=> {
    try {
      const response = await axios({
        method: "get",
        url: BASE_URL + "/crime-report/my-report",
        headers: { "content-type": "application/json",
          "Authorization": "Bearer "+token },
      });
      
      if(response.data){
        console.log("Response status", response.data);
      console.log("Crime", crimeReports)
        setCrimeReports(response.data)
      }
      

      // setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      // setError(true);
      // setTimeout(() => setError(false), 5000);
      console.log(err)
    }
  };

  return (

    <div>
      <Header/>
      <Box display="flex" sx={{marginTop: 12, marginLeft: 10, marginRight: 10}}>

        <Box>

        </Box>
        {crimeReports && <Box>
          { crimeReports.map((report)=> <ReportedCrime key={report._id} crimeReport={report}/>)  }
        </Box>}

      </Box>
    </div>
  )
}

export default MyReportedCrimes