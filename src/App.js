import { postData } from "./posts";
import Post from "./components/Post/Post";
import Header from "./components/Header/Header";



function App() {

  // отображение карточек на сайте

  return (
    <div>
      <Header/>
      <h1>First </h1>
      <div className="container">

        {postData.map((pos,id) => (
          <Post key={id} img={pos.image} name={pos.title} text={pos.text} />
        ))}

    
        
      </div>
    </div>
  );
}

export default App;
