import React from "react";
import "./linkedin.css";
import { data } from "./linkedinArray";
import { AiOutlineDown } from 'react-icons/ai'

const Experience = () => {
  return (
    <section id="linkedin">
      <h5>LinkedIn</h5>
      <h2>My Posts</h2>

      <div className="posts__container">
      {data.map((item) => (
        <article className="post" key={item.id}>
          <iframe src={item.embed} title="Embedded post"></iframe>
        </article>
      ))}
      </div>

      <div className="posts__button">
        <a href="https://www.linkedin.com/in/eshaan-bagga/" className="btn btn-primary btn-link" target='_blank'>View More Posts <AiOutlineDown size={21} style={{paddingTop: '5px'}} /></a>
      </div>
    </section>
  );
};

export default Experience;
