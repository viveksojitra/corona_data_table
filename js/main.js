const stateData = document.getElementById("stateData");
let id = 0;

// Fetch Statewise Data From API
const fetchData = () => {

  fetch("https://data.covid19india.org/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      data.statewise.forEach(state => {
        id++;
        const row = `<tr>
                       <td>${id}</td>
                       <td>${state.state}</td>
                       <td>${state.active}</td>
                       <td>${state.lastupdatedtime}</td>
                       <td>${state.confirmed}</td>
                       <td>${state.deaths}</td>
                     </tr>`;
        stateData.innerHTML += row;
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

fetchData();