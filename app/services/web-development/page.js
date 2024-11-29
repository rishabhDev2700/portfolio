
export default function WebDevPage() {
  return (
      <main className="py-12">
          <div className="container mx-auto px-6">
              <section className="mb-12">
                  <h2 className="text-3xl font-semibold text-center mb-6">What We Offer</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                          {
                              title: 'Custom Website Development',
                              description: 'Tailored solutions to meet your business needs.',
                          },
                          {
                              title: 'E-Commerce Solutions',
                              description: 'Build and scale online stores with seamless experiences.',
                          },
                          {
                              title: 'Website Redesign',
                              description: 'Upgrade your existing website for modern trends and technology.',
                          },
                          {
                              title: 'Web Applications',
                              description: 'Interactive and dynamic web apps for your business.',
                          },
                          {
                              title: 'SEO Optimization',
                              description: 'Improve search rankings with our SEO strategies.',
                          },
                          {
                              title: 'Maintenance & Support',
                              description: 'Keep your website secure, updated, and error-free.',
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
              <section className="bg-blue-100 py-12 text-center">
                  <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                  <p className="mb-6 text-lg">
                      Our team is committed to delivering excellence with cutting-edge technologies and
                      creative designs.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                          'Experienced Developers',
                          'Scalable Solutions',
                          'On-Time Delivery',
                          'Customer-Centric Approach',
                      ].map((benefit, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow">
                              <p className="font-semibold">{benefit}</p>
                          </div>
                      ))}
                  </div>
              </section>
              <section className="text-center py-12">
                  <h2 className="text-3xl font-semibold mb-6">Let’s Build Something Amazing!</h2>
                  <p className="mb-6 text-lg">
                      Ready to start your project? Get in touch with us today and transform your ideas into
                      reality.
                  </p>
                  <a
                      href="/contact"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                      Contact Us
                  </a>
              </section>
          </div>
      </main>
  )
}
