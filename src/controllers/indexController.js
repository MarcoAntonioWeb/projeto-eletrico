
module.exports = {
    index(req, res) {
        return res.render("index")
    },

     save(req, res) {
        const novoEmail = req.body
        if(novoEmail == "") {
            return res.render("index")
        } else {
            res.redirect("ferramenta")
        }
     }
}

  
