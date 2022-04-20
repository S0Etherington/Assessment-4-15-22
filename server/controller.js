

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
        "Cool shirt!",
        "Your Javascript skills are stellar.",
    ];
    
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    
    res.status(200).send(randomCompliment);  
},

    getFortune: (req, res) => {
          let fortunes = ["A friend asks only for your time not for your limited edition Matrix cardboard cutout of Keanu Reeves.",
          "Keanu Reeves's smile is your welcome mat.",
          "Advice is like kissing Keanue Reeves. It costs nothing and is a pleasant thing to do.",
          "Embrace the love in Keanu Reeves you have!",
          "Keanu Reeves is behind you."
          ]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
      }

}