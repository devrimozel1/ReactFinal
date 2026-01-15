import { use, useState } from 'react';
import './App.css'
import Kart from './companents/kart'
let kartinfos = [
  {
    title: "Kart 1",
    description: "Bu kart 1'in açıklamasıdır.",
    isCompleted: true
  },
  {
    title: "Kart 2",
    description: "Bu kart 2'in açıklamasıdır.",
    isCompleted: false
  },
  {
    title: "Kart 3",
    description: "Bu kart 3'in açıklamasıdır.",
    isCompleted: true
  },
  {
    title: "Kart 3",
    description: "Bu kart 3'in açıklamasıdır.",
    isCompleted: true
  }, {
    title: "Kart 3",
    description: "Bu kart 3'in açıklamasıdır.",
    isCompleted: true
  }, {
    title: "Kart 3",
    description: "Bu kart 3'in açıklamasıdır.",
    isCompleted: false
  }, {
    title: "Kart 3",
    description: "Bu kart 3'in açıklamasıdır.",
    isCompleted: true
  },

];





function App() {

  const [add, setAdd] = useState(kartinfos)
  const ekleme = () => {
    let user = {
      title: "Kart 4",
      description: "Bu kart 3'in açıklamasıdır.",
      isCompleted: true
    }
    kartinfos.push(user)
    setAdd([...kartinfos])
  }


  return (
    <div style={{
      display: "flex",
      gap: "10px",
      flexDirection: "row",
      flexWrap: "wrap",
    }}>
      {add.map((kart, index) => (
        <Kart
          key={index}
          title={kart.title}
          description={kart.description}
          isCompleted={kart.isCompleted}
        />
      ))}
      <input type="text"
        style={{
          width: "100px",
          height: "30px"
        }} />
      <button
        onClick={ekleme}
        style={{
          width: "100px",
          height: "30px"
        }}> KAYDET</button>
    </div>
  )
}

export default App



