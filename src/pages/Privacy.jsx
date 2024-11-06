import React from 'react';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-teal-500">Privacy Policy</h1>
      <div className="bg-dark-300 p-6 rounded-lg shadow-md text-gray-300">
        <p className="mb-4">
          This Privacy Policy describes how TandemFlow ("we," "our," or "us") collects, uses, and protects your personal information. By using our services, you consent to the data practices described in this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white">1. Information Collection</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, including but not limited to:
          <ul className="list-disc ml-6 mt-2">
            <li>Contact information (name, email, phone number)</li>
            <li>Business information</li>
            <li>Payment details</li>
            <li>Communication preferences</li>
            <li>Service usage data</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white">2. Use of Information</h2>
        <p className="mb-4">
          We use collected information to:
          <ul className="list-disc ml-6 mt-2">
            <li>Provide and improve our services</li>
            <li>Process payments and transactions</li>
            <li>Send administrative communications</li>
            <li>Respond to inquiries and support requests</li>
            <li>Analyze service usage and optimize performance</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white">3. Data Protection</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security assessments. However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Sharing</h2>
        <p className="mb-4">
          We do not sell your personal information. We may share data with:
          <ul className="list-disc ml-6 mt-2">
            <li>Service providers who assist our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your explicit consent</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to:
          <ul className="list-disc ml-6 mt-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request data deletion</li>
            <li>Opt-out of marketing communications</li>
            <li>Export your data</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white">6. Cookies and Tracking</h2>
        <p className="mb-4">
          We use cookies and similar technologies to improve user experience and analyze service usage. You can control cookie preferences through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white">7. Policy Updates</h2>
        <p className="mb-4">
          We may update this policy periodically. Significant changes will be notified through our service or via email. Continued use of our services after changes constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white">8. Contact Us</h2>
        <p>
          For privacy-related inquiries or to exercise your rights, please contact our Data Protection Officer at privacy@tandemflow.com.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
