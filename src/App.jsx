import { Header } from './components/Header'
import { Sidebar } from './components/sidebar';
import { Post } from './components/post';

import styles from './App.module.css';
import './global.css';


const posts =[
  {
    id: 1,
    author:{
      avatarURL: 'http://github.com/fabiojunik.png',
      name: 'Fábio Junik',
      role: 'Front End Developer'
    },
    content:[
      {type:'paragraph', content: 'Fala galera 👋'},
      {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-08-29 08:11')
  },
  {
    id: 2,
    author:{
      avatarURL: 'http://github.com/antoniopedromuteka.png',
      name: 'António Muteka',
      role: 'Back End Developer'
    },
    content:[
      {type:'paragraph', content: 'Fala pessoal 👋'},
      {type:'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      {type:'link', content: 'Acesse e deixe seu feedback 👉 devonlane.design'},
    ],
    publishedAt: new Date('2022-08-30 17:05')
  }
]

function App() {

  return (
    <div className="App">
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          {posts.map(({id, author, content, publishedAt})=>(
            <Post
              key={id}
              author={author}
              content={content}
              publishedAt={publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
