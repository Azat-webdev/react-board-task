import React from 'react'

import './App.scss'

//import Card from './componets/Card/Card'
import Panel from './componets/Panel/Panel'

function App() {
  return (
    <div className="App">
      <Panel items={[
        {text: "Пройти курс по React"},
        {text: "Пройти курс по Redux"},
        {text: "Пройти курс по Redux"}
      ]}>
      </Panel>
      
    </div>
  )
}

export default App;
