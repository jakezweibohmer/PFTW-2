import { Link } from "react-router-dom";
import musicData from "../assets/music-list.json";
export function Home() {
  return (
    <>
      <h1>Top 50 Songs</h1>
      <h3>All the fan favorites</h3>
      {musicData.map((song) => {
        return (
          <div key={song.slug}>
            <img src={song.cover} alt={song.title} />
            <p>
              <Link to={`${song.slug}`}>
                <strong>{song.title}</strong> by {song.artist}
              </Link>
            </p>
          </div>
        );
      })}
    </>
  );
}
