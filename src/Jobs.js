import React from 'react';
import './css/jobs.css'; // Create this CSS file for styling

const jobsData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Co.',
    location: 'San Francisco, CA',
    logoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-l81fFo3iSaE2qrHoLim98iJKGf5xiIpR5w&usqp=CAU',
  },

  {
    id: 2,
    title: 'Software Engineer',
    company: 'Tech Innovators Inc.',
    location: 'New York, NY',
    logoUrl:'https://img.freepik.com/free-vector/orange-logo-arrow-shape_1043-53.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },

  {
    id: 3,
    title: 'Product Manager',
    company: '',
    location: 'San Francisco, CA',
    logoUrl:'https://img.freepik.com/premium-vector/business-master-with-businessman-tie-circle-logo-icon-illustration-design_470367-184.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },

  {
    id: 4,
    title: 'Data Scientist',
    company: 'Data Insights Corp.',
    location: 'San Francisco, CA',
    logoUrl:'https://img.freepik.com/free-vector/logo-with-curly-arrow_1043-146.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },


  {
    id: 5,
    title: 'Frontend Developer',
    company: 'Tech Co.',
    location: 'San Francisco, CA',
    logoUrl:'https://img.freepik.com/premium-vector/financial-consulting-business-logo-vector-designs_641336-69.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },


  {
    id: 6,
    title: 'Marketing Specialist',
    company: 'MarketBoosters Ltd.',
    location: 'Chicago, IL',
    logoUrl:'https://img.freepik.com/free-vector/connection-vector-logo-template_460848-8078.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },

  {
    id: 7,
    title: 'Network Engineer',
    company: 'ConnectTech Systems',
    location: 'Austin, TX',
    logoUrl:'https://img.freepik.com/free-vector/logo-template-design_1289-83.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },


  {
    id: 8,
    title: 'Customer Support Specialist',
    company: 'Tech co',
    location: 'San Francisco, CA',
    logoUrl:'https://img.freepik.com/free-vector/abstract-orange-triangle-logo_1043-120.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  // Add more job listings here...
];

const Jobs = () => {
  return (
    <div className="linkedin-jobs-container">
      <div className="linkedin-jobs-header">
        <img
          src="https://seeklogo.com/images/L/linkedin-logo-F84AF05CFC-seeklogo.com.png"
          alt="LinkedIn Logo"
          className="linkedin-logo"
        />
        <h1>Job Listings</h1>
      </div>
      <div className="linkedin-job-listings">
        {jobsData.map((job) => (
          <div className="linkedin-job-card" key={job.id}>
            <div className="job-logo">
              <img src={job.logoUrl} alt={`${job.company} Logo`} />
            </div>
            <div className="job-details">
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p className="job-description">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
