import React,{useState} from 'react';
import FetchJobs from './FetchJobs'
import {Container} from 'react-bootstrap'
import Job from './Job'
import JobsPagination from './jobPagination'
import SearchForm from './SearchForm'
function App() {
  const [params,setParams]=useState({})
  const [page,setPage]=useState(1)
  const {jobs,loading,error,hasNextPage}=FetchJobs(params,page)
  function handleParamChange(e){
    const param=e.target.name
    const value=e.target.value
    setPage(1)
    setParams(prevParams=>{return {...prevParams,[param]:value}})
  }
  return (
    <Container className="my-4">
      <h1 className="mb-4">Triggered Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange}/>
      <JobsPagination page={page} setPage={setPage} hasNextPage={true}/>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing the page.</h1>}
      {jobs.map(job=>{
        return <Job key={job.id} job={job}/>
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}
      />
    </Container>
  );
}

export default App;
