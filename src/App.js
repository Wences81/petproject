import React, { useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';


function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);




  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)

  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }




  return (

    <div className="App">

      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create user
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>




      <hr style={{ margin: '15px 0' }} />

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts about JS' />

    </div>
  );
}

export default App;
