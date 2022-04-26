let keanuCompliment = require('./db.json')
let globalID = 2

module.exports = {
    getKeanu: (req,res) => {
        res.status(200).send(keanuCompliment)
      },
    
      newKeanu: (req, res) => {
          const { contents, rating } = req.body
          let newCompliment = {
              id: globalID,
              contents,
              rating
          }
          keanuCompliment.push(newCompliment)
          globalID++
          res.status(200).send(keanuCompliment)
      },
    
      deleteKeanu: (req, res) => {
          const {id} = req.params
          let index = keanuCompliment.findIndex(elem => elem.id === id)
          keanuCompliment.splice(index, 1)
          res.status(200).send(keanuCompliment)
      },
    
      updateKeanu: (req, res) => {
          const { id } = req.params
          const { type } = req.body
          let index = keanuCompliment.findIndex(elem => elem.id === +id)
          if(type === 'minus' && keanuCompliment[index].rating > 0){
              keanuCompliment[index].rating -= 1
              res.status(200).send(keanuCompliment)
          }else if(type === 'plus' && keanuCompliment[index].rating < 5){
            keanuCompliment[index].rating += 1
            res.status(200).send(keanuCompliment)
          }
      }
    }
