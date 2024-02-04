// SocialLinks.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [newLink, setNewLink] = useState({ platform: '', link: '' });

  useEffect(() => {
    // Fetch social links from the backend
    axios.get('http://localhost:5015/api/social-links')
      .then(response => setSocialLinks(response.data))
      .catch(error => console.error('Error fetching social links:', error));
  }, []);

  const handleUpload = () => {
    // Upload new social link to the backend
    axios.post('http://localhost:5015/api/social-links', newLink)
      .then(response => {
        if (response.data.success) {
          // Reset the input fields after a successful upload
          setNewLink({ platform: '', link: '' });

          // Refresh social links after upload
          axios.get('http://localhost:5015/api/social-links')
            .then(response => setSocialLinks(response.data))
            .catch(error => console.error('Error fetching social links:', error));
        }
      })
      .catch(error => console.error('Error uploading social link:', error));
  };

  return (
    <div>
      <h2>Social Links</h2>
      <ul>
        {socialLinks.map(link => (
          <li key={link._id}>
            {link.platform}: {link.link}
          </li>
        ))}
      </ul>
      <div>
        <h3>Upload New Social Link</h3>
        <label>
          Platform:
          <input
            type="text"
            value={newLink.platform}
            onChange={(e) => setNewLink({ ...newLink, platform: e.target.value })}
          />
        </label>
        <br />
        <label>
          Link:
          <input
            type="text"
            value={newLink.link}
            onChange={(e) => setNewLink({ ...newLink, link: e.target.value })}
          />
        </label>
        <br />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

export default SocialLinks;
