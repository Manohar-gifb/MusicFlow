
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FiUser,
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
    FiArrowLeft,
    FiMusic
} from "react-icons/fi";

import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async (event) => {

        event.preventDefault();

        setMessage("");

        // Check password
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {

            setLoading(true);

            const response = await fetch(
                "http://localhost:8081/api/auth/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password
                    })
                }
            );

            const result = await response.text();

            console.log("Backend response:", result);

            setMessage(result);

            // Registration successful
            if (result === "Registration successful") {

                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            }

        } catch (error) {

            console.error(
                "Registration error:",
                error
            );

            setMessage(
                "Unable to connect to server"
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="register-page">

            {/* LEFT SIDE */}

            <div className="register-left">

                <button
                    className="register-back"
                    onClick={() => navigate("/login")}
                >
                    <FiArrowLeft />
                    Back to login
                </button>

                <div className="register-brand">

                    <div className="register-logo">
                        <FiMusic />
                    </div>

                    <span>
                        MusicFlow
                    </span>

                </div>

                <div className="register-message">

                    <span>
                        JOIN THE EXPERIENCE
                    </span>

                    <h1>
                        Your music.
                        <br />
                        <strong>Your world.</strong>
                    </h1>

                    <p>
                        Create your MusicFlow account and start
                        discovering music that matches your mood.
                    </p>

                </div>

                <div className="register-decoration">

                    <div className="register-circle circle-one">
                        <FiMusic />
                    </div>

                    <div className="register-circle circle-two">
                        ♪
                    </div>

                </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="register-right">

                <div className="register-card">

                    {/* MOBILE BRAND */}

                    <div className="register-mobile-brand">

                        <div className="register-logo">
                            <FiMusic />
                        </div>

                        <span>
                            MusicFlow
                        </span>

                    </div>


                    {/* HEADING */}

                    <div className="register-heading">

                        <span>
                            CREATE ACCOUNT
                        </span>

                        <h2>
                            Join
                            <br />
                            <strong>MusicFlow.</strong>
                        </h2>

                        <p>
                            Create your account and start listening.
                        </p>

                    </div>


                    {/* REGISTER FORM */}

                    <form onSubmit={handleRegister}>

                        {/* NAME */}

                        <div className="register-input-group">

                            <label>
                                Full name
                            </label>

                            <div className="register-input-wrapper">

                                <FiUser />

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                    required
                                />

                            </div>

                        </div>


                        {/* EMAIL */}

                        <div className="register-input-group">

                            <label>
                                Email address
                            </label>

                            <div className="register-input-wrapper">

                                <FiMail />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    required
                                />

                            </div>

                        </div>


                        {/* PASSWORD */}

                        <div className="register-input-group">

                            <label>
                                Password
                            </label>

                            <div className="register-input-wrapper">

                                <FiLock />

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Create a password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    required
                                />

                                <button
                                    type="button"
                                    className="register-eye"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >
                                    {showPassword ? (
                                        <FiEyeOff />
                                    ) : (
                                        <FiEye />
                                    )}
                                </button>

                            </div>

                        </div>


                        {/* CONFIRM PASSWORD */}

                        <div className="register-input-group">

                            <label>
                                Confirm password
                            </label>

                            <div className="register-input-wrapper">

                                <FiLock />

                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(event) =>
                                        setConfirmPassword(
                                            event.target.value
                                        )
                                    }
                                    required
                                />

                                <button
                                    type="button"
                                    className="register-eye"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >
                                    {showConfirmPassword ? (
                                        <FiEyeOff />
                                    ) : (
                                        <FiEye />
                                    )}
                                </button>

                            </div>

                        </div>


                        {/* MESSAGE */}

                        {message && (
                            <div className="register-message-text">
                                {message}
                            </div>
                        )}


                        {/* REGISTER BUTTON */}

                        <button
                            type="submit"
                            className="register-button"
                            disabled={loading}
                        >

                            {loading
                                ? "Creating Account..."
                                : "Create Account"}

                        </button>

                    </form>


                    {/* LOGIN */}

                    <div className="already-account">

                        <span>
                            Already have an account?
                        </span>

                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                        >
                            Sign in
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;
