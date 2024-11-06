import React from 'react';

const Legal = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-teal-500">Legal Information</h1>
      <div className="bg-dark-300 p-6 rounded-lg shadow-md text-gray-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">Terms of Service</h2>
        <p className="mb-4">
          Welcome to TandemFlow. By using our services, you agree to comply with and be bound by the following terms and conditions.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-white">1. Use of Service</h3>
        <p className="mb-4">
          You agree to use TandemFlow's services only for lawful purposes and in accordance with these Terms of Service.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-white">2. Intellectual Property</h3>
        <p className="mb-4">
          All content, features, and functionality of TandemFlow's services are owned by TandemFlow and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-white">3. Limitation of Liability</h3>
        <p>
          TandemFlow shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </p>
      </div>
    </div>
  );
};

export default Legal;
