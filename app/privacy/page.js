import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">
      <PageHero
        title="Privacy Policy"
        description="Learn how we protect and handle your personal information"
      />

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/10 via-transparent to-trx-cyan/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-effect border border-trx-purple/20 bg-black/40 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Information We Collect
                </h2>
                <p className="text-gray-300 mb-6">
                  We collect information you provide directly to us, such as
                  when you contact us, request a quote, or sign up for our
                  services. This may include your name, email address, phone
                  number, and project details.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  How We Use Your Information
                </h2>
                <p className="text-gray-300 mb-6">
                  We use the information we collect to provide our services,
                  communicate with you, improve our offerings, and ensure the
                  security of our systems.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Information Sharing
                </h2>
                <p className="text-gray-300 mb-6">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  required by law or to protect our rights.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Data Security
                </h2>
                <p className="text-gray-300 mb-6">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Cookies and Tracking
                </h2>
                <p className="text-gray-300 mb-6">
                  We use cookies and similar technologies to enhance your
                  experience on our website and analyze site traffic. You can
                  control cookie settings through your browser.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Your Rights
                </h2>
                <p className="text-gray-300 mb-6">
                  You have the right to access, update, or delete your personal
                  information. Contact us to exercise these rights.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Us
                </h2>
                <p className="text-gray-300 mb-6">
                  If you have questions about this Privacy Policy, please
                  contact us at{" "}
                  <a
                    href="mailto:trxsol25@gmail.com"
                    className="text-trx-cyan hover:underline"
                  >
                    trxsol25@gmail.com
                  </a>
                </p>

                <p className="text-gray-400 text-sm mt-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
