import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import PostsContainer from './components/PostsContainer/PostsContainer';
import withPosts from './components/WithPosts/withPosts';

function App() {

  const LayoutFn = withPosts(Layout)
  
  return (
    <div className="App">
     <LayoutFn>
        <p> Hola HOC !</p>
     </LayoutFn>
    </div>
  );
}

export default App;
