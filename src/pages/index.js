import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Banner from "../components/Banner";

import pic01 from "../assets/images/pic01.jpg";
import pic02 from "../assets/images/pic02.jpg";
import pic03 from "../assets/images/pic03.jpg";
import pic04 from "../assets/images/pic04.jpg";
import pic05 from "../assets/images/pic05.jpg";
import pic06 from "../assets/images/pic06.jpg";

class HomeIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Maths</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/maths" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Machine Learning</h3>
                <p>feugiat amet tempus</p>
              </header>
              <Link to="/learning" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Python</h3>
                <p>Lorem etiam nullam</p>
              </header>
              <Link to="/python" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>JavaScript</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link to="/ajavascript" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Blog</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/blog" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Hobbies</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/hobbies" className="link primary" />
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>About</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/about" className="button next">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default HomeIndex;

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
