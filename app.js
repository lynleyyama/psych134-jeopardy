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
	't-100' : {q: '<span class="q">You have to be skinny to have an eating disorder</span>', a: 'm', e: '<span class="type">MYTH: </span>Not all eating disorders are characterized by low body weight. While the presence of an eating disorder may result in significant weight loss, eating disorders characterize abnormal eating behaviors and/or disturbed perception of self-body image. For example, ARFID is an eating disorder that is characterized by restricted food intake that is unrelated to lack of food availability and does not result in a disturbance in body weight or shape. This eating disorder is unrelated to body weight or body image; it is associated with unusual eating habits. However, eating disorders that are associated with body weight or body image can appear in an individual of any weight or BMI.'},
	't-200' : {q: '<span class="q">There are only two types of eating disorders: anorexia and bulimia</span>', a: 'm', e: '<span class="type">MYTH: </span>The DSM-V recognizes 8 different types of feeding and eating disorders. These include:<ul><li>Pica</li><li>Rumination Disorder</li><li>Avoidant-Restrictive Food Intake Disorder (ARFID)</li><li>Anorexia Nervosa (Restrictive and Binge-purge types)</li><li>Bulimia Nervosa</li><li>Binge-Eating Disorder</li><li>Other Specified Feeding or Eating Disorder</li><li>Unspecified Feeding or Eating Disorder</li></ul>'},
	't-300' : {q: '<span class="q">Eating disorders often co-occur with psychiatric disorders</span>', a: 'f', e: '<span class="type">FACT: </span>Some of the psychiatric disorders that commonly co-occur with eating disorders include: depression, bipolar disorder, OCD, social anxiety, generalized anxiety (GAD), PTSD, borderline personality disorder (BPD), substance abuse and suicidality. Around 50-65% of individuals with BN have major depression disorder (MDD) while 46-80% of individuals with AN-BP also suffer from MDD. An impressive 54% of patients diagnosed with BPD also suffer from some type of eating disorder.'},
	't-400' : {q: '<span class="q">All eating disorders are treated the same</span>', a: 'f', e: 'Types of Eating Disorders 400 Explanation'},
	't-500' : {q: 'Types of Eating Disorders 500', a: 'm', e: 'Types of Eating Disorders 500 Explanation'},
	'm-100' : {q: '<span class="q">Eating disorders can only affect the gastrointestinal system</span>', a: 'm', e: '<span class="type">MYTH: </span>Significant weight loss from an eating disorder can affect every system in the body including the cardiovascular, fluid and electrolyte, neuropsychiatric, gastrointestinal, reproductive, musculoskeletal, hematologic, immunologic, dermatologic, respiratory and dental systems.'},
	'm-200' : {q: '<span class="q">Those who suffer from eating disorders will be completely healthy after treatment</span>', a: 'm', e: '<span class="type">MYTH: </span>If an individual suffers from an eating disorder during the "critical window" of growth and development, medical complications that resulted from weight loss can be permanent. These irreversible changes are usually related to body changes related to growth and development during puberty and may include decreased height growth, delayed puberty, decreased bone density, and changes in cognition.'},
	'm-300' : {q: '<span class="q">You need to be skinny to be malnourished</span>', a: 'm', e: '<span class="type">MYTH: </span>Malnutrition can be classified by a low BMI or by measures of significant weight loss; therefore, one can be malnourished yet maintain a normal or high BMI. A change in weight, including the amount of weight lost and the time frame of weight loss (how fast), is a stronger determinant of malnutrition severity. Severe malnutrition is classified by a loss of 20% or more in body weight over a one year period OR a loss of 10% or more in body weight over a 6 month period.'},
	'm-400' : {q: '<span class="q">The number one cause of death from eating disorders is related to cardiac issues</span>', a: 'f', e: '<span class="type">FACT: </span>The cardiac system experiences many changes from malnutrition due to eating disorders with the most significant change being bradycardia, or low heart rate. A normal heart rate for the average adult is around 60-100 bpm (beats per minute). An individual with bradycardia has a heart rate of 45bpm or less, putting them at increased risk for cardiac arrest which is the #1 cause of death among individuals with eating disorders. Malnourishment can also cause the body to eat away at the heart for nutrients, decreasing the ventricular wall mass and decreasing the pumping efficiency of the heart. These structural changes coupled with bradycardia lower the blood and oxygen circulation throughout the body, which can cause symptoms such as dizziness, fainting, and acrocyanosis (cold and blue hands and feet).'},
	'm-500' : {q: '<span class="q">When it comes to mortality, you are better off being addicted to heroin than suffering from an eating disorder</span>', a: 'f', e: '<span class="type">FACT: </span>Eating disorders have the highest mortality rate of any psychiatric illness with approximately 10% of eating disorder cases resulting in death. The number one cause of death from eating disorders relates to cardiac issues. Suicide is the second leading cause of death.'},
	'c-100' : {q: '<span class="q">Eating disorders only affect Americans</span>', a: 'm', e: '<span class="type">MYTH: </span>'},
	'c-200' : {q: '<span class="q">Eating disorders can’t affect racial and ethnic minorities</span>', a: 'm', e: '<span class="type">MYTH: </span>While some may believe that men and women of minorities are immune to eating disorders, it has been found that minorities, especially women of minorities, may be more vulnerable to developing an eating disorder. This is due to the the stress that minorities face from just being a minority group, but also from the exposure and acculturation to the Western identity which is associated with higher rates of eating disorders. The pressure of membership in multiple groups along with environmental stress can induce eating disorders.'},
	'c-300' : {q: '<span class="q">Eating disorders are only influenced by culture</span>', a: 'm', e: '<span class="type">MYTH: </span>While a particular gene has not been identified as a cause for eating disorders, it has been found that culture alone can not account for eating disorders. Since anorexia nervosa (AN) behaviors have been documented throughout history and rates of cases have remained relatively constant, it is believed that AN could exist without culture. Neither genes nor culture alone can be found as the cause of eating disorders; it is likely that it is more of an interaction between genes and culture. Individuals can have a genetic predisposition to developing an eating disorder, and when exposed to environmental influences (culture) and lead to its onset.'},
	'c-400' : {q: '<span class="q">Bulimia exists only in cultures exposed to Western ideals</span>', a: 'f', e: '<span class="type">FACT: </span>When comparing rates of eating disorders between cultures that have been exposed to Western culture and those sheltered from Western ideals, results showed that bulimia nervosa (BN) does not exist in cultures without Western exposure. Therefore, it is believed that BN is more influenced by culture. Supporting evidence includes a significant increase in the number of BN cases in the later half of the 20th century and a lack of BN cases in early historical texts. Surprisingly, it is believed that anorexia nervosa (AN) would exist without culture as some cases of AN could not be connected to Western culture. Cases of AN have been identified throughout history and the rate of AN cases has remained relatively constant over time.'},
	'c-500' : {q: '<span class="q">Men are less sensitive to external pressures regarding body image</span>', a: 'm', e: '<span class="type">MYTH: </span>The Tripartite and Dual Pathway Models illustrate the development of eating disorders. Both models support that cultural ideals pressure individuals to follow and maintain cultural norms and that internalization of the thin ideal is used to relieve those cultural pressures. Internalization of the thin ideal is the degree to which an individual’s awareness of their body ideal correlates to body dissatisfaction; high internalization of the thin ideal means thinking a lot about being thin and believing oneself that thinness is important. For men, there is a stronger emphasis on being fit and muscular rather than being thin. While men are preached a different message, they are exposed to similar influences that women are exposed to. However, it has been found that men experience less internalization and are therefore more sensitive to external pressures such as peers, parents, and media.'},
	'n-100' : {q: '<span class="q">There are certain temperaments and personality traits that are exhibited by individuals with eating disorders</span>', a: 'f', e: '<span class="type">FACT: </span>Individuals with eating disorders display certain temperament and personality traits that are important to the development and maintenance of the eating disorder. These traits are related to the neural circuits that are responsible for irregular appetite and disordered eating. Some characteristics include:<ul><li>elevated anxiety/harm avoidance</li><li>altered reward sensitivity</li><li>altered cognitive flexibility/inhibition</li><li>altered interoceptive awareness</li></ul>'},
	'n-200' : {q: '<span class="q">Anxiety disorder is strongly correlated with eating disorders</span>', a: 'f', e: '<span class="type">FACT: </span>A study done across different countries/continents comparing the rates of anxiety disorder (AD) and eating disorders (ED) revealed that around 2/3rds of ED cases existed in patients with a history of AD. Anxiety can be seen in many eating disorders; in anorexia, food leads to a sense of anxiousness. It is believed that this anxiousness is the driving force for restrictive eating behavior.'},
	'n-300' : {q: '<span class="q">Treatment of eating disorders requires fixing eating habits only</span>', a: 'm', e: '<span class="type">MYTH: </span>Although there is no one brain "center" for eating disorders, altered neurobiology in patients with eating disorders reveals a neurological basis for their behavior. Treatments that lack psychiatric support and therapy have been proven to be inadequate for patients with chronic eating disorders. With developing knowledge on how behavior is encoded in the brain, new treatments can be designed to target those mechanisms, improving effectiveness and decreasing the likelihood of relapse.'},
	'n-400' : {q: '<span class="q"> Individuals with anorexia experience abnormal reinforcement of reward and inhibition from eating</span>', a: 'f', e: '<span class="type">FACT: </span>Our brain learns through reward and punishment. We reinforce positive experiences with a reward which increases future motivation through the limbic circuit. Similarly, we learn to avoid experiences that we find aversive through the cognitive control circuit. Individuals with anorexia experience stronger control of their cognitive control circuit, leading to difficulty in encoding reward and motivation. A study testing the gustatory response to sweet taste, a primary motivator of behavior, resulted in decreased responsiveness to sucrose in those with anorexia. This revealed that the brain was under responsive (when compared to control) to reward in patients with anorexia.'},
	'n-500' : {q: '<span class="q">Eating disorders are a choice</span>', a: 'm', e: '<span class="type">MYTH: </span>'}
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

