import React from 'react';
import MyLi from '../MyLi';
import { Link } from 'react-router-dom';

export const whatDoYouKnow =
<div className="what-do-you-know">
	<h4>What Do You <span>Know</span> About <span>Dyslexia</span>?</h4>
	<ul>
		{`Dyslexia is a language-based learning disability or disorder that includes poor word reading, word decoding, oral reading fluency and spelling
		Dyslexia in not just about getting letters or numbers mixed up or out of order
		Over 50% of NASA employees are dyslexic
		It is estimated that 1 in 10 people have dyslexia
		Over 40 million American Adults are dyslexic - and only 2 million know it
		Dyslexia is not tied to IQ - Einstein was dyslexic and had an estimated IQ of 160
		Dyslexia occurs in people of all backgrounds and intellectual levels
		Dyslexia has nothing to do with not working hard enough
		20% of school-aged children in the US are dyslexic
		Dyslexia is hereditary
		Dyslexics may struggle with organizational skills, planning and prioritizing, keeping time, concentrating with background noise.
		People with dyslexia excel or even gifted in areas of art, computer science, design, drama, electronics, math, mechanics, music, physics, sales and sports`.split('\n').map(i => <MyLi key={i} text={i} />)}
	</ul>
</div>

export const readingIsntDifficult =
<div className="reading-isnt-difficult">
	<h4>Reading <span>Doesn't</span> Have to be <span>Difficult</span></h4>
	<span><p>﻿﻿﻿SpellRead, a&nbsp;<span>results-driven</span>, scientifically evaluated, intensive&nbsp;<span>reading intervention program</span> for s﻿﻿tudents who&nbsp;<span>struggle with reading ﻿acquisition﻿</span>, for students who are&nbsp;<span>not fluent readers</span>, and for students who&nbsp;<span>do not retain or comprehend what they read</span>. The research-based instructional methods help students overcome phonological auditory processing problems (how sounds are organized) frequently associated with students who have reading disabilities. ﻿﻿﻿﻿﻿</p></span>
	<button><Link to="/why-spellread-works"><span>Why Does SpellRead Work?</span></Link></button>
</div>

export const signsAndIndicators = 
<div className="signs-and-indicators">
	<h4>Signs and Key <span>Indicators</span></h4>
	<ul>
		{`Ages 5+
Have diagnosed or undiagnosed learning disabilities which impair their reading ability
Are receiving (or have received) special services at school for reading difficulties
Have previously found other reading programs to be ineffective
Are currently struggling to acquire reading skills
History of struggling to become efficient, effective readers
Functioning 1+ years below grade level`.split('\n').map(i => <MyLi key={i} text={i} />)}
	</ul>
</div>

export const progress = 
<div className="progress">
	<h4>Measurable <span>Progress</span></h4>
	<ul>
		{`Phonological Skills
Word attack skills
Word Identification
Oral reading fluency
Comprehension
Spelling`.split('\n').map(i => <MyLi key={i} text={i} />)}
	</ul>
</div>
