import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';
// import Counter from './components/Counter';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript2', body: 'Description' },
    { id: 3, title: 'Javascript3', body: 'Description' },


  ])

  return (
    <div className="App">
      <form>
        <MyInput type='text' placeholder='Post name' />
        <MyInput type='text' placeholder='Post description' />
        <MyButton disabled>Create Post</MyButton>
      </form>
      <PostList posts={posts} title='Posts about JS' />

    </div>
  );
}

export default App;
