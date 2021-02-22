import React from "react";
import davidImage from "../images/IMG_2001.jpg";

function About() {
  return (
    <div id="about">
      <h1>About</h1>
      <img id="aboutImg" src={davidImage} alt="David Slater looking awesome" />
      <p>
        David Slater is a vocalist and piano player who has performed in many of
        the finest venues in the country. He was male vocalist winner of TV's
        Star Search. David then signed with Capitol Records and released several
        charted records. He has toured extensively and worked with some of the
        best-known entertainers in the world, including Dolly Parton, Kenny
        Rogers, Garth Brooks, Tony Orlando, The Little River Band, and many
        others.
      </p>

      <p>
        David is based in Dallas, Texas. In addition to his own music, he
        performs classic standards made famous by legendary artists such as
        Frank Sinatra, Dean Martin, Ella Fitzgerald and Nat King Cole. He has
        formed The David Slater Combo, a swinging jazz group featuring some of
        the best musicians in Dallas.
      </p>

      <p>
        His newest CD, "As Time Goes By," is a jazzy tribute to the singers and
        songwriters who made the Great American Songbook so legendary.
      </p>
    </div>
  );
}

export default About;
