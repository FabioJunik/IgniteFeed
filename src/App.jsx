import { Header } from './components/Header'
import { Sidebar } from './components/sidebar';
import { Post } from './components/post';

import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          <Post/>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
