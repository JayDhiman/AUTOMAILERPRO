import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const Home = () => {
  const features = [
    {
      title: 'Visual Flowchart Design',
      description:
        'Create and manage email campaigns using an intuitive drag-and-drop flowchart interface powered by React Flow.',
      icon: 'flowchart',
    },
    {
      title: 'Cold Email Templates',
      description:
        'Quickly draft and send cold emails using pre-defined or custom templates.',
      icon: 'email',
    },
    {
      title: 'Wait/Delay Nodes',
      description:
        'Add custom delays between emails to optimize engagement rates.',
      icon: 'timer',
    },
    {
      title: 'Lead Source Integration',
      description:
        'Integrate lead sources directly into your email marketing sequences.',
      icon: 'leads',
    },
    {
      title: 'Advanced Scheduling',
      description:
        'Use Agenda to schedule emails with precision, ensuring timely communication.',
      icon: 'calendar',
    },
    {
      title: 'Secure Authentication',
      description: 'Ensure data protection with secure user authentication.',
      icon: 'lock',
    },
  ];

  return (
    <div className="relative bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="relative z-20">
        <Navbar />
      </header>

      {/* Hero Section */}
      <div className="absolute top-0 w-full">
      <main className="relative bg-blue-600 text-white h-screen flex items-center justify-center">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://source.unsplash.com/1920x1080/?email,marketing')",
    }}
  ></div>
  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
      WELCOME  TO <br /> AUTOEMAILER
    </h1>
    <p className="mt-6 text-lg leading-7 text-blue-200 max-w-2xl mx-auto">
      Design, implement, and execute email marketing flows with a visual
      flowchart interface. Utilize React Flow, Tailwind CSS, Agenda, and
      Nodemailer for maximum efficiency.
    </p>
    <div className="mt-8">
      <Link
        to="/features"
        className="inline-block px-6 py-3 rounded-lg shadow-lg bg-white text-blue-600 font-medium hover:bg-blue-100"
      >
        Explore Features
      </Link>
    </div>
  </div>
</main>


      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Take your email marketing to the next level.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                  <i className={`ri-${feature.icon}-line text-2xl`}></i>
                </div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg">
            Build your next email marketing campaign with ease and precision.
          </p>
          <div className="mt-8">
            <Link
              to="/login"
              className="px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-100 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative">
        <Footer />
      </footer>
      </div>
    </div>
  );
};

export default Home;
