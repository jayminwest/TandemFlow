import React from 'react';

const Legal = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-teal-500">Legal Information</h1>
      <div className="bg-dark-300 p-6 rounded-lg shadow-md text-gray-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">Terms of Service</h2>
        <p className="mb-4">
          By accessing or using TandemFlow's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">1. Service Description</h3>
        <p className="mb-4">
          TandemFlow provides automation and consulting services. While we strive for excellence, we make no guarantees about specific outcomes or results. All services are provided "as is" and "as available."
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">2. Payment and Refunds</h3>
        <p className="mb-4">
          Services are billed in advance on a subscription basis. No refunds will be issued for partial months of service or unused services. We reserve the right to modify pricing with 30 days notice.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">3. Intellectual Property Rights</h3>
        <p className="mb-4">
          All materials, processes, and methodologies developed by TandemFlow remain our exclusive property. Clients retain ownership of their pre-existing intellectual property and data provided to us.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">4. Confidentiality</h3>
        <p className="mb-4">
          We maintain strict confidentiality of all client information. However, we may use anonymized data and general project outcomes for marketing purposes unless explicitly prohibited by written agreement.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">5. Limitation of Liability</h3>
        <p className="mb-4">
          TandemFlow's liability shall be limited to the amount paid for services in the previous 12 months. We are not liable for any indirect, consequential, special, or punitive damages.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">6. Service Modification</h3>
        <p className="mb-4">
          We reserve the right to modify, suspend, or discontinue any part of our services at any time. Changes will be communicated with reasonable notice when possible.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">7. Termination</h3>
        <p className="mb-4">
          Either party may terminate services with 30 days written notice. We reserve the right to immediately terminate services for violations of these terms or non-payment.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">8. Governing Law</h3>
        <p>
          These terms are governed by and construed in accordance with the laws of the United States. Any disputes shall be subject to binding arbitration in the jurisdiction of our primary business location.
        </p>
      </div>
    </div>
  );
};

export default Legal; 