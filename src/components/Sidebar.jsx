import {
    FiHome,
    FiCompass,
    FiRadio,
    FiHeart,
    FiMusic,
    FiDisc,
    FiUser,
    FiList
} from "react-icons/fi";

import "./Sidebar.css";


function Sidebar() {

    return (

        <aside className="sidebar">


            {/* =================================================
                LOGO
            ================================================= */}

            <div className="sidebar-logo">

                <div className="logo-icon">
                    <FiMusic />
                </div>

                <span>
                    MusicFlow
                </span>

            </div>


            {/* =================================================
                MAIN MENU
            ================================================= */}

            <div className="sidebar-section">

                <p className="sidebar-title">
                    MENU
                </p>


                <button
                    type="button"
                    className="sidebar-link active"
                >
                    <FiHome />

                    <span>
                        Home
                    </span>
                </button>


                <button
                    type="button"
                    className="sidebar-link"
                >
                    <FiCompass />

                    <span>
                        Browse
                    </span>
                </button>


                <button
                    type="button"
                    className="sidebar-link"
                >
                    <FiRadio />

                    <span>
                        Radio
                    </span>
                </button>


                <button
                    type="button"
                    className="sidebar-link"
                >
                    <FiHeart />

                    <span>
                        Favorites
                    </span>
                </button>

            </div>


            {/* =================================================
                LIBRARY
            ================================================= */}

            <div className="sidebar-section">

                <p className="sidebar-title">
                    LIBRARY
                </p>


                <button
                    type="button"
                    className="sidebar-link"
                >
                    <FiMusic />

                    <span>
                        Songs
                    </span>
                </button>


                <button
                    type="button"
                    className="sidebar-link"
                >
                    <FiDisc />

                    <span>
                        Albums
                    </span>
                </button>


                <button
                    type="button"
                    className="sidebar-link"
                >
                    <FiUser />

                    <span>
                        Artists
                    </span>
                </button>

            </div>


            {/* =================================================
                PLAYLIST
            ================================================= */}

            <div className="sidebar-section">

                <p className="sidebar-title">
                    PLAYLIST
                </p>


                <button
                    type="button"
                    className="sidebar-link"
                >
                    <FiList />

                    <span>
                        My Playlist
                    </span>
                </button>


                <button
                    type="button"
                    className="sidebar-link"
                >
                    <FiHeart />

                    <span>
                        Liked Songs
                    </span>
                </button>

            </div>


        </aside>

    );
}


export default Sidebar;