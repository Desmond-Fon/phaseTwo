import Button from "../../components/Button"; // Assuming Button component is in this path
// import InputField from "../../components/InputField"; // Assuming InputField is available

const LandingPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#1e3c72] to-[#2a5298] text-white">
                <div className="container mx-auto py-16 px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
                    <div className="max-w-lg">
                        <img src="logo.png" alt="Logo" className="mb-4" />
                        <h1 className="text-4xl font-semibold mb-4">
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
                        <img src="hero-banner.png" alt="Illustration" className="w-full" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-8">
                    <h2 className="text-3xl font-semibold text-center mb-12">Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                            <img src="feature-icon1.png" alt="Feature Icon 1" className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
                            <p className="text-center text-gray-600">
                                Brief description of feature one. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                            <img src="feature-icon2.png" alt="Feature Icon 2" className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
                            <p className="text-center text-gray-600">
                                Brief description of feature two. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                            <img src="feature-icon3.png" alt="Feature Icon 3" className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
                            <p className="text-center text-gray-600">
                                Brief description of feature three. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                            <img src="feature-icon4.png" alt="Feature Icon 4" className="w-12 h-12 mb-4" />
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
                    <p className="text-lg text-gray-700 mb-6">
                        Our platform is designed to help you make meaningful progress in achieving your goals with cutting-edge tools and personalized strategies.
                    </p>
                    <Button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
                        Learn More
                    </Button>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-blue-600 text-white py-8">
                <div className="container mx-auto px-8 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold">Company Name</h3>
                        <p className="text-sm text-gray-200">© 2022 All Rights Reserved.</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-200 hover:text-white">About</a>
                        <a href="#" className="text-gray-200 hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-gray-200 hover:text-white">Contact</a>
                    </div>
                    <div className="flex gap-4">
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