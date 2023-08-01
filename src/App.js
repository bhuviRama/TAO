import React, {useEffect, useState} from 'react';
import Stepper from 'react-stepper-horizontal';

import './App.css';

function FirstComponent() {
  return (
    <>
      <h2>Welcome! First things first...</h2>
      <h6>You can always change them later.</h6>
      <form>
        <div>
          <label>Full Name</label>
          <input type="text" placeholder='Steve Jobs'/>
        </div>

        <div>
          <label>Display Name</label>
          <input type="text" placeholder='Steve'/>
        </div>
      </form>
    </>
  )
}

function SecondComponent() {
  return (
    <>
      <h2>Let's set up a home for all your work</h2>
      <h6>You can always create another workspace later.</h6>
      <form>
        <div>
          <label>Workspace Name</label>
          <input type="text" placeholder='Eden'/>
        </div>

        <div>
          <label>Workspace URL <span style={{color:'#bebbbbba'}}>(optional)</span></label>
          {/* <input type="text" placeholder='Example'/> */}
          <div className="firstDiv">
            <div className="secondDiv">
              www.eden.com/
            </div>
            <input type="text" placeholder="Example" />
          </div>
        </div>
      </form>
    </>
  );
}
function ThirdComponent() {
  const [ activediv, setActiveDiv ] = useState(0);
  return (
    <>
      <h2>How are you planning to use Eden?</h2>
      <h6>We'll streamline your setup experience accordingly.</h6>
      <div className="outer-div">
        <div className="bordered-div" style={{borderColor: activediv == 0? 'blue':'#9e9e9e17'}} onClick={()=>setActiveDiv(0)}>
          <img src="/images/self.png" width={'45px'} alt="self-logo" />
          <label>For myself</label>
          <p>Write better.Think more clearly.Stay organized.</p>
        </div>

        <div className="bordered-div" style={{borderColor: activediv == 1? 'blue':'#9e9e9e17'}} onClick={()=>setActiveDiv(1)}>
          <img src="/images/team.png" style={{margin: '6px'}} width={'35px'} alt="team-logo" />
          <label>With my team</label>
          <p>Wikis, docs, tasks & projects, all in one place.</p>
        </div>
      </div>
    </>
  );
}

function FourthComponent() {
  return (
    <>
      <img src="/images/tick.png" style={{margin: '20px'}} width={'70px'} alt="tick-logo" />
      <h2>Congratulations, Eren!</h2>
      <h6>You have completed onboarding, you can start using the Eden!</h6>
    </>
  )
}

function App() {
  const [ activeStep, setActiveStep ] = useState(0);
  const lineMarginOffset=1;
  const buttonlabel = activeStep == 3 ? "Launch Eden" : "Create Workspace" ;
  const steps = [
    { label: 'Welcome!First things first...'},
    { label: 'Let\'s set up a home for all your work '},
    { label: 'How are you planning to use Eden?'},
    { label: 'Congratulations, Eren!' },
  ];

  const getSectionComponent = () =>{
    switch(activeStep) {
      case 0: return <FirstComponent/>;
      case 1: return <SecondComponent/>;
      case 2: return <ThirdComponent/>;
      case 3: return <FourthComponent/>;
      default: return null;
    }
  }

  
  return (
    <div className="container">
      <div className="title">
        <img src="/images/logo.png" className="app-logo" alt="logo" />
        <span>
          Eden
        </span> 
      </div>

      <div>
        <div className='stepper'>
          <Stepper
            steps={steps}
            activeStep={activeStep}
            //circleFontColor="#B4B4B4"
            //defaultBorderColor="#B4B4B4"
            //defaultColor="#FFFFFF"
            activeColor="#5A4AD1"
            completeColor="#5A4AD1"
            completeBarColor="#5A4AD1"
            //defaultBarColor="#5A4AD1"
           lineMarginOffset={lineMarginOffset}
           //barStyle={{borderTop: '1px solid blue'}}
           //defaultBorderStyle={{borderTop: '1px solid blue'}}
          />
        </div>
        
        <div style={{padding: '20px'}}>
          { getSectionComponent()  } 
          { activeStep <= steps.length - 1
            && <button onClick={ () => setActiveStep(activeStep + 1) }>{buttonlabel}</button>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
