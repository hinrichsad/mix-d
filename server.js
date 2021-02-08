const express = require('express');
const exphbs = require('express-handlebars');
const { cocktails } = require('./cocktails')

const app = express();

const PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/cocktails/:name', (req, res) => {
    for (let i = 0; i < cocktails.length; i++){
        if(cocktails[i].name === req.params.name){
            return res.render('drink', cocktails[i]);
        }
    }
});

app.get('/cocktails', (req, res) => res.render('drinkList', { fullList: cocktails }));


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));