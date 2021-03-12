import React, {useState} from 'react';

const styles = {
  wrapper: {
    padding: '20px',
  },
  btn : {
    padding:'5px',
  }
}

const content = [
  {
    tab: "section 1",
    content:"I'm the content of the section 1"
  },
  {
    tab: "section 2",
    content:"I'm the content of the section 2"
  }
]

const useTabs = (initialTab, allTabs) => {
  
  const [currentIndex, setCurrentIndex] = useState(initialTab)
  return {
    currentItem: allTabs[currentIndex],
    changeItem:setCurrentIndex
  }
}


const UseTab = () => {
  const {currentItem, changeItem} = useTabs(0, content); //content array에서 0번째 index

  return (
    <div style={styles.wrapper}>
      {content.map((section, index) => 
        <button style={styles.btn} onClick={() => changeItem(index)}>{section.tab}</button>
      )}
      <div>
        {currentItem.content}
      </div>
    </div>
    )
  }
  
  export default UseTab

  //https://www.youtube.com/watch?v=2C2B4k3JOBg