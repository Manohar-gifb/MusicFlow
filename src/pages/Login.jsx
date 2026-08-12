import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
    FiArrowLeft,
    FiMusic
} from "react-icons/fi";

import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (event) => {

        event.preventDefault();

        setMessage("");

        try {

            setLoading(true);

            const response = await fetch(
                `http://localhost:8081/api/auth/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
                {
                    method: "POST"
                }
            );

            const result = await response.text();

            console.log("Login response:", result);

            if (response.ok && result === "Login successful") {

                setMessage("Login successful!");

                // Redirect to Home
                setTimeout(() => {
                    navigate("/dashboard");
                }, 700);

            } else {

                setMessage(result);

            }

        } catch (error) {

            console.error("Login error:", error);

            setMessage(
                "Unable to connect to server. Please try again."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="login-page">

            {/* LEFT SIDE */}

            <div className="login-left">

                <button
                    className="back-home"
                    onClick={() => navigate("/")}
                >
                    <FiArrowLeft />
                    Back to home
                </button>


                <div className="login-brand">

                    <div className="login-logo">
                        <FiMusic />
                    </div>

                    <span>
                        MusicFlow
                    </span>

                </div>


                <div className="login-message">

                    <span className="login-label">
                        YOUR MUSIC. YOUR MOMENT.
                    </span>

                    <h1>
                        Music that
                        <br />
                        <span>moves you.</span>
                    </h1>

                    <p>
                        Sign in and continue discovering new
                        sounds, favorite artists and music made
                        for your mood.
                    </p>

                </div>


                <div className="login-decoration">

                    <div className="login-circle circle-one">
                        <FiMusic />
                    </div>

                    <div className="login-circle circle-two">
                        ♪
                    </div>

                    <div className="login-wave">

                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="login-right">

                <div className="login-card">


                    {/* MOBILE LOGO */}

                    <div className="mobile-logo">

                        <div className="login-logo">
                            <FiMusic />
                        </div>

                        <span>
                            MusicFlow
                        </span>

                    </div>


                    {/* HEADING */}

                    <div className="login-heading">

                        <span>
                            WELCOME BACK
                        </span>

                        <h2>
                            Sign in to
                            <br />
                            <strong>MusicFlow.</strong>
                        </h2>

                        <p>
                            Enter your details to continue listening.
                        </p>

                    </div>


                    {/* LOGIN FORM */}

                    <form onSubmit={handleLogin}>


                        {/* EMAIL */}

                        <div className="input-group">

                            <label htmlFor="email">
                                Email address
                            </label>

                            <div className="input-wrapper">

                                <FiMail />

                                <input
                                    id="email"
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

                        <div className="input-group">

                            <div className="password-label">

                                <label htmlFor="password">
                                    Password
                                </label>

                                <button
                                    type="button"
                                    className="forgot-password"
                                    onClick={() =>
                                        setMessage(
                                            "Forgot password feature will be added later."
                                        )
                                    }
                                >
                                    Forgot password?
                                </button>

                            </div>


                            <div className="input-wrapper">

                                <FiLock />

                                <input
                                    id="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    required
                                />


                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                    title={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
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


                        {/* REMEMBER ME */}

                        <div className="login-options">

                            <label className="remember-me">

                                <input
                                    type="checkbox"
                                />

                                <span>
                                    Remember me
                                </span>

                            </label>

                        </div>


                        {/* MESSAGE */}

                        {message && (
                            <div className="login-status">
                                {message}
                            </div>
                        )}


                        {/* LOGIN BUTTON */}

                        <button
                            type="submit"
                            className="login-button"
                            disabled={loading}
                        >

                            {loading
                                ? "Signing in..."
                                : "Sign In"}

                        </button>

                    </form>


                    {/* DIVIDER */}

                    <div className="login-divider">

                        <span></span>

                        <p>
                            OR
                        </p>

                        <span></span>

                    </div>


                    {/* SOCIAL LOGIN */}

                    <div className="social-login">

                        <button type="button">

                            <strong>
                                G
                            </strong>

                            Continue with Google

                        </button>


                        <button type="button">

                            <strong>
                                f
                            </strong>

                            Continue with Facebook

                        </button>

                    </div>


                    {/* REGISTER */}

                    <div className="register-text">

                        <p>
                            Don't have an account?
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                navigate("/register")
                            }
                        >
                            Create account
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;

