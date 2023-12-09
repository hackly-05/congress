const jobData = [
    { title: "Software Developer", company: "ABC Tech Solutions", description: "We are looking for a skilled Software Developer to join our dynamic team. Apply now!" },
    { title: "Marketing Specialist", company: "XYZ Marketing Agency", description: "Join our marketing team and help us create compelling campaigns. Apply now!" },
    { title: "Web Designer", company: "HCL", description: "Designing Join our marketing team and help us create compelling campaigns. Apply now!" },

    // Add more job data as needed
  ];

  const searchInput = document.getElementById('search-input');
  const jobListingsContainer = document.getElementById('job-listings');

  function displayJobListings(jobs) {
    jobListingsContainer.innerHTML = '';

    jobs.forEach(job => {
      const jobListing = document.createElement('div');
      jobListing.className = 'job-listing';

      jobListing.innerHTML = `
        <div class="job-title">${job.title}</div>
        <div class="company-name">${job.company}</div>
        <div class="job-description">${job.description}</div>
        <button class="apply-button">Apply Now</button>
      `;

      jobListingsContainer.appendChild(jobListing);
    });
  }

  function filterJobs(query) {
    const filteredJobs = jobData.filter(job =>
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.description.toLowerCase().includes(query.toLowerCase())
    );
    displayJobListings(filteredJobs);
  }

  searchInput.addEventListener('input', () => {
    filterJobs(searchInput.value);
  });

  // Display all jobs initially
  displayJobListings(jobData);


