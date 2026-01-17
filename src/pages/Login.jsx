import { useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const result = await signIn(email, password);

        // 🔐 Get JWT
        const res = await axios.post("http://localhost:5000/jwt", {
            email: result.user.email,
        });

        localStorage.setItem("access-token", res.data.token);
        navigate(from, { replace: true });
    };

    const handleGoogle = async () => {
        const result = await googleSignIn();

        const res = await axios.post("http://localhost:5000/jwt", {
            email: result.user.email,
        });

        localStorage.setItem("access-token", res.data.token);
        navigate(from, { replace: true });
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input name="email" type="email" required />
                <input name="password" type="password" required />
                <button type="submit">Login</button>
                <button onClick={handleGoogle} type="button">
                    Google Login
                </button>
            </form>
            <p>
                New here? <Link to="/register">Register</Link>
            </p>

        </div>


    );
};

export default Login;
