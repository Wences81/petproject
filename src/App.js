import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';

import './styles/App.css';
// import Counter from './components/Counter';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aa', body: 'bb' },
    { id: 2, title: 'gg2', body: 'aa' },
    { id: 3, title: 'bb3', body: 'yy' },
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort.localeCompare(b[sort])]))

  }


  return (
    <div className="App">
      <PostForm create={createPost} />

      <hr style={{ margin: '15px 0' }} />

      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="sorting"
          options={[
            { value: 'title', name: 'By name' },
            { value: 'body', name: 'By description' },
          ]}
        />

      </div>
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={posts} title='Posts about JS' />
        :
        <h1 style={{ textAlign: 'center' }}>
          Posts not found!
        </h1>
      }
    </div>
  );
}

export default App;
