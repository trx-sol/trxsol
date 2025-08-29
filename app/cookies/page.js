import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black">
      <PageHero
        title="Cookie Policy"
        description="How we use cookies and similar technologies"
      />

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/10 via-transparent to-trx-cyan/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-effect border border-trx-purple/20 bg-black/40 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">
                  What Are Cookies?
                </h2>
                <p className="text-gray-300 mb-6">
                  Cookies are small text files stored on your device when you
                  visit our website. They help us provide a better experience
                  and understand how you use our site.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Essential Cookies
                    </h3>
                    <p className="text-gray-300">
                      Required for basic website functionality and security.
                      These cannot be disabled.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Analytics Cookies
                    </h3>
                    <p className="text-gray-300">
                      Help us understand how visitors interact with our website
                      to improve performance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Functional Cookies
                    </h3>
                    <p className="text-gray-300">
                      Remember your preferences and provide enhanced features.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Third-Party Cookies
                </h2>
                <p className="text-gray-300 mb-6">
                  We may use third-party services that place their own cookies.
                  These services help us with analytics, advertising, and social
                  media integration.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Managing Cookies
                </h2>
                <p className="text-gray-300 mb-6">
                  You can control and manage cookies through your browser
                  settings. However, disabling certain cookies may affect
                  website functionality.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Cookie Consent
                </h2>
                <p className="text-gray-300 mb-6">
                  By using our website, you consent to our use of cookies as
                  described in this policy. You can withdraw consent at any time
                  by changing your browser settings.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Updates to This Policy
                </h2>
                <p className="text-gray-300 mb-6">
                  We may update this Cookie Policy from time to time. Please
                  check back regularly for any changes.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Us
                </h2>
                <p className="text-gray-300 mb-6">
                  If you have questions about our Cookie Policy, contact us at{" "}
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
