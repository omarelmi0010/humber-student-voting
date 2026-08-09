// Candidate data - reused structure (same idea as vote.js)
const candidateProfiles = [
    { id: 1, name: "Alex Johnson", bio: "Advocate for student mental health resources.", photo: "https://via.placeholder.com/150" },
    { id: 2, name: "Priya Patel", bio: "Focused on improving campus food options.", photo: "https://via.placeholder.com/150" },
    { id: 3, name: "Marcus Lee", bio: "Pushing for more affordable parking.", photo: "https://via.placeholder.com/150" }
];

const profilesDiv = document.getElementById('candidateProfiles');

// Build profile cards using map (matches Lab 2)
function displayProfiles() {
    const profileCards = candidateProfiles.map(candidate => {
        return `
            <div class="profile-card">
                <img src="${candidate.photo}" alt="${candidate.name}">
                <h2>${candidate.name}</h2>
                <p>${candidate.bio}</p>
            </div>
        `;
    });

    profilesDiv.innerHTML = profileCards.join('');
}

displayProfiles();