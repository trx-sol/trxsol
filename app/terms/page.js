import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black">
      <PageHero
        title="Terms of Service"
        description="Our terms and conditions for using our services"
      />

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-trx-purple/10 via-transparent to-trx-cyan/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-effect border border-trx-purple/20 bg-black/40 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-300 mb-6">
                  By accessing and using our services, you accept and agree to
                  be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Services Description
                </h2>
                <p className="text-gray-300 mb-6">
                  We provide website design, development, SEO, digital
                  marketing, and related technology services to businesses and
                  individuals.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Payment Terms
                </h2>
                <p className="text-gray-300 mb-6">
                  Payment terms will be specified in individual project
                  agreements. We require a deposit before starting work, with
                  remaining balance due upon project completion.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Project Timeline
                </h2>
                <p className="text-gray-300 mb-6">
                  Project timelines are estimates and may vary based on
                  complexity and client feedback. We will communicate any delays
                  promptly.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Intellectual Property
                </h2>
                <p className="text-gray-300 mb-6">
                  Upon full payment, clients own the final deliverables. We
                  retain rights to showcase work in our portfolio unless
                  otherwise agreed.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Limitation of Liability
                </h2>
                <p className="text-gray-300 mb-6">
                  Our liability is limited to the amount paid for services. We
                  are not liable for indirect, incidental, or consequential
                  damages.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Termination
                </h2>
                <p className="text-gray-300 mb-6">
                  Either party may terminate services with written notice.
                  Clients are responsible for payment of work completed up to
                  termination date.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Governing Law
                </h2>
                <p className="text-gray-300 mb-6">
                  These terms are governed by the laws of India and the United
                  States, depending on the location of service provision.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-6">
                  For questions about these terms, contact us at{" "}
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
