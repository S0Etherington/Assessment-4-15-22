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

// keanu stuff

const complimentBox = document.getElementById("compliment-container")


const makeCompCard = (newComp) => {
    const compElem =
    `<div class="card" id="comp-${newComp['id']}'>
        <p>${newComp['contents']}</p>
        <p>${newComp['rating']}</p>
    </div>`
    
    return compElem
}

const displayComp = (arr) => {
    complimentBox.innerHTML= ``
    for(let i = 0; i <  arr.length; i++){
        makeCompCard(arr[i])
    }
}

const getKeanu = () => {
    axios.get("http://localhost:4000/api/keanuCompliment/")
    .then(res => {
        for(let i = 0; i < res.data.length; i++) {
            const newComp = makeCompCard(res.data[i])
            complimentBox.innerHTML += newComp
        }
    })
    .catch(err => console.log(err))

    // console.log('hey')
}

const newKeanu = (e) => {
    e.preventDefault()
    // console.log('hey')

    const userComp = {
        id: res.data.id,
        content: res.data.content,
        rating: res.data.rating
    }
    axios.post("http://localhost:4000/api/keanuCompliment/")
        .then(res => makeCompCard(userComp))
        .catch(err => console.log(err))
}

const updateKeanu = (comp) => {
    axios.put(`http://localhost:4000/api/keanuCompliment/${id}`)
        .then(res => displayComp(res.data))
        .catch(err => console(err))
}

const deleteKeanu = (id) => {
    axios.delete(`http://localhost:4000/api/keanuCompliment/${id}`)
        .then(res => makeCompCard(res.data))
        .catch(err => console.log(err))
}

getKeanu()