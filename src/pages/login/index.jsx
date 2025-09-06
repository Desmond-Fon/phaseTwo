import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField.";
import { login } from "../../utils/api";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await login(email, password);
            if (response?.token) {
                if (rememberMe) {
                    localStorage.setItem("token", response.token);
                } else {
                    sessionStorage.setItem("token", response.token);
                }
                navigate("/dashboard");
            }
        } catch (err) {
            console.log(err)
            setError("Failed to log in. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-50">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-bold text-blue-600 mb-6">Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <InputField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-700">Remember me</label>
                    </div>

                    {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Log In"}
                    </Button>
                </form>

                <div className="text-center mt-4">
                    <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                        Forgot Password?
                    </a>
                </div>

                {/* Sign Up Link */}
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-700">
                        Don't have an account?{" "}
                        <a href="/signup" className="text-blue-600 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;