import React from 'react';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-teal-500">Privacy Policy</h1>
      <div className="bg-dark-300 p-6 rounded-lg shadow-md text-gray-300">
        <p className="mb-4">
          At TandemFlow, we are committed to protecting your privacy and ensuring the security of your personal information.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
        <p className="mb-4">
          We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-white">Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect the security of your personal information.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
