
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FiPlay,
    FiPause,
    FiHeart,
    FiMoreHorizontal,
    FiSkipBack,
    FiSkipForward,
    FiVolume2,
    FiMusic,
    FiSearch,
    FiLogOut
} from "react-icons/fi";

import "./Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [likedSongs, setLikedSongs] = useState([]);

    const albums = [
        {
            id: 1,
            title: "Midnight Dreams",
            artist: "The Weekenders",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=700&q=80"
        },
        {
            id: 2,
            title: "Golden Hour",
            artist: "JVKE",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=80"
        },
        {
            id: 3,
            title: "Ocean Eyes",
            artist: "Billie Eilish",
            image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=700&q=80"
        },
        {
            id: 4,
            title: "Afterglow",
            artist: "Ed Sheeran",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=80"
        }
    ];

    const songs = [
        {
            id: 1,
            title: "Blinding Lights",
            artist: "The Weeknd",
            duration: "3:20"
        },
        {
            id: 2,
            title: "Perfect",
            artist: "Ed Sheeran",
            duration: "4:23"
        },
        {
            id: 3,
            title: "Shape of You",
            artist: "Ed Sheeran",
            duration: "3:53"
        },
        {
            id: 4,
            title: "Levitating",
            artist: "Dua Lipa",
            duration: "3:23"
        },
        {
            id: 5,
            title: "Stay",
            artist: "The Kid LAROI",
            duration: "2:21"
        }
    ];

    const playSong = (song) => {

        setCurrentSong(song);
        setIsPlaying(true);

    };

    const toggleLike = (id) => {

        setLikedSongs((previous) => {

            if (previous.includes(id)) {

                return previous.filter(
                    (songId) => songId !== id
                );

            }

            return [...previous, id];

        });

    };

    const togglePlay = () => {

        if (!currentSong && songs.length > 0) {

            setCurrentSong(songs[0]);
            setIsPlaying(true);

            return;
        }

        setIsPlaying((previous) => !previous);

    };

    const handleLogout = () => {

        navigate("/login");

    };

    return (

        <div className="dashboard-page">

            {/* NAVBAR */}

            <header className="dashboard-navbar">

                <div className="dashboard-logo">

                    <div className="dashboard-logo-icon">
                        <FiMusic />
                    </div>

                    <span>
                        MusicFlow
                    </span>

                </div>


                <div className="dashboard-search">

                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Search songs, artists, albums..."
                    />

                </div>


                <div className="dashboard-user">

                    <div className="user-avatar">
                        M
                    </div>

                    <span>
                        My Account
                    </span>

                    <button
                        onClick={handleLogout}
                        title="Logout"
                    >
                        <FiLogOut />
                    </button>

                </div>

            </header>


            {/* MAIN CONTENT */}

            <main className="dashboard-content">


                {/* WELCOME */}

                <section className="dashboard-welcome">

                    <div>

                        <span>
                            WELCOME BACK
                        </span>

                        <h1>
                            Discover your
                            <br />
                            <strong>next favorite song.</strong>
                        </h1>

                        <p>
                            Explore fresh music, trending albums
                            and songs made for your mood.
                        </p>

                    </div>


                    <div className="floating-disc">

                        <div className="disc-ring"></div>

                        <div className="disc-center">
                            <FiMusic />
                        </div>

                    </div>

                </section>


                {/* ALBUMS */}

                <section className="dashboard-section">

                    <div className="dashboard-section-header">

                        <div>

                            <span>
                                FEATURED
                            </span>

                            <h2>
                                Explore Albums
                            </h2>

                        </div>

                        <button>
                            View all →
                        </button>

                    </div>


                    <div className="dashboard-albums">

                        {albums.map((album) => (

                            <div
                                className="album-3d"
                                key={album.id}
                            >

                                <div className="album-card-3d">

                                    <img
                                        src={album.image}
                                        alt={album.title}
                                    />

                                    <div className="album-glow"></div>

                                    <button
                                        className="album-heart-dashboard"
                                        onClick={() =>
                                            toggleLike(album.id)
                                        }
                                    >

                                        <FiHeart
                                            fill={
                                                likedSongs.includes(
                                                    album.id
                                                )
                                                    ? "#2563eb"
                                                    : "none"
                                            }
                                        />

                                    </button>


                                    <button
                                        className="album-play-dashboard"
                                        onClick={() =>
                                            playSong(album)
                                        }
                                    >

                                        {currentSong?.id === album.id &&
                                        isPlaying ? (
                                            <FiPause />
                                        ) : (
                                            <FiPlay />
                                        )}

                                    </button>

                                </div>


                                <div className="album-dashboard-info">

                                    <h3>
                                        {album.title}
                                    </h3>

                                    <p>
                                        {album.artist}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </section>


                {/* SONGS */}

                <section className="dashboard-section songs-section">

                    <div className="dashboard-section-header">

                        <div>

                            <span>
                                TRENDING
                            </span>

                            <h2>
                                Popular Songs
                            </h2>

                        </div>

                        <button>
                            View all →
                        </button>

                    </div>


                    <div className="dashboard-song-list">

                        {songs.map((song, index) => (

                            <div
                                className={`dashboard-song ${
                                    currentSong?.id === song.id
                                        ? "active-song"
                                        : ""
                                }`}
                                key={song.id}
                            >

                                <span className="song-index">
                                    {String(index + 1).padStart(2, "0")}
                                </span>


                                <button
                                    className="song-play-button"
                                    onClick={() =>
                                        playSong(song)
                                    }
                                >

                                    {currentSong?.id === song.id &&
                                    isPlaying ? (
                                        <FiPause />
                                    ) : (
                                        <FiPlay />
                                    )}

                                </button>


                                <div className="dashboard-song-info">

                                    <h3>
                                        {song.title}
                                    </h3>

                                    <p>
                                        {song.artist}
                                    </p>

                                </div>


                                <div className="song-wave">

                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>

                                </div>


                                <span className="song-time">
                                    {song.duration}
                                </span>


                                <button
                                    className="dashboard-like"
                                    onClick={() =>
                                        toggleLike(song.id)
                                    }
                                >

                                    <FiHeart
                                        fill={
                                            likedSongs.includes(song.id)
                                                ? "#2563eb"
                                                : "none"
                                        }
                                    />

                                </button>


                                <button className="dashboard-more">
                                    <FiMoreHorizontal />
                                </button>

                            </div>

                        ))}

                    </div>

                </section>

            </main>


            {/* MUSIC PLAYER */}

            <footer className="dashboard-player">

                <div className="dashboard-current-song">

                    <div className="player-music-icon">
                        <FiMusic />
                    </div>

                    <div>

                        <h4>
                            {currentSong
                                ? currentSong.title
                                : "Choose a song"}
                        </h4>

                        <p>
                            {currentSong
                                ? currentSong.artist
                                : "MusicFlow"}
                        </p>

                    </div>

                </div>


                <div className="dashboard-controls">

                    <button>
                        <FiSkipBack />
                    </button>

                    <button
                        className="dashboard-main-play"
                        onClick={togglePlay}
                    >

                        {isPlaying ? (
                            <FiPause />
                        ) : (
                            <FiPlay />
                        )}

                    </button>

                    <button>
                        <FiSkipForward />
                    </button>

                </div>


                <div className="dashboard-progress">

                    <span>
                        0:00
                    </span>

                    <div className="dashboard-progress-track">

                        <div className="dashboard-progress-fill"></div>

                    </div>

                    <span>
                        {currentSong?.duration || "0:00"}
                    </span>

                </div>


                <div className="dashboard-volume">

                    <FiVolume2 />

                    <div className="dashboard-volume-track">

                        <div className="dashboard-volume-fill"></div>

                    </div>

                </div>

            </footer>

        </div>
    );
}

export default Dashboard;
