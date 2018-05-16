const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(express.static('static_files'));

const questions = {
	'h-100' : {q: '<span class="q">Eating disorders are strictly modern diseases</span>', a: 'm', e: '<span class="type">MYTH: </span> Historical accounts of cases that exhibit restrictive eating disorder behavior date all the way back to the late 4th century! There are many cases that document self-starvation for religious purposes. However, the first medical description of self-starvation was recorded in 1689 by Morton who characterized loss of appetite, fasting and extreme weight loss as <i>nervous atrophy</i>/<i>nervous consumption</i> after observing these symptoms in one boy and one girl. It wasn’t until 1873 that Sir William Gull introduced the term <i>anorexia nervosa</i> to medical literature to describe cases of significant weight loss that also included many symptoms associated with eating disorders today. '},
	'h-200' : {q: '<span class="q">Research on the effects of eating disorders and diets has only recently started</span>', a: 'm', e: '<span class="type">MYTH: </span> In November of 1944, 36 men volunteered to take part in an experiment at the University of Minnesota to study the effects of starvation on the human body. The men were restricted to 1500 calories a day for 6 months. Results from this experiment revealed profound psychological effects, including loss of social skills and aggression. Following the experiment, the men gained more weight than when they first started the experiment, showing that trying to lose weight through restricting your food intake is not effective.'},
	'h-300' : {q: '<span class="q">Bulimic behaviors can be seen in history as far back as the ancient Egyptians</span>', a: 'f', e: '<span class="type">FACT: </span>Ancient texts reveal that vomiting was used as a form of "self-cleansing". Ancient Egyptians supposedly purged monthly to empty their stomachs. The Ancient Romans used self-induced vomiting following the practice overeating. By the 18th century, vomiting was prescribed as a remedy for excessive eating and weight loss.'},
	'h-400' : {q: '<span class="q">Binge eating disorder has not always been recognized as its own eating disorder in the DSM</span>', a: 'f', e: '<span class="type">FACT: </span>Characteristics of binge eating disorder (BED) were first described in 1959. It wasn’t until 1994 that BED was added to DSM under Eating Disorder Not Otherwise Specified (EDNOS). Finally, in 2013 BED was added to the DSM as an official eating disorder. '},
	'h-500' : {q: '<span class="q">Historical accounts of eating disorder behaviors are irrelevant and insignificant to modern medicine</span>', a: 'm', e: '<span class="type">MYTH: </span>Historical accounts of eating disorders describe significant behavioral features that can still be seen today. Doctors and researchers can use these accounts to learn about the biological impacts of behaviors associated with eating disorders and apply this knowledge to treatment development. Many historical accounts emphasize characteristic behaviors that are classified by the DSM-5, which is used to assess and diagnose modern eating disorders.'},
	't-100' : {q: '<span class="q">You have to be skinny to have an eating disorder</span>', a: 'm', e: '<span class="type">MYTH: </span>Not all eating disorders are characterized by low body weight. While the presence of an eating disorder may result in significant weight loss, eating disorders characterize abnormal eating behaviors and/or disturbed perception of self-body image. For example, ARFID is an eating disorder that is characterized by restricted food intake that is unrelated to lack of food availability and does not result in a disturbance in body weight or shape. This eating disorder is unrelated to body weight or body image; it is associated with unusual eating habits. However, even those who suffer from eating disorders that are associated with body weight or body image can appear in an individual of any weight or BMI.'},
	't-200' : {q: '<span class="q">There are only two types of eating disorders: anorexia and bulimia</span>', a: 'm', e: '<span class="type">MYTH: </span>The DSM-V recognizes 8 different types of feeding and eating disorders. These include:<ul><li>Pica</li><li>Rumination Disorder</li><li>Avoidant-Restrictive Food Intake Disorder (ARFID)</li><li>Anorexia Nervosa (Restrictive and Binge-purge types)</li><li>Bulimia Nervosa</li><li>Binge-Eating Disorder</li><li>Other Specified Feeding or Eating Disorder</li><li>Unspecified Feeding or Eating Disorder</li></ul>'},
	't-300' : {q: '<span class="q">Eating disorders often co-occur with psychiatric disorders</span>', a: 'f', e: '<span class="type">FACT: </span>Some of the psychiatric disorders that commonly co-occur with eating disorders include: depression, bipolar disorder, OCD, social anxiety, generalized anxiety (GAD), PTSD, borderline personality disorder (BPD), substance abuse and suicidality. Around 50-65% of individuals with BN have major depression disorder (MDD) while 46-80% of individuals with AN-BP also suffer from MDD. An impressive 54% of patients diagnosed with BPD also suffer from some type of eating disorder.'},
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
	'medical' : {title: 'Medical Consequences from Eating Disorders', info: 'Eating disorders affect all systems of the body. These include: <ul><li>Cardiovascualr</li><li>Fludis and ELectrolytes</li><li>Neuropsychiatric</li><li>Gastrointestinal</li><li>Reproductive</li></ul> <h3>What is malnutrition?</h3> Malnutrition is the deficit or macro or micro nutrients. Malnutrition can be classified by a low BMI (body mass index) or by measures of significant weight loss. However, one can be malnourished yet maintain a normal or high BMI. Therefore, the change in weight, including the amount of weight lost and the time frame of weight loss (how fast), is a stronger determinant of malnutrition severity. Malnutrition causes the body to What are some of the major medical complications that result from eating disorders?Some of major medical complications include: Bradycardia: also known as low heart rate. This is when a heart rate falls below 45 bpm, increasing the risk of cardiac arrestAre the complications reversible?When should a patient be hospitalized?What treatment is available?'},
	'culture' : {title: 'Cultural Influences', info: 'Cultural information'},
	'neurobiology' : {title: 'Neurobiology of Eating Disorders', info: 'Neurobiology Information'}
};

app.listen(process.env.PORT || 3000,()=>{
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

