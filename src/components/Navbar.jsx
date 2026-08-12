import { useState } from "react";

import {
    FiSearch,
    FiBell,
    FiSettings,
    FiUser,
    FiChevronDown
} from "react-icons/fi";

import "./Navbar.css";


function Navbar() {

    const [searchText, setSearchText] = useState("");

    const [showNotifications, setShowNotifications] = useState(false);

    const [showProfile, setShowProfile] = useState(false);


    /* =========================
       SEARCH
    ========================== */

    const handleSearch = (event) => {

        setSearchText(event.target.value);

    };


    /* =========================
       NOTIFICATION
    ========================== */

    const handleNotification = () => {

        setShowNotifications((previous) => !previous);

        setShowProfile(false);

    };


    /* =========================
       PROFILE
    ========================== */

    const handleProfile = () => {

        setShowProfile((previous) => !previous);

        setShowNotifications(false);

    };


    /* =========================
       SETTINGS
    ========================== */

    const handleSettings = () => {

        alert("Settings coming soon");

    };


    /* =========================
       RETURN
    ========================== */

    return (

        <header className="navbar">


            {/* =================================================
                SEARCH
            ================================================= */}

            <div className="navbar-search">

                <FiSearch className="search-icon" />

                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearch}
                    placeholder="Search for songs, artists etc..."
                    aria-label="Search for songs, artists and albums"
                />

            </div>



            {/* =================================================
                RIGHT SECTION
            ================================================= */}

            <div className="navbar-right">


                {/* =================================================
                    NOTIFICATION
                ================================================= */}

                <button
                    type="button"
                    className="navbar-icon-btn"
                    title="Notifications"
                    aria-label="Notifications"
                    onClick={handleNotification}
                >

                    <FiBell />

                </button>


                {showNotifications && (

                    <div className="navbar-popup notification-popup">

                        <h4>
                            Notifications
                        </h4>

                        <p>
                            No new notifications
                        </p>

                    </div>

                )}



                {/* =================================================
                    SETTINGS
                ================================================= */}

                <button
                    type="button"
                    className="navbar-icon-btn"
                    title="Settings"
                    aria-label="Settings"
                    onClick={handleSettings}
                >

                    <FiSettings />

                </button>



                {/* =================================================
                    PROFILE
                ================================================= */}

                <button
                    type="button"
                    className="navbar-profile"
                    title="Profile"
                    aria-label="Profile"
                    onClick={handleProfile}
                >

                    <div className="profile-image">

                        <FiUser />

                    </div>


                    <FiChevronDown
                        className={
                            showProfile
                                ? "profile-arrow profile-arrow-open"
                                : "profile-arrow"
                        }
                    />

                </button>


                {showProfile && (

                    <div className="navbar-popup profile-popup">


                        {/* USER */}

                        <div className="popup-user">

                            <div className="popup-user-image">

                                <FiUser />

                            </div>


                            <div>

                                <strong>
                                    Music User
                                </strong>

                                <span>
                                    Listener
                                </span>

                            </div>

                        </div>


                        {/* MENU */}

                        <button type="button">
                            My Profile
                        </button>

                        <button type="button">
                            Settings
                        </button>

                        <button type="button">
                            Logout
                        </button>

                    </div>

                )}

            </div>

        </header>

    );
}


export default Navbar;