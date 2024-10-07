// public/scripts.js

// Helper function to scroll to a section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Event listener for adding a mentor
  document.getElementById('mentor-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const name = document.getElementById('mentor-name').value;
    const expertise = document.getElementById('mentor-expertise').value;
    const bio = document.getElementById('mentor-bio').value;
  
    try {
      const response = await fetch('/api/mentors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, expertise, bio }),
      });
  
      if (response.ok) {
        alert('Mentor added successfully!');
        document.getElementById('mentor-form').reset();
        fetchMentors();
      } else {
        alert('Error adding mentor.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
  // Fetch and display mentors
  async function fetchMentors() {
    try {
      const response = await fetch('/api/mentors');
      const mentors = await response.json();
  
      const mentorList = document.getElementById('mentor-list');
      mentorList.innerHTML = '';
  
      mentors.forEach((mentor) => {
        const mentorDiv = document.createElement('div');
        mentorDiv.innerHTML = `
          <h3>${mentor.name}</h3>
          <p><strong>Expertise:</strong> ${mentor.expertise}</p>
          <p>${mentor.bio}</p>
        `;
        mentorList.appendChild(mentorDiv);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Event listener for adding funding
  document.getElementById('funding-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const title = document.getElementById('funding-title').value;
    const amount = parseInt(document.getElementById('funding-amount').value);
    const description = document.getElementById('funding-description').value;
  
    try {
      const response = await fetch('/api/funding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, amount, description }),
      });
  
      if (response.ok) {
        alert('Funding opportunity added successfully!');
        document.getElementById('funding-form').reset();
        fetchFunding();
      } else {
        alert('Error adding funding opportunity.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
  // Fetch and display funding opportunities
  async function fetchFunding() {
    try {
      const response = await fetch('/api/funding');
      const fundings = await response.json();
  
      const fundingList = document.getElementById('funding-list');
      fundingList.innerHTML = '';
  
      fundings.forEach((funding) => {
        const fundingDiv = document.createElement('div');
        fundingDiv.innerHTML = `
          <h3>${funding.title}</h3>
          <p><strong>Amount:</strong> $${funding.amount}</p>
          <p>${funding.description}</p>
        `;
        fundingList.appendChild(fundingDiv);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Initialize the page by fetching mentors and funding opportunities
  window.onload = () => {
    fetchMentors();
    fetchFunding();
  };
  