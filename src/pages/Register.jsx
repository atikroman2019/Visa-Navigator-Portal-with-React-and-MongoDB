import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // 🔐 Password validation
        if (password.length < 6) {
            return alert("Password must be at least 6 characters");
        }
        if (!/[A-Z]/.test(password)) {
            return alert("Password must contain at least one capital letter");
        }

        try {
            const result = await createUser(email, password);

            // update profile
            await updateUserProfile(name, photo);

            // 🔐 get JWT
            const res = await axios.post("http://localhost:5000/jwt", {
                email: result.user.email,
            });

            localStorage.setItem("access-token", res.data.token);
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <input name="name" placeholder="Full Name" required />
                <input name="photo" placeholder="Photo URL" />
                <input name="email" type="email" required />
                <input name="password" type="password" required />
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>

        </div>
    );
};

export default Register;
