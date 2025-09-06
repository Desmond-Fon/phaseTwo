import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField.";
import Button from "../../components/Button";
import { register } from "../../utils/api";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setLoading(true);
        setError(null);

        try {
            const response = await register(name, email, password);
            if (response?.token) {
                alert("Signup successful!");
                navigate("/login");
            }
        } catch (err) {
            console.log(err)
            setError("Failed to sign up. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-50">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-bold text-blue-600 mb-6">Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputField
                            label="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <InputField
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <InputField
                            label="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your phone number"
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

                    <div className="mb-4">
                        <InputField
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    {error && <Alert message={error} type="error" />}

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </Button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-blue-600">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-800 underline">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;