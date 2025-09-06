import { CheckCircle, Info, Users, LifeBuoy, Home, Menu } from "lucide-react";
import Button from "../../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const LandingPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-gradient-to-b from-[#1e3c72] to-[#2a5298] sticky top-0 text-white p-4">
                <div className="container mx-auto flex lg:px-16 justify-between items-center">
                    {/* Logo */}
                    <img src="logo.png" alt="Logo" className="w-20" />
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-6">
                        <Link to="/" className="hover:text-blue-300">Home</Link>
    
                        <Link to="/login" className="hover:text-blue-300">Login</Link>
                        <Link to="/signup" className="hover:text-blue-300">Sign Up</Link>
                    </div>
                    {/* Mobile Menu Icon */}
                    <div className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <Menu className="w-6 h-6" />
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden  text-white py-4 space-y-4">
                        <Link to="/" className="block text-center hover:text-blue-300">Home</Link>
                       
                        <Link to="/login" className="block text-center hover:text-blue-300">Login</Link>
                        <Link to="/signup" className="block text-center hover:text-blue-300">Sign Up</Link>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#1e3c72] to-[#2a5298] text-white">
                <div className="container mx-auto py-16 px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
                    <div className="max-w-lg text-center lg:text-left">
                        <img src="logo.png" alt="Logo" className="mb-4 w-40 mx-auto lg:mx-0" />
                        <h1 className="text-4xl lg:text-5xl font-semibold mb-4 tracking-tight leading-tight">
                            Your Next Big Step Starts Here
                        </h1>
                        <p className="text-lg mb-6">
                            Discover amazing features that help you achieve your goals with ease and efficiency.
                        </p>
                        <Button className="px-6 py-3 text-xl bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300">
                            Get Started
                        </Button>
                    </div>
                    <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                        <img src="hero-banner.png" alt="Illustration" className="w-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-8">
                    <h2 className="text-3xl font-semibold text-center mb-12">Our Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:px-[200px] gap-8">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            <Home className="w-12 h-12 text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
                            <p className="text-center text-gray-600">
                                Brief description of feature one. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            <Users className="w-12 h-12 text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
                            <p className="text-center text-gray-600">
                                Brief description of feature two. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            <LifeBuoy className="w-12 h-12 text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
                            <p className="text-center text-gray-600">
                                Brief description of feature three. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            <Info className="w-12 h-12 text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Feature Four</h3>
                            <p className="text-center text-gray-600">
                                Brief description of feature four. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-blue-100 py-16">
                <div className="container mx-auto px-8 text-center">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-4">About Us</h2>
                    <p className="text-lg text-gray-700 mb-6 lg:px-[300px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus amet quae aliquid beatae nisi esse eaque et! Odit repellendus mollitia accusantium earum neque illum, maxime fugiat rem. Quibusdam, suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam excepturi perspiciatis architecto, non accusantium molestias maiores dolorum dolore at voluptate libero, ad facilis esse ratione. Expedita ullam nam eum iure!
                    </p>
                    <Button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
                        Learn More
                    </Button>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-blue-600 text-white py-8">
                <div className="container mx-auto px-8 flex flex-col lg:flex-row justify-center lg:justify-between items-center flex-wrap">
                    <div className="w-full text-center lg:text-left lg:w-auto">
                        <h3 className="text-lg font-semibold">Company Name</h3>
                        <p className="text-sm text-gray-200">© 2022 All Rights Reserved.</p>
                    </div>
                    <div className="flex text-center lg:text-left flex-wrap gap-6 mt-4 lg:mt-0">
                        <a href="#" className="text-gray-200 hover:text-white">About</a>
                        <a href="#" className="text-gray-200 hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-gray-200 hover:text-white">Contact</a>
                    </div>
                    <div className="flex text-center lg:text-left gap-4 mt-4 lg:mt-0">
                        <a href="#" className="text-gray-200 hover:text-white">Facebook</a>
                        <a href="#" className="text-gray-200 hover:text-white">Twitter</a>
                        <a href="#" className="text-gray-200 hover:text-white">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;