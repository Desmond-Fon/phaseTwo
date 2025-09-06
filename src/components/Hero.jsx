// components/Hero.js
const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20 text-center">
      <h1 className="text-3xl md:text-5xl font-bold">
        Welcome to Our Platform
      </h1>
      <p className="mt-4 text-lg">Start learning and growing with us today</p>
      <Button variant="primary" className="mt-8">
        Get Started
      </Button>
    </section>
  );
};

export default Hero;
