// Mock data for symptom suggestions and diseases
const symptoms = [
    "Headache", "Fever", "Cough", "Sore throat", "Shortness of breath", "Fatigue",
    "Nausea", "Vomiting", "Diarrhea", "Chest pain", "Dizziness", "Muscle pain"
];
const diseaseDatabase = {
    "Headache": "Migraine, Tension Headache, Cluster Headache",
    "Fever": "Flu, COVID-19, Malaria",
    "Cough": "Common Cold, Bronchitis, Asthma",
    "Sore throat": "Tonsillitis, Strep Throat, Laryngitis"
};

// Function to suggest symptoms as the user types
function suggestSymptoms() {
    const input = document.getElementById("symptom-input").value.toLowerCase();
    const suggestionsBox = document.getElementById("suggestions");
    
    // Clear previous suggestions
    suggestionsBox.innerHTML = "";

    if (input.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    const filteredSymptoms = symptoms.filter(symptom =>
        symptom.toLowerCase().startsWith(input)
    );

    if (filteredSymptoms.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    // Show suggestions
    filteredSymptoms.forEach(symptom => {
        const item = document.createElement("div");
        item.classList.add("suggestion-item");
        item.innerText = symptom;
        item.onclick = () => selectSymptom(symptom);
        suggestionsBox.appendChild(item);
    });
    suggestionsBox.style.display = "block";
}

// Function to select a symptom from suggestions
function selectSymptom(symptom) {
    document.getElementById("symptom-input").value = symptom;
    document.getElementById("suggestions").style.display = "none";
}

// Function to search for diseases based on symptoms
function searchDisease() {
    const input = document.getElementById("symptom-input").value;
    const resultBox = document.getElementById("result");

    if (input === "") {
        resultBox.innerHTML = "<p>Please enter a symptom to search for related diseases.</p>";
        return;
    }

    const diseaseList = diseaseDatabase[input] || "No matching diseases found for the entered symptom.";
    resultBox.innerHTML = <p>Possible diseases related to "${input}": ${diseaseList}</p>;
}

// Function to analyze uploaded image (mocked with a placeholder response)
function analyzeImage(event) {
    const file = event.target.files[0];
    const resultBox = document.getElementById("result");

    if (!file) {
        resultBox.innerHTML = "<p>No image uploaded. Please select an image.</p>";
        return;
    }

    // Display a mock analysis result
    resultBox.innerHTML = <p>Analyzing image: ${file.name}...</p>;
    setTimeout(() => {
        resultBox.innerHTML += <p>Analysis result: Possible skin condition detected. Please consult a doctor for further analysis.</p>;
    }, 2000); // Simulated delay