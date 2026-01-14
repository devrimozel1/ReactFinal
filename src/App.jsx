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
  return (
    <div style={{
      display: "flex",
      gap: "10px",
      flexDirection: "row",
      flexWrap: "wrap",
    }}>
      {kartinfos.map((kart, index) => (
        <Kart
          key={index}
          title={kart.title}
          description={kart.description}
          isCompleted={kart.isCompleted}
        />
      ))}
    </div>
  )
}

export default App



