
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FiPlay,
    FiPause,
    FiHeart,
    FiClock,
    FiMoreHorizontal,
    FiArrowRight,
    FiMusic,
    FiSkipBack,
    FiSkipForward,
    FiVolume2
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "./Home.css";

function Home() {
    const navigate = useNavigate();

    const songs = [
        {
            id: 1,
            title: "Midnight Dreams",
            artist: "The Weekenders",
            duration: "3:42",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            title: "Golden Hour",
            artist: "JVKE",
            duration: "3:29",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "Ocean Eyes",
            artist: "Billie Eilish",
            duration: "3:20",
            image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            title: "Afterglow",
            artist: "Ed Sheeran",
            duration: "3:45",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=500&q=80"
        }
    ];

    const popularSongs = [
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

    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [likedSongs, setLikedSongs] = useState([]);

    const playSong = (song) => {
        setCurrentSong(song);
        setIsPlaying(true);
    };

    const togglePlay = () => {
        setIsPlaying((previous) => !previous);
    };

    const toggleLike = (id) => {
        setLikedSongs((previous) => {
            if (previous.includes(id)) {
                return previous.filter((songId) => songId !== id);
            }

            return [...previous, id];
        });
    };

    return (
        <div className="music-page">

            <div className="music-app">

                {/* NAVBAR */}
                <Navbar />

                {/* APPLICATION BODY */}
                <div className="app-body">

                    {/* SIDEBAR */}
                    <Sidebar />

                    {/* MAIN CONTENT */}
                    <main className="main-content">

                        {/* HERO */}
                        <section className="hero-section">

                            <div className="hero-content">

                                <span className="hero-small-text">
                                    YOUR MUSIC. YOUR MOMENT.
                                </span>

                                <h1>
                                    Feel the
                                    <br />
                                    <span>music.</span>
                                </h1>

                                <p>
                                    Discover new sounds, explore your
                                    favorite artists and enjoy music
                                    that matches your mood.
                                </p>

                                <div className="hero-actions">

                                    {/* START LISTENING */}
                                    <button
                                        className="hero-button"
                                        onClick={() => navigate("/login")}
                                    >
                                        <FiPlay />
                                        Start Listening
                                    </button>

                                    {/* EXPLORE MUSIC */}
                                    <button
                                        className="hero-secondary-button"
                                        onClick={() => navigate("/login")}
                                    >
                                        Explore Music
                                        <FiArrowRight />
                                    </button>

                                </div>

                            </div>

                            {/* HERO DECORATION */}
                            <div className="hero-decoration">

                                <div className="hero-circle hero-circle-one">
                                    <FiMusic />
                                </div>

                                <div className="hero-circle hero-circle-two">
                                    <FiPlay />
                                </div>

                                <div className="hero-wave">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                            </div>

                        </section>

                        {/* TRENDING */}
                        <section className="content-section">

                            <div className="section-header">

                                <div>
                                    <span className="section-label">
                                        TRENDING NOW
                                    </span>

                                    <h2>
                                        Popular albums
                                    </h2>
                                </div>

                                <button className="view-button">
                                    View all
                                    <FiArrowRight />
                                </button>

                            </div>

                            <div className="album-grid">

                                {songs.map((song) => (

                                    <div
                                        className="album-card"
                                        key={song.id}
                                    >

                                        <div className="album-image-wrapper">

                                            <img
                                                src={song.image}
                                                alt={song.title}
                                                className="album-image"
                                            />

                                            <div className="album-overlay"></div>

                                            <button
                                                className="album-heart"
                                                onClick={() =>
                                                    toggleLike(song.id)
                                                }
                                                title="Like"
                                            >
                                                <FiHeart
                                                    fill={
                                                        likedSongs.includes(song.id)
                                                            ? "#2563eb"
                                                            : "none"
                                                    }
                                                />
                                            </button>

                                            <button
                                                className="album-play"
                                                onClick={() =>
                                                    playSong(song)
                                                }
                                                title="Play"
                                            >
                                                {currentSong.id === song.id &&
                                                isPlaying ? (
                                                    <FiPause />
                                                ) : (
                                                    <FiPlay />
                                                )}
                                            </button>

                                        </div>

                                        <div className="album-info">

                                            <h3>
                                                {song.title}
                                            </h3>

                                            <p>
                                                {song.artist}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </section>

                        {/* BOTTOM CONTENT */}
                        <div className="bottom-grid">

                            {/* POPULAR SONGS */}
                            <section className="content-section">

                                <div className="section-header">

                                    <div>
                                        <span className="section-label">
                                            FOR YOU
                                        </span>

                                        <h2>
                                            Popular songs
                                        </h2>
                                    </div>

                                    <button className="view-button">
                                        View all
                                        <FiArrowRight />
                                    </button>

                                </div>

                                <div className="song-list">

                                    {popularSongs.map((song, index) => (

                                        <div
                                            className="song-item"
                                            key={song.id}
                                        >

                                            <span className="song-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <div className="song-thumbnail">
                                                <FiMusic />
                                            </div>

                                            <div className="song-details">

                                                <h4>
                                                    {song.title}
                                                </h4>

                                                <p>
                                                    {song.artist}
                                                </p>

                                            </div>

                                            <div className="song-duration">

                                                <FiClock />

                                                {song.duration}

                                            </div>

                                            <button
                                                className="song-more"
                                                title="More"
                                            >
                                                <FiMoreHorizontal />
                                            </button>

                                        </div>

                                    ))}

                                </div>

                            </section>

                            {/* PLAYLIST */}
                            <section className="playlist-section">

                                <div className="section-header">

                                    <div>
                                        <span className="section-label">
                                            YOUR PLAYLISTS
                                        </span>

                                        <h2>
                                            Made for you
                                        </h2>
                                    </div>

                                </div>

                                {/* MORNING VIBES */}
                                <div className="playlist-card">

                                    <div className="playlist-art">
                                        <FiMusic />
                                    </div>

                                    <div className="playlist-info">

                                        <h3>
                                            Morning Vibes
                                        </h3>

                                        <p>
                                            24 songs
                                        </p>

                                    </div>

                                    <button className="playlist-play">
                                        <FiPlay />
                                    </button>

                                </div>

                                {/* CHILL EVENING */}
                                <div className="playlist-card">

                                    <div className="playlist-art second">
                                        <FiMusic />
                                    </div>

                                    <div className="playlist-info">

                                        <h3>
                                            Chill Evening
                                        </h3>

                                        <p>
                                            18 songs
                                        </p>

                                    </div>

                                    <button className="playlist-play">
                                        <FiPlay />
                                    </button>

                                </div>

                                {/* FOCUS MODE */}
                                <div className="playlist-card">

                                    <div className="playlist-art third">
                                        <FiMusic />
                                    </div>

                                    <div className="playlist-info">

                                        <h3>
                                            Focus Mode
                                        </h3>

                                        <p>
                                            31 songs
                                        </p>

                                    </div>

                                    <button className="playlist-play">
                                        <FiPlay />
                                    </button>

                                </div>

                            </section>

                        </div>

                    </main>

                </div>

                {/* MUSIC PLAYER */}
                <footer className="music-player">

                    {/* CURRENT SONG */}
                    <div className="player-song">

                        <div className="player-image">
                            <FiMusic />
                        </div>

                        <div className="player-details">

                            <h4>
                                {currentSong.title}
                            </h4>

                            <p>
                                {currentSong.artist}
                            </p>

                        </div>

                        <button
                            className="player-heart"
                            onClick={() =>
                                toggleLike(currentSong.id)
                            }
                            title="Like"
                        >
                            <FiHeart
                                fill={
                                    likedSongs.includes(currentSong.id)
                                        ? "#2563eb"
                                        : "none"
                                }
                            />
                        </button>

                    </div>

                    {/* CONTROLS */}
                    <div className="player-controls">

                        <button title="Previous">
                            <FiSkipBack />
                        </button>

                        <button
                            className="main-play"
                            onClick={togglePlay}
                            title={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? (
                                <FiPause />
                            ) : (
                                <FiPlay />
                            )}
                        </button>

                        <button title="Next">
                            <FiSkipForward />
                        </button>

                    </div>

                    {/* PROGRESS */}
                    <div className="player-progress">

                        <span>
                            1:24
                        </span>

                        <div className="progress-track">
                            <div className="progress-fill"></div>
                        </div>

                        <span>
                            {currentSong.duration}
                        </span>

                    </div>

                    {/* VOLUME */}
                    <div className="player-volume">

                        <FiVolume2 />

                        <div className="volume-track">
                            <div className="volume-fill"></div>
                        </div>

                    </div>

                </footer>

            </div>

        </div>
    );
}

export default Home;

