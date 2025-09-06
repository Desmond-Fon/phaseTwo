import { useState } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField.";
import { resetPassword } from "../../utils/api"; // Assuming the resetPassword function is set in the utils/api.js

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        setError(null);

        try {
            // Assuming resetPassword function handles the API call
            const response = await resetPassword(email);
            if (response?.status === 200) {
                setMessage("Password reset email sent successfully. Please check your inbox.");
            }
        } catch (err) {
            console.log(err)
            setError("Failed to reset password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-50">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-bold text-blue-600 mb-6">Forgot Password</h2>

                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
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

                    {/* Error Message */}
                    {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

                    {/* Success Message */}
                    {message && <div className="text-green-500 text-sm mb-4">{message}</div>}

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Reset Password"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;