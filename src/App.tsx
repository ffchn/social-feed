import Post from "./components/Post";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import styles from "./App.module.scss";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://picsum.photos/300",
      name: "Kelleigh Carver",
      role: "UI Developer",
    },
    publishedAt: new Date("2024-02-11 22:00:00"),
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime laborum fugiat, mollitia deserunt <a href=''>click here</a> veniam repudiandae ullam fugit. Ipsa, vero laudantium.",
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://picsum.photos/300",
      name: "Jaki Lowe",
      role: "Head of IT",
    },
    publishedAt: new Date("2024-02-10 15:00:00"),
    content:
      "Lorem ipsum <a href=''>click here</a> dolor sit amet consectetur adipisicing elit. Quaerat cumque, dolore explicabo, eveniet culpa deserunt corporis ut assumenda mollitia sed, aut praesentium consectetur veritatis accusamus libero odit voluptatem architecto fugiat ullam?",
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://picsum.photos/300",
      name: "Perry Denzil",
      role: "Software Engineer",
    },
    publishedAt: new Date("2024-02-09 12:00:00"),
    content:
      "Lorem ipsum dolor sit amet consectetur <a href=''>click here</a> adipisicing elit. Eos iure fugiat placeat perferendis beatae optio debitis soluta nisi, magnam quibusdam, cumque sint voluptatibus ratione! Quas suscipit ut voluptates iure dignissimos delectus ullam totam autem quae, consequuntur facere porro dicta ipsam ratione tenetur cupiditate saepe reprehenderit illo numquam, quidem sunt! Distinctio alias dignissimos ducimus et. Quaerat, delectus? Eligendi necessitatibus iste sunt itaque suscipit ut ipsam nihil reiciendis officia eius id omnis, pariatur et, nostrum odit blanditiis fugiat vero minima veniam nemo consequuntur repellendus! Rerum, impedit consequuntur! Numquam consequatur, perspiciatis alias soluta nemo sequi dicta aut pariatur placeat eligendi quos, modi, deleniti nisi delectus cum?",
  },
];

function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(({ id, author, content, publishedAt }) => (
            <Post
              author={author}
              key={id}
              content={content}
              publishedAt={publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
