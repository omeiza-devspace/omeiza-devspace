import React from 'react';
import InterestRow from './InterestRow';


// Interests Section Component
const InterestSection = () => {
  return (
    <section className="resume-section" id="interests">
      <div className="section-content">
        <h2>Interests</h2>
        <div className="container-fluid">
          <div className="row">
            <InterestRow
              iconClass="fas fa-film"
              text="In my free time, I like to watch Fantasy, Sci-fi & Super Hero TV shows and movies. I enjoy discovering large fantasy universes throughout multiple movies, like the Star Wars Universe, the Marvel Cinematic Universe, or the Arrowverse."
            />
            <InterestRow
              iconClass="fas fa-book"
              text="I'm not much of a reader, but thanks to Audible I'm 13 books deep in a Dungeons & Dragons book series called The Legends of Drizzt. I like Terry Pratchett's Discworld books, and Harry Potter books as well, but I haven't read them in English yet."
            />
            <InterestRow
              iconClass="fas fa-laptop"
              text="If I need a little distraction, I like to play sandbox computer games. Building something, and solving logical problems, are great stress relief for me."
            />
            <InterestRow
              iconClass="fas fa-dice"
              text="I also like to play board games with my friends whenever our conflicting schedule allows it. Right now, we are in the middle of a Star Wars - Imperial Assault campaign, that keeps getting delayed due to the ongoing pandemic."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestSection;
