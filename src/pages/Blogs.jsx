import React from 'react';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'Solving Healthcare Staffing Challenges',
      date: 'Mar 25, 2025',
      excerpt:
        'With rising patient demand and worker shortages, healthcare facilities face an urgent need for non-clinical support. Discover how strategic staffing is improving operational efficiency while reducing burnout.',
      img: 'https://images.unsplash.com/photo-1588776814546-ec7ec3f2c92e',
      link: '#'
    },
    {
      title: 'Mastering the Interview Process with E.A.S.E.',
      date: 'Mar 12, 2025',
      excerpt:
        'Many companies hire too quickly and pay the price later. Our E.A.S.E. method helps employers identify culture-fit candidates and avoid costly mis-hires.',
      img: 'https://images.unsplash.com/photo-1580894908361-967195033215',
      link: '#'
    },
    {
      title: 'Beating the ATS: Job Seeker Resume Tips',
      date: 'Mar 08, 2025',
      excerpt:
        'Over 90% of companies use Applicant Tracking Systems (ATS) that filter resumes before a human sees them. Learn how to craft resumes that pass the digital gatekeepers.',
      img: 'https://images.unsplash.com/photo-1531497865147-7f3c0c5ad01f',
      link: '#'
    }
  ];

  return (
    <div className="container-fluid py-5">
      {/* Blog Header */}
      <section className="text-center mb-5">
        <h2 className="display-5 fw-bold text-danger">Our Blog</h2>
        <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
          Stay informed with insights and strategies across hiring, workforce management, and talent acquisition.
        </p>
      </section>

      {/* Blog Cards */}
      <div className="row g-4">
        {blogPosts.map((post, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={post.img}
                className="card-img-top"
                alt={post.title}
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <small className="text-muted mb-2">{post.date} | Blog</small>
                <h5 className="card-title text-danger">{post.title}</h5>
                <p className="card-text">{post.excerpt}</p>
                <a href={post.link} className="mt-auto btn btn-outline-danger">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="text-center mt-5">
        <h4 className="fw-bold mb-3">Want to Talk to Us?</h4>
        <p className="lead">Call us at <a href="tel:9792362377" className="text-danger fw-bold">979-236-2377</a> or <a href="#" className="text-danger fw-bold">Get a Quote</a></p>
        <button className="btn btn-danger">Schedule an Appointment</button>
      </section>
    </div>
  );
};

export default Blogs;
