import logo from './logo.svg';
import './App.css';
import Post from './Post'

const IMAGE_ANAKIN = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const IMAGE_RAY = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

function App() {
  return (
    <div>
      <Post
      author={{
            name: "Anakin Skywalker",
            photo: IMAGE_ANAKIN,
            nickname: "@dart_vader"
        }}
        inscription="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={IMAGE_RAY}
        date={"26 февр."}
      />
    </div>
  );
}

export default App;
