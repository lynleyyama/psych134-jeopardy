const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(express.static('static_files'));

const questions = {
	'h-100' : {q: 'History 100', a: 'm', e: 'History 100 Explanation'},
	'h-200' : {q: 'History 200', a: 'f', e: 'History 200 Explanation'},
	'h-300' : {q: 'History 300', a: 'm', e: 'History 300 Explanation'},
	'h-400' : {q: 'History 400', a: 'f', e: 'History 400 Explanation'},
	'h-500' : {q: 'History 500', a: 'm', e: 'History 500 Explanation'},
	't-100' : {q: 'Types of Eating Disorders 100', a: 'm', e: 'Types of Eating Disorders 100 Explanation'},
	't-200' : {q: 'Types of Eating Disorders 200', a: 'f', e: 'Types of Eating Disorders 200 Explanation'},
	't-300' : {q: 'Types of Eating Disorders 300', a: 'm', e: 'Types of Eating Disorders 300 Explanation'},
	't-400' : {q: 'Types of Eating Disorders 400', a: 'f', e: 'Types of Eating Disorders 400 Explanation'},
	't-500' : {q: 'Types of Eating Disorders 500', a: 'm', e: 'Types of Eating Disorders 500 Explanation'},
	'm-100' : {q: 'Medical Consequences 100', a: 'm', e: 'Medical Consequences 100 Explanation'},
	'm-200' : {q: 'Medical Consequences 200', a: 'f', e: 'Medical Consequences 200 Explanation'},
	'm-300' : {q: 'Medical Consequences 300', a: 'm', e: 'Medical Consequences 300 Explanation'},
	'm-400' : {q: 'Medical Consequences 400', a: 'f', e: 'Medical Consequences 400 Explanation'},
	'm-500' : {q: 'Medical Consequences 500', a: 'm', e: 'Medical Consequences 500 Explanation'},
};

const info = {
	'history' : {title: 'History of Eating Disorders', info: 'History information'},
	'types' : {title: 'Types of Eating Disorders', info: 'Types information'},
	'medical' : {title: 'Medical Consequences', info: 'Medical information'},
	'culture' : {title: 'Cultural Influences', info: 'Cultural information'},
	'neurobiology' : {title: 'Neurobiology of Eating Disorders', info: 'Neurobiology Information'}
};

app.listen(3000,()=>{
	console.log('Server started');
});

app.get('/category/:category',(req,res) => {
	console.log("trying to handle: " + req.params.category);
	const category = req.params.category;
	const information = info[category];

	if(information){
		res.send(information);
	} else{
		res.send({});
	}
});

app.get('/question/:id', (req,res) => {
	const id = req.params.id;
	const question = questions[id];
	if(question) {
		res.send(question);
	} else {
		res.send({});
	}
});

