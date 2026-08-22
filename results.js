// Load candidates (with updated vote counts) from localStorage
const storedCandidates = localStorage.getItem('candidates');
const candidates = storedCandidates ? JSON.parse(storedCandidates) : [];

if (candidates.length === 0) {
    document.body.innerHTML += '<p>No votes yet.</p>';
}

// Prepare data for the chart
const labels = candidates.map(candidate => candidate.name);
const voteCounts = candidates.map(candidate => candidate.votes);

// Get the canvas context
const ctx = document.getElementById('resultsChart').getContext('2d');

// Create the bar chart
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Votes',
            data: voteCounts,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});