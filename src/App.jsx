import { Header } from './components/Header'

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/sidebar';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Sapiente sequi adipisci inventore velit distinctio facilis doloremque error, 
          minima aliquid repellat ratione quia accusamus nemo tempora nobis porro praesentium commodi harum.
        </main>
      </div>
    </div>
  )
}

export default App
