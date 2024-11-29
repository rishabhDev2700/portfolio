import React from 'react'

export default function page() {
  return (
      <main className="py-12">
          <div className="container mx-auto px-6">
              <section className="mb-12">
                  <h2 className="text-3xl font-semibold text-center mb-6">What We Offer</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                          {
                              title: 'iOS App Development',
                              description: 'Build high-quality apps tailored for Apple devices.',
                          },
                          {
                              title: 'Android App Development',
                              description: 'Develop robust apps for the Android ecosystem.',
                          },
                          {
                              title: 'Cross-Platform Apps',
                              description: 'Create apps that work seamlessly across iOS and Android.',
                          },
                          {
                              title: 'UI/UX Design',
                              description: 'Craft engaging and intuitive interfaces for your app.',
                          },
                          {
                              title: 'App Testing & QA',
                              description: 'Ensure your app is bug-free and performs perfectly.',
                          },
                          {
                              title: 'App Maintenance & Updates',
                              description: 'Keep your app running smoothly with regular updates.',
                          },
                      ].map((service, index) => (
                          <div
                              key={index}
                              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                          >
                              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                              <p>{service.description}</p>
                          </div>
                      ))}
                  </div>
              </section>
              <section className="bg-green-100 py-12 text-center">
                  <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                  <p className="mb-6 text-lg">
                      Partner with us for top-notch mobile app solutions designed for success.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                          'Expert Mobile Developers',
                          'Cutting-Edge Technologies',
                          'Fast Delivery',
                          'User-Centric Approach',
                      ].map((benefit, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow">
                              <p className="font-semibold">{benefit}</p>
                          </div>
                      ))}
                  </div>
              </section>
              <section className="text-center py-12">
                  <h2 className="text-3xl font-semibold mb-6">Let’s Build Your Mobile App!</h2>
                  <p className="mb-6 text-lg">
                      Ready to bring your app idea to life? Contact us today and let's get started.
                  </p>
                  <a
                      href="/contact"
                      className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
                  >
                      Contact Us
                  </a>
              </section>
          </div>
      </main>
  )
}
