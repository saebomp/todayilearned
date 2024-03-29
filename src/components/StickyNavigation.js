import React, { useEffect, useState } from 'react';

const styles = {
  margin: {
    padding: '10px',
    marginTop:'10px'
  },
}

const StickyNavigation = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  console.log(offset); 

  return (
    <div className="sticky">
      <nav className={`banner ${offset > 150 ? "nav active" : "nav"}`}>
        <div className="container">
          <h1 className="logo"><a href="/index.html">My Website</a></h1>
          <ul>
            <li><a href="#" className="current">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="hero">
        <div className="container">
          <h1>Welcome To My Website</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
        </div>
      </div>
      <section className="container content">
        <h2>Content One</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!</p>
        <h3>Content Two</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste aperiam hic cumque repellat?</p>
        <h3>Content Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste aperiam hic cumque repellat?</p>
      </section>
    </div>
  )
}
  
export default StickyNavigation;


// https://github.com/bradtraversy/50projects50days/tree/master/sticky-navigation 