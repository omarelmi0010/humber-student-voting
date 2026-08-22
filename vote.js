// Candidate data - array of objects (matches project plan: name, bio, photo)
const candidates = [
    { id: 1, name: "Alex Johnson", bio: "Advocate for student mental health resources.", votes: 0 },
    { id: 2, name: "Priya Patel", bio: "Focused on improving campus food options.", votes: 0 },
    { id: 3, name: "Marcus Lee", bio: "Pushing for more affordable parking.", votes: 0 }
];

const candidateListDiv = document.getElementById('candidateList');
const voteMessageDiv = document.getElementById('voteMessage');

// Display candidates dynamically using forEach
function displayCandidates() {
    candidateListDiv.innerHTML = '';

    candidates.forEach(candidate => {
        const card = document.createElement('div');
        card.className = 'candidate-card';
        card.innerHTML = `
            <h3>${candidate.name}</h3>
            <p>${candidate.bio}</p>
            <button data-id="${candidate.id}">Vote</button>
        `;
        candidateListDiv.appendChild(card);
    });
}

// Handle voting using event delegation (matches Lab 7)
candidateListDiv.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const candidateId = Number(event.target.getAttribute('data-id'));
        const candidate = candidates.find(c => c.id === candidateId);

        if (candidate) {
<<<<<<< HEAD
    candidate.votes++;
    localStorage.setItem('candidates', JSON.stringify(candidates));
    voteMessageDiv.innerHTML = `<p>Thank you for voting for ${candidate.name}!</p>`;
        }

=======
            candidate.votes++;
            voteMessageDiv.innerHTML = `<p>Thank you for voting for ${candidate.name}!</p>`;
        }
>>>>>>> main
    }
});

displayCandidates();