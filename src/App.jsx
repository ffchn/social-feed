import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Filipe F"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aperiam itaque facere maiores. Expedita, voluptate!"
          />
          <Post
            author="Filipe F"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aperiam itaque facere maiores. Expedita, voluptate!"
          />
          <Post
            author="Filipe F"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aperiam itaque facere maiores. Expedita, voluptate!"
          />
        </main>
      </div>
    </>
  );
}

export default App;
