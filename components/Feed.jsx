"use client";

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

// todo: implement view other profiles


const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [posts, setPosts] = useState([])

  const [searchText, setSearchText] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);


  const fetchPosts = async () => {
    const response = await fetch('api/prompt');
    const data = await response.json();
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const filterPosts = (searchText) => {
    console.log("filterPosts", searchText);
    const regex = new RegExp(searchText, "i")
    return posts.filter(
      item =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    )
  }

  const handleSearchChange = (e) => {
    console.log('changed search text', e.target.value);
    clearTimeout(searchTimeout)
    setSearchText(e.target.value)

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPosts(e.target.value)
        setSearchedResults(searchResult)
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };


  return (
    <section className='feed'>
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder='Search for a tag or a username'
          onChange={handleSearchChange}
          value={searchText}
          required
          className='peer search_input'
        />
      </form>
      {searchText ? (
        <PromptCardList data={searchedResults} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />

      )}


    </section>
  )
}

export default Feed