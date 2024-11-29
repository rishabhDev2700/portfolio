import React from 'react'

export default function page() {
    return (
        <main className="py-12">
            <div className="container mx-auto px-6">
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-center mb-6">Our Courses</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Beginner Programming',
                                description: 'Start your coding journey with Python, JavaScript, or C++.',
                            },
                            {
                                title: 'Web Development',
                                description: 'Learn to build modern websites with HTML, CSS, JavaScript, and React.',
                            },
                            {
                                title: 'Data Structures & Algorithms',
                                description: 'Master problem-solving skills essential for interviews.',
                            },
                            {
                                title: 'Backend Development',
                                description: 'Dive into server-side programming with Node.js, Django, or Go.',
                            },
                            {
                                title: 'Mobile App Development',
                                description: 'Create cross-platform mobile apps using Flutter or React Native.',
                            },
                            {
                                title: 'AI & Machine Learning',
                                description: 'Understand AI fundamentals and work on real-world ML projects.',
                            },
                        ].map((course, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                                <p>{course.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="bg-purple-100 py-12 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Why Learn With Us?</h2>
                    <p className="mb-6 text-lg">
                        Get personalized mentorship, real-world projects, and access to an ever-growing
                        community of learners.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            'Expert Instructors',
                            'Practical Learning',
                            'Flexible Schedules',
                            'Certificate of Completion',
                        ].map((benefit, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow">
                                <p className="font-semibold">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="text-center py-12">
                    <h2 className="text-3xl font-semibold mb-6">Start Your Learning Journey!</h2>
                    <p className="mb-6 text-lg">
                        Whether you're a beginner or a seasoned developer, we have a course for you. Enroll
                        now and level up your programming skills!
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
                    >
                        Get in Touch
                    </a>
                </section>
            </div>
        </main>
    )
}
