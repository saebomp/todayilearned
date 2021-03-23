import React, {useState, useEffect} from 'react';

const styles = {
  mar: {
    padding: '10px',
    marginTop:'10px'
  },
}

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle)
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title")
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title])
  return setTitle;
}

const UseTitle = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000)

  return (
    <div style={styles.mar}>
      Check out the title
    </div>
    )
  }
  export default UseTitle

  //https://www.youtube.com/watch?v=J8E9CEyBbWo