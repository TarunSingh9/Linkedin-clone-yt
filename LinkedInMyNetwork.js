import React from 'react';
import './css/LinkedInMyNetwork.css'; // Create this CSS file for styling

const connectionsData = [
  
  // Add more connection data here...
  {
    id: 1,
    name: 'John Doe',
    job: 'Frontend Developer',
    education: 'Computer Science, XYZ University',
    workExperience: '5 years',
    company: 'Tech Co.',
    profileImageUrl: 'https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 2,
    name: 'Alice Smith',
    job: 'Software Engineer',
    education: 'Computer Engineering, ABC University',
    workExperience: '6 years',
    company: 'InnovateTech Solutions',
    profileImageUrl: 'https://img.freepik.com/free-photo/smiley-woman-having-video-call-office_23-2148908797.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    job: 'Data Scientist',
    education: 'Data Science, DEF University',
    workExperience: '4 years',
    company: 'Data Insights Corp.',
    profileImageUrl: 'https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241234.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 4,
    name: 'David Brown',
    job: 'UI/UX Designer',
    education: 'Design, GHI University',
    workExperience: '7 years',
    company: 'Creative Design Studio',
    profileImageUrl: 'https://img.freepik.com/free-photo/workers-it-company-working-computer_1303-19433.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 5,
    name: 'Sarah Wilson',
    job: 'Marketing Specialist',
    education: 'Marketing, JKL University',
    workExperience: '8 years',
    company: 'MarketBoosters Ltd.',
    profileImageUrl: 'https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241219.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 6,
    name: 'Michael Jackson',
    job: 'Financial Analyst',
    education: 'Finance, MNO University',
    workExperience: '6 years',
    company: 'Finance Wizards Inc.',
    profileImageUrl: 'https://img.freepik.com/free-photo/man-sitting-office-table-looking-camera_259150-57847.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 7,
    name: 'Emma Davis',
    job: 'Network Engineer',
    education: 'Computer Networking, PQR University',
    workExperience: '5 years',
    company: 'ConnectTech Systems',
    profileImageUrl: 'https://img.freepik.com/free-photo/smiling-business-lady-working-with-colleagues_1262-2153.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 8,
    name: 'Oliver Taylor',
    job: 'Customer Support Specialist',
    education: 'Customer Service, STU University',
    workExperience: '4 years',
    company: 'SupportPro Solutions',
    profileImageUrl: 'https://img.freepik.com/free-photo/young-attractive-dark-haired-man-glassess-is-working-with-computer-writing-notebook-office-he-wears-blue-shirt-beard_197531-531.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
];

const LinkedInMyNetwork = () => {
  return (
    <div className="linkedin-my-network-container">
      <div className="linkedin-my-network-header">
        <img
          src="https://seeklogo.com/images/L/linkedin-logo-F84AF05CFC-seeklogo.com.png"
          alt="LinkedIn Logo"
          className="linkedin-logo"
        />
        <h1>My Network</h1>
      </div>
      <div className="linkedin-connections-list">
        {connectionsData.map((connection) => (
          <div className="linkedin-connection-card" key={connection.id}>
            <img
              src={connection.profileImageUrl}
              alt={`${connection.name}'s Profile`}
              className="connection-profile-image"
            />
            <div className="connection-details">
              <p className="connection-name">{connection.name}</p>
              <p className="connection-job">{connection.job}</p>
              <p className="connection-education">{connection.education}</p>
              <p className="connection-experience">
                {connection.workExperience} of experience
              </p>
              <p className="connection-company">{connection.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedInMyNetwork;
