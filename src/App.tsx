import { Route, Routes } from "react-router-dom";
import './App.css'

import Navigation from './routes/navigation.tsx'
import Report from './routes/report.tsx'

function App() 
{
  type paragraph = {
    text: string, 
    image?: string, 
    alt?: string
  }
  type report = paragraph[];

  const notFoundWorkTermTitle:string = "Co-op position not secured yet"
  const notFoundWorkTermReport:report = [{text = ""}];
  const incompleteWorkTermReport:report = [{text = "This co-op is still ongoing. The work term will be posted once its completed"}];

  const workTerm1:report = [{text="This is a test paragraph"}];


  return (
    <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route path="workterm1" element={<WorkTerm title="STEAM Instructor at The STEAM Project" content={workTerm1}/>}/>
          <Route path="workterm2" element={<WorkTerm title="Business Intelligence Internship at The Co-operators" content={incompleteWorkTermReport}/>}/>
          <Route path="workterm3" element={<WorkTerm title={notFoundWorkTermTitle} content={notFoundWorkTermReport}/>}/>
          <Route path="workterm4" element={<WorkTerm/ title={notFoundWorkTermTitle} content={notFoundWorkTermReport}>}/>
          <Route path="workterm5" element={<WorkTerm title={notFoundWorkTermTitle} content={notFoundWorkTermReport}/>}/>
        </Route>
    </Routes>
  )
}

export default App
