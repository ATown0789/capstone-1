import React from "react";
import AddCart from "./AddCart";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: false,
    };
  }

  handleClick = (song) => () => {
    this.props.addToCart(song);
    this.setState({
      showAdd: true,
      song: song,
    });
    setTimeout(() => {
      this.setState({ showAdd: false });
    }, 4000);
  };
  render() {
    const { closeDes, album } = this.props;
    return (
      <div className="description">
        <div id="closeCont" onClick={closeDes}>
          <div id="closeBtn">X</div>
        </div>
        <h2>{album.title}</h2>
        <p>Artist: {album.artist}</p>
        <p>Released: {album.released}</p>
        <p>Price: {album.price}</p>
        <p># in stock{album.inStock}</p>
        <h4>Songs</h4>
        <ol>
          {album.songs.map((song) => (
            <li className="song">
              <p>{song.title}</p>
              <p>{song.price}</p>
              <button
                type="button"
                value={song}
                onClick={this.handleClick(song)}
              >
                Add to cart
              </button>
              {this.state.showAdd ? (
                <AddCart product={this.state.song} />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Description;
