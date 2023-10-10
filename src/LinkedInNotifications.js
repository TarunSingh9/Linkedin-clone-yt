import React from 'react';
import './css/LinkedInNotifications.css'; // Create this CSS file for styling

const notificationsData = [
  
  // Add more notifications here...
  {
    id: 1,
    type: 'Job',
    text: 'Software Engineer position at InnovateTech Solutions. Join our dynamic development team and build innovative software solutions that impact millions. Apply now and be part of the tech revolution!',
    logoUrl: 'https://img.freepik.com/free-vector/purple-abstract-geometrical-logo-3d_1043-55.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 2,
    type: 'Message',
    text: 'New message from Jane Smith: Urgent security patch needed. Discussing critical updates to ensure the safety of our systems. Stay informed and act promptly.',
    logoUrl: 'https://img.freepik.com/free-vector/gradient-abstract-logo-template_23-2148157717.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 3,
    type: 'Notification',
    text: 'Congratulations! You earned a digital badge for your contributions to the tech community. Showcase your expertise and inspire others with your knowledge.',
    logoUrl: 'https://img.freepik.com/free-vector/flat-laptop-logo-template_23-2149020405.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 4,
    type: 'Job',
    text: 'Data Analyst role at Insightful Data Solutions. Dive into data analysis and uncover actionable insights. Join our team and help organizations make data-driven decisions.',
    logoUrl: 'https://img.freepik.com/free-vector/purple-abstract-geometrical-logo-3d_1043-55.jpg?size=626&ext=jpg&ga=GA1.2.104603938.1694941530&semt=ais',
  },
  {
    id: 5,
    type: 'Message',
    text: 'New message from David Brown: AI project kickoff meeting tomorrow. Be prepared to explore exciting AI advancements and plan for success.',
    logoUrl: 'https://img.freepik.com/free-vector/computer-shape-logo-template_1071-83.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 6,
    type: 'Notification',
    text: 'You a top contributor in the Tech Forum. Keep sharing your expertise, and you will continue to inspire and help others in the tech community.',
    logoUrl: 'https://img.freepik.com/free-vector/flat-design-data-logo-template_23-2149192863.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 7,
    type: 'Job',
    text: 'UX/UI Designer position at CreativeTech Studio. Create stunning user experiences and visually appealing interfaces. Join our team and make digital products shine!',
    logoUrl: 'https://img.freepik.com/free-vector/flat-design-data-logo-template_23-2149199479.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 8,
    type: 'Message',
    text: 'New message from Alice Johnson: Discussing cloud migration strategy for improved scalability and cost-efficiency. Let make our infrastructure future-ready.',
    logoUrl: 'https://img.freepik.com/free-vector/gradient-colored-data-logo-template_23-2149197723.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 9,
    type: 'Notification',
    text: ' Your blog post "10 Trends Shaping the Future of Tech" is trending! Keep sharing your insights and stay at the forefront of tech discussions.',
    logoUrl: 'https://img.freepik.com/premium-vector/it-technology-solution_276876-8.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 10,
    type: 'Job',
    text: 'Notification: Your blog post "10 Trends Shaping the Future of Tech" is trending! Keep sharing your insights and stay at the forefront of tech discussions.',
    logoUrl: 'https://img.freepik.com/free-vector/gradient-hub-logo-template_23-2149847317.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 11,
    type: 'Message',
    text: 'New message from Mark Wilson: Exciting opportunity to collaborate on a blockchain project. Explore the potential of blockchain technology and its applications.',
    logoUrl: 'https://img.freepik.com/free-vector/gradient-data-logo-template_23-2149203401.jpg?size=626&ext=jpg&ga=GA1.1.104603938.1694941530&semt=ais',
  },
  {
    id: 12,
    type: 'Notification',
    text: 'You reached a milestone! 1,000 followers in the tech community. Keep inspiring and connecting with fellow tech enthusiasts.',
    logoUrl: 'https://img.freepik.com/free-vector/connection-vector-logo-template_460848-8078.jpg?size=626&ext=jpg&ga=GA1.2.104603938.1694941530&semt=ais',
  },
];

const LinkedInNotifications = () => {
  return (
    <div className="linkedin-notifications-container">
      <div className="linkedin-notifications-header">
        <img
          src="https://seeklogo.com/images/L/linkedin-logo-F84AF05CFC-seeklogo.com.png"
          alt="LinkedIn Logo"
          className="linkedin-logo"
        />
        <h1>Notifications</h1>
      </div>
      <div className="linkedin-notification-list">
        {notificationsData.map((notification) => (
          <div className="linkedin-notification-card" key={notification.id}>
            <div className="notification-logo">
              <img src={notification.logoUrl} alt="Company Logo" />
            </div>
            <div className="notification-details">
              <p>
                <strong>{notification.type}:</strong> {notification.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedInNotifications;
