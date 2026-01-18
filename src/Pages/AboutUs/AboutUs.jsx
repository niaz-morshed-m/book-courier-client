import { FaBookReader, FaTruck, FaUsers, FaGlobe } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-base-100">
      {/* Header Section */}
      <div className="bg-primary py-16 text-primary-content text-center">
        <h1 className="text-5xl font-bold mb-4">About BookCourier</h1>
        <p className="text-xl max-w-2xl mx-auto px-4">
          Revolutionizing the way you access knowledge by bringing the library
          directly to your doorstep.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2670&auto=format&fit=crop"
              alt="Library"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-base-content/70 mb-6">
              At BookCourier, we believe that physical distance should never be
              a barrier to education and literature. Our platform connects
              students, researchers, and avid readers with local libraries
              through a seamless delivery and return system.
            </p>
            <p className="text-lg text-base-content/70">
              By digitizing the logistics of borrowing, we help libraries reach
              more people and help readers save time, making the world a more
              literate and connected place.
            </p>
          </div>
        </div>
      </div>

      {/* Stats / Core Values Section */}
      <div className="bg-base-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-100 p-8 shadow-sm text-center">
              <FaBookReader className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Accessibility</h3>
              <p className="text-sm opacity-70">
                Making every book in the city available to everyone.
              </p>
            </div>
            <div className="card bg-base-100 p-8 shadow-sm text-center">
              <FaTruck className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Efficiency</h3>
              <p className="text-sm opacity-70">
                Fast, reliable delivery and automated return tracking.
              </p>
            </div>
            <div className="card bg-base-100 p-8 shadow-sm text-center">
              <FaUsers className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Community</h3>
              <p className="text-sm opacity-70">
                Supporting local libraries and promoting a culture of reading.
              </p>
            </div>
            <div className="card bg-base-100 p-8 shadow-sm text-center">
              <FaGlobe className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Sustainability</h3>
              <p className="text-sm opacity-70">
                Reducing the need for individual travel through optimized
                delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder / Message Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="avatar mb-6">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Founder"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold">A Message from the Developer</h2>
        <p className="max-w-2xl mx-auto mt-4 text-base-content/70 italic">
          "BookCourier was built out of a passion for technology and a love for
          books. As a developer, I wanted to create a solution that solves a
          real-world problem for students and researchers who struggle to
          balance time and learning."
        </p>
        <div className="mt-8">
          <button className="btn btn-primary">Join Our Community</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
