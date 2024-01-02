import './App.css';
import ControlPanel from './components/controlPanel/ControlPanel';
import PadContainer from './components/pads/PadContainer';
import { useEffect, useState } from 'react';

function App() {

  const [key, setKey] = useState('');
  const [display, setDisplay] = useState('')
  const [power, setPower] = useState(true)
  const [volume, setVolume] = useState(.5);
  const [currentDevice, setCurrentDevice] = useState(0)  
 
  const pads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

  function handleKeyPress(e) {    
    
    if (power) {
      const keyPressed = e.key || e.target.innerText.toLocaleLowerCase();
      const padsLowerCase = pads.map((item) => { return item.toLocaleLowerCase() });
      padsLowerCase.forEach((item) => {
        if (keyPressed === item) {
          setKey(item)
          setDisplay(nameMusic[currentDevice][item])
          setTimeout(() => {
            setKey('')
          }, 300)
        }
      })
    } else {
      const keyPressed = e.key;
      const padsLowerCase = pads.map((item) => { return item.toLocaleLowerCase() });
      padsLowerCase.forEach((item) => {
        if (keyPressed === item) {
          setKey(item)
          setDisplay('')
          setTimeout(() => {
            setKey('')
          }, 300)
        }
      })
    }

  }

  function turnPower(){
    if (power){
      setPower(!power)
      setDisplay('Off')
      setTimeout(() => {
        setDisplay('')
      }, 1000)
    }else{      
      setPower(!power)
      setDisplay('On')
      setTimeout(() => {
        setDisplay('')
      }, 1000)
    }
    
  }

  const soundUrl = [{
    'q': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    'w': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    'e': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    'a': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    's': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    'd': 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    'z': 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    'x': 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    'c': 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },{
    'q': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    'w': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    'e': 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
    'a': 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    's': 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    'd': 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    'z': 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    'x': 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    'c': 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'    
    }]

  const nameMusic = [{
    'q': 'Heater 1',
    'w': 'Heater 2',
    'e': 'Heater 3',
    'a': 'Heater 4',
    's': 'Clap',
    'd': 'Open-HH',
    'z': "Kick-n'-Hat",
    'x': 'Kick',
    'c': 'Closed-HH'
  },{
    'q': 'Chord 1',
    'w': 'Chord 2',
    'e': 'Chord 3',
    'a': 'Shaker',
    's': 'Open HH',
    'd': 'Closed HH',
    'z': "Punchy Kick",
    'x': 'Side Stick',
    'c': 'Snare'
  }]

  

  function changeVolume(e){
    setVolume(e.target.value);
    setDisplay(`Volume: ${Math.round(e.target.value*100)}%`)
    setTimeout(() => {
      setDisplay('')
    }, 1000)
  }
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => { document.removeEventListener('keydown', handleKeyPress) }
  })

  function changeDevice(){
    if (!power){return false}

    if(currentDevice === 0){
      setCurrentDevice(1)
      setDisplay('Smooth Piano Kit')
    }else{
      setCurrentDevice(0)
      setDisplay('Heater Kit')
    }
  }

  return (
    <div className="App">
      <PadContainer
       volume={volume}
       keyPress={handleKeyPress}
       power={power}
       keyPressed={key}
       url={power ? (soundUrl[currentDevice][key.toLowerCase()] || '') : ''}
     />
      <ControlPanel
       changeVolume={changeVolume}
       power={power}
       turnPower={turnPower}
       displayText={display}
       bank={changeDevice}
       bankSide={currentDevice}
     />
    </div>
  );
}

export default App;
