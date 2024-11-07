
const inputBtn = document.getElementById('inputBtn');
const inputContainer = document.getElementById('inputContainer');
const countryInput = document.getElementById('countryInput');
const displayBtn = document.getElementById('displayBtn');
const countryData = document.getElementById('countryData');

// Function to display only the 5 most interesting facts in a colorful way
function displayInterestingFacts(data) {
  const interestingFacts = {
    "Common Name": data.name.common,
    "Official Name": data.name.official,
    "Capital": data.capital[0],
    "Population": data.population,
    "Region": data.region
  };

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33E6', '#33E6FF'];
  let index = 0;

  let formattedFacts = '';
  for (const key in interestingFacts) {
    formattedFacts += `<span style="color: ${colors[index]}">${key}: ${interestingFacts[key]}</span><br>`;
    index = (index + 1) % colors.length;
  }

  countryData.innerHTML = formattedFacts;
  countryData.style.display = 'block';
  inputContainer.style.display = 'none';
}

inputBtn.addEventListener('click', () => {
  inputContainer.style.display = 'block';
});

displayBtn.addEventListener('click', () => {
  const countryName = countryInput.value;
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => {
      displayInterestingFacts(data[0]); // Display only the first country's data
    })
    .catch(error => {
      console.error("Fetching data from restcountries.com failed:", error);
    });
});
