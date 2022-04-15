// const complimentContainer = document.getElementById('compliment-container')
const form = document.querySelector('form')

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(function (response) {
            const data = response.data
            alert(data)
        })
};

const newKeanu = (event) => {
    event.preventDefault()
    axios.post("http://localhost:4000/api/keanuCompliment/")
        .then()
}