import holidays from './days.js';
import express from 'express';
import cors from 'cors';


const today = new Date();

const app = express();
app.use(cors());




function checkHoliday(holidays){
    for(let i= 0; i < holidays.length; i++){
        if(holidays[i].date.includes(today.toLocaleDateString()) ){
           return `Sim, hoje é feriado ${holidays[i].name}`
            
        }
    }
    return "Não, hoje não é feriado"
}

function handleMonth(str){
    let arrayHollidays = []
    for(let i= 0; i < holidays.length; i++){
        if(holidays[i].month === str ){
            arrayHollidays.push(holidays[i])
           
            
        }
    }
    if(arrayHollidays.length === 0){
        return "Não tem feriado no mes selecionado"
    }
    
    return arrayHollidays

}



app.get("/holidays", (req, res) => {
    
    res.send(holidays);
})


app.get("/is-today-holiday", (req, res) => {
    let bollens = checkHoliday(holidays)

    res.send(bollens)
})



app.get('/holidays/:idHoliday', (req, res) => {
    const id = req.params.idHoliday;
    const response = handleMonth(id)
    res.send(response)

  });


app.listen(3000);


