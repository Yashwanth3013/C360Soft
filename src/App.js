import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../src/pages/Home'
import Aboutc360page from './pages/Aboutc360page'
import Careerspage from './pages/Careerspage'
import Automobilepage from './pages/Industriespages/Automobilepage'
import Educationpage from './pages/Industriespages/Educationpage'
import Financepage from './pages/Industriespages/Financepage'
import Healthcarepage from './pages/Industriespages/Healthcarepage'
import Insurancepage from './pages/Industriespages/Insurancepage'
import Manufacturingpage from './pages/Industriespages/Manufacturingpage'
import Marketingpage from './pages/Industriespages/Marketingpage'
import Retailpage from './pages/Industriespages/Retailpage'
import SupplychainAnalyticspage from './pages/Industriespages/SupplychainAnalyticspage'
import Telecommunicationspage from './pages/Industriespages/Telecommunicationspage'
import Ariticialintelligencepage from './pages/Insightspages/Ariticialintelligencepage'
import Awspage from './pages/Insightspages/Awspage'
import Azurepage from './pages/Insightspages/Azurepage'
import Computervisionpage from './pages/Insightspages/Computervisionpage'
import Deeplearningpage from './pages/Insightspages/Deeplearningpage'
import Devopspage from './pages/Insightspages/Devopspage'
import Fullstackdevelopmentpage from './pages/Insightspages/Fullstackdevelopmentpage'
import MachineLearningpage from './pages/Insightspages/MachineLearningpage'
import Naturallanguageprocessingpage from './pages/Insightspages/Naturallanguageprocessingpage'
import Tableaupage from './pages/Insightspages/Tableaupage'
import Applicationservicespage from './pages/Servicespages/Applicationservicespage'
import Artificialintelligencepage1 from './pages/Servicespages/Artificialintelligencepage1'
import Cloudservicespage from './pages/Servicespages/Cloudservicespage'
import Devopspage1 from './pages/Servicespages/Devopspage1'
import Digitalanalyticspage from './pages/Servicespages/Digitalanalyticspage'
import Digitaltransformationpage from './pages/Servicespages/Digitaltransformationpage'
import Productdevelopmentpage from './pages/Servicespages/Productdevelopmentpage'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route  path='/Automobilepage'>
          <Automobilepage />
        </Route>

        <Route  path='/Educationpage'>
          <Educationpage />
        </Route>

        <Route  path='/Financepage'>
          <Financepage />
        </Route>

        <Route  path='/Healthcarepage'>
          <Healthcarepage />
        </Route>

        <Route  path='/Insurancepage'>
          <Insurancepage />
        </Route>
        <Route  path='/Manufacturingpage'>
          <Manufacturingpage />
        </Route>
        <Route  path='/Marketingpage'>
          <Marketingpage />
        </Route>
        <Route  path='/Retailpage'>
          <Retailpage />
        </Route>
        <Route  path='/SupplychainAnalyticspage'>
          <SupplychainAnalyticspage />
        </Route>
        <Route  path='/Telecommunicationspage'>
          <Telecommunicationspage />
        </Route>
        <Route  path='/Ariticialintelligencepage'>
          <Ariticialintelligencepage />
        </Route>
        <Route  path='/Awspage'>
          <Awspage />
        </Route>
        <Route  path='/Azurepage'>
          <Azurepage />
        </Route>
        <Route  path='/Computervisionpage'>
          <Computervisionpage />
        </Route>
        <Route  path='/Deeplearningpage'>
          <Deeplearningpage />
        </Route>
        <Route  path='/Devopspage'>
          <Devopspage />
        </Route>
        <Route  path='/Fullstackdevelopmentpage'>
          <Fullstackdevelopmentpage />
        </Route>
        <Route  path='/MachineLearningpage'>
          <MachineLearningpage />
        </Route>
        <Route  path='/Naturallanguageprocessingpage'>
          <Naturallanguageprocessingpage />
        </Route>
        <Route  path='/Tableaupage'>
          <Tableaupage />
        </Route>
        <Route  path='/Applicationservicespage'>
          <Applicationservicespage />
        </Route>
        <Route  path='/Artificialintelligencepage1'>
          <Artificialintelligencepage1 />
        </Route>
        <Route  path='/Cloudservicespage'>
          <Cloudservicespage />
        </Route>
        <Route  path='/Devopspage1'>
          <Devopspage1 />
        </Route>
        <Route  path='/Digitalanalyticspage'>
          <Digitalanalyticspage />
        </Route>
        <Route  path='/Digitaltransformationpage'>
          <Digitaltransformationpage />
        </Route>
        <Route  path='/Productdevelopmentpage'>
          <Productdevelopmentpage />
        </Route>
        <Route  path='/Aboutc360page'>
          <Aboutc360page />
        </Route>
        <Route  path='/Careerspage'>
          <Careerspage />
        </Route>

      </Switch>
      </BrowserRouter>
      
    </div>
  )
}

export default App
