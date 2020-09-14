import React,{useState} from 'react';
import FetchJobs from './FetchJobs'
import {Container} from 'react-bootstrap'
import Job from './Job'
function App() {
  const [params,setParams]=useState({})
  const [page,setPage]=useState(1)
  const {jobs,loading,error}=FetchJobs()
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing the page.</h1>}
      {jobs.map(job=>{
        return <Job key={job.id} job={job}/>
      })}
    </Container>
  );
}

export default App;
