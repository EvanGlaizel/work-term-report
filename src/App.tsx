import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import './App.css'

import Navigation from './routes/navigation.tsx'
import Report from './routes/report.tsx'

import type { ReportType } from './types/report.tsx'

import autonomousMoonRover from './assets/autonomousMoonRover.png';

function App() 
{
  

  const notFoundWorkTermTitle:string = "Co-op position not secured yet"
  const incompleteWorkTermReport:ReportType = [{text: "This co-op is still ongoing. The report will be posted once the work term is completed"}];

  const workTerm1:ReportType = 
  [
    {text: "From May 27th to August 22nd, 2025, I worked as a STEAM Instructor at The STEAM Project for my first co-op work term. I was responsible for creating lesson plans during June and then leading those lessons in July and August to a group of roughly fifteen 7-year-olds. Throughout this report, I will walk through my experiences, takeaways and highlight why both camp and teaching experience are so valuable to developing crucial workplace skills."},
    {text: "The STEAM Project is a Science, Engineering, Engineering, Art, and Math focused summer camp that has been running in Richmond Hill for the past 10 years. The STEAM Project stands out from other camps due to its emphasis on learning during each activity. Regarding technology, The STEAM Project uses different robots called mbots, and micro:bits to teach campers how to program with block coding. The STEAM Project also uses 3D Printing and Laser Cutting to manufacture many interesting and unique projects.  As an instructor at The STEAM Project, I reported directly to the Program Manager who is responsible for managing all instructors, and projects that are created. The Program Manager then reports to the Camp Director who oversees one of five sites. Finally, the Camp Director reports to Jay, the CEO of The STEAM Project."},
    {text: "Going into this role I had three major goals. My first goal was to develop a bond which each camper that I taught. This was so that I could tailor each lesson and my teaching style towards them to ensure they’re enjoying learning. I made sure to reach this goal by first speaking to each camper individually to learn their names and something about them. From there I continued to bond with them throughout the session. For example, during one session I noticed many of the campers were very engaged with the lesson portion of the activity. This led me to ask them more open-ended questions during the lesson portion to allow them to guess what certain concepts mean before I introduce them.  This resulted in the campers being excited to learn, and not afraid to ask for help when needed. Through this, I also developed my communication skills and learnt how to adapt to working with people with different needs. "},
    {image: autonomousMoonRover, alt: "Block coding block that follows the logic of 'forever, if there's an obstacle ahead, light up red and turn left. If there's an obstacles ahead light up red and turn right. Otherwise move forward", text: "My second goal was to design my own coding projects, as I wanted to learn how to apply my programming knowledge to communicate foundational concepts in an easy-to-understand way. I achieved this with two major projects. The first one was called Autonomous Moon Rover. This project utilized block coding and robots that had the capability to move and detect objects in front of it. One concept at a time, I taught campers about basic move commands, if statements, and loops. The result was a robot that is programmed to solve a maze by either going forward, left, or right based on if there is an obstacle in front of it. My second project was called Build a Tree. This project used block coding to control a robot with a light sensor, and an LED matrix. The project was an old project that was used in 2023 and consisted of a simple tree growing animation using the LEDs. I decided to use the light sensor to simulate a tree that doesn’t get enough light, while also teaching the campers more about programming control flow. If the light level is above a certain threshold, it will play the original tree-growing animation. If not, it will only play the first frame of the animation. After running these projects, the campers understood the programs they were building and had a firm grasp on fundamental coding principles."},
    {text: "My third goal was to take on a leadership role throughout the summer because I wanted to demonstrate initiative and take on new challenges. I did my best to take every opportunity I was given to take more responsibility. For example, at the beginning of each day, a camp-wide ten-minute activity called a flagpole is run. I volunteered to help plan and run many of the flagpoles including games, theme-day skits, and songs. I also always made sure to always have backup flagpoles to ensure that if we didn’t have one planned, we would still be able to run something interesting. I also made sure to participate for many of the optional camp activities such as water days, staff challenges, and even singing a site-wide cheer. As a result, I learnt the importance of taking the initiative at work so that I can both help my colleagues succeed and improve my own skills."},
    {text: "In June, I worked with a team of instructors, and my Program Manager to develop the activities for the summer. We helped each other create the projects and held group brainstorms to generate new ideas. This time taught me how to work in a team in a professional environment and support my colleagues. By the time camp started, and the campers started showing up we still had almost a quarter of projects left to plan. This led to us adapting our strategy to ensure all projects could be completed in time. Instead of spending time developing new projects, we put most of our efforts into modifying older projects. This removed the time taken for brainstorming and gave us a working project to start from. To complete each project, we would understand how it works, look at feedback from when it was previously run, and then implement the feedback to ensure the finished project is as good as it possibly can. This shift in strategy allowed us to complete all projects well before the deadline."},
    {text: "In July and August, I taught three unique hour-long lessons each day.  In-between each of the lessons we had some time to complete reflections and learn future lessons. We needed to use our time-management skills to ensure that we had learnt and internalized each lesson at a level that we could teach it. Doing this each day improved my ability to take in and learn new information quickly. We also needed to use our organizational skills to ensure that we had all the required materials for each project, and we knew where each material was. Teaching the lessons itself also improved my ability to explain complex topics in simple terms as we often taught lessons on topics such as atoms, molecules, and different engineering concepts. "},
    {text: "I would like to take this paragraph to acknowledge my direct supervisor and Program Manager, Brandon Cusato as well as the Camp Director Rachel Kaunismaa for supporting me while I was an instructor. Brandon always went out of his way to ensure I had everything I needed to succeed, assisted me and the other instructors in any way that he could, and always had a positive attitude, even when we were behind schedule on projects. Rachel made sure everything was running smoothly, was very accommodating of me, and always brought a positive energy to camp."},
    {text: "My time working as an Instructor at The STEAM Project taught me many valuable skills I will take with me throughout my career. I learnt how to effectively work as a team, adapt to changing situations, take initiative, communicate with others, manage my time, and explain complex concepts in simple terms."},
  ];


  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Navigation/>}>
            <Route index element={<Navigate to="workterm1" replace />} />
            <Route path="workterm1" element={<Report title="STEAM Instructor at The STEAM Project" content={workTerm1}/>}/>
            <Route path="workterm2" element={<Report title="Business Intelligence Internship at The Co-operators" content={incompleteWorkTermReport}/>}/>
            <Route path="workterm3" element={<Report title={notFoundWorkTermTitle} />}/>
            <Route path="workterm4" element={<Report title={notFoundWorkTermTitle} />}/>
            <Route path="workterm5" element={<Report title={notFoundWorkTermTitle} />}/>
          </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
