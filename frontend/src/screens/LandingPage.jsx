import React from 'react';
import { GlobeAltIcon, PhotoIcon, UserGroupIcon, BeakerIcon } from '@heroicons/react/24/outline';

const LandingPage = ({ onLogin }) => {
  const features = [
    {
      name: 'Catalog Every Variety',
      description: 'Document the name, origin, and unique characteristics of every pear you discover.',
      icon: PhotoIcon,
    },
    {
      name: 'Track Ripeness',
      description: 'Never miss the perfect moment. Log the ripeness stage from crisp and unripe to sweet and juicy.',
      icon: BeakerIcon,
    },
    {
      name: 'Share with the Community',
      description: 'Contribute to a growing, global database of pear varieties for enthusiasts everywhere.',
      icon: UserGroupIcon,
    },
    {
      name: 'Powered by Manifest',
      description: 'Built on a secure and scalable backend, providing a seamless experience without the boilerplate.',
      icon: GlobeAltIcon,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="text-2xl">🍐</span>
              <span className="ml-2 text-xl font-bold text-gray-900">Pearadise</span>
            </a>
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <a href="/admin" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 mr-6">
              Admin Panel <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative isolate pt-14">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a8e063] to-[#56ab2f] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Discover and Catalog the World of Pears
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  From Anjou to Comice, Pearadise is your personal encyclopedia for every pear variety you encounter. Track, rate, and share your juicy finds.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button
                    onClick={onLogin}
                    className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Explore with Demo Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-green-600">Everything You Need</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Ultimate Companion for Pear Enthusiasts
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Pearadise, Inc. All rights reserved. A Manifest-powered application.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
