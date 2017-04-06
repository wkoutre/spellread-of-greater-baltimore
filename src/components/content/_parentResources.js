import React from 'react'
import MyLi from '../MyLi';
import MyLink from '../MyLink';

const quote = `Some studies suggest that the right kinds of instruction provided early enough may rewire the brain so thoroughly that the neurological glitch disappears entirely.`

export const timeQuote = <blockquote
				cite="http://content.time.com/time/world/article/0,8599,2047912,00.html">
				<MyLink
					link="http://content.time.com/time/world/article/0,8599,2047912,00.html"
					text={<span>TIME<br/>Magazine</span>}/>
				<span>{quote}</span>
				</blockquote>

const earlyChildhood = `Delayed speech
Trouble learning simple songs or nursery rhymes
Trouble recognizing rhyming words
Mispronouncing words (aminal for animal; bisketti for speaghetti)
Difficulty learning names of letters or sounds the letters make
Directional confusion (left vs. right)
Late to establish dominant hand
Multiple ear infections
Early stuttering
Difficulty mastering tying of shoes
Immature speech - trouble articulating some sounds ("wed" for "red" and "gween" for "green")`.split('\n');

const olderChildhood = `Slow to acquire reading skills
Recognizes a word on one page but does not recognize the same word on the next page
Inaccurate reading of single, isolated words in the absence of pictures or context to provide clues
Slow or choppy oral reading
Visible fatigue after reading for short periods of time
Letter reversals due to left-right confusion (i.e. b and d)
Poor reading comprehension (due to labored reading)
Omits or misreads small function words such as "a" for "the"
Omits or changes suffixes such as "slow" for "slowly"
Lacks strategy for sounding out familiar words
Fear of reading out loud
Difficulty completing reading or writing assignments independently
Difficulty completing homework in timely fashion
Difficulty completing tests on time
Poor spelling
Avoidance of reading
Poor academic progress or failure
Low self-esteem or behavior problems associated with any of the above
Family history of reading problems`.split('\n');

export const symptoms = (
				<div className="symptoms">
					<h4>Reading Difficulty: <span>Potential Symptoms</span></h4>
					<div className="early-childhood">
						<h5>Early Childhood</h5>
						<ul>
							{earlyChildhood.map(i => <MyLi key={i} text={i}/>)}
						</ul>
					</div>
					<div className="older-childhood">
						<h5>Older Childhood</h5>
						<ul>
							{olderChildhood.map(i => <MyLi key={i} text={i}/>)}
						</ul>
					</div>
				</div>)

const whatWeKnowText = <p><span>Dyslexia is a specific learning disability that is neurological in origin. It is characterized by difficulties with accurate and/or fluent word recognition and by poor spelling and decoding abilities. These difficulties typically result from a deficit in the phonological component of language. For decades, dyslexics have had to tolerate the challenges of dyslexia on daily levels, without hope that the neurological disorder could be overcome. However, with more research on how the brain functions with and without dyslexia, findings are showing that the tide is changing for those suffering with dyslexia.</span></p>

const TimeArticleText = <p><span>An article published by <MyLink
		link="http://www.marklemessurier.com.au/main/workshops/teacher/articles/The%20Time%20Magazine%20The%20New%20Science%20of%20Dyslexia.pdf"
		text="TIME Magazine"/> stated: <em>"...people with dyslexia are not brain damaged. Brain scans show their cerebrums are perfectly normal, if not extraordinary. Dyslexics, in fact, seem to have a distinct advantage when it comes to thinking outside the box. But a growing body of scientific evidence suggests that there is a glitch in the neurological wiring of dyslexics that makes the reading extremely difficult for them. Fortunately, the science also points to new strategies for overcoming the glitch. The most successful programs focus on strengthening the brain's aptitude for linking letters to the sounds they represent."</em>&nbsp;&nbsp;
		<MyLink 
			link="http://www.marklemessurier.com.au/main/workshops/teacher/articles/The%20Time%20Magazine%20The%20New%20Science%20of%20Dyslexia.pdf"
			text="Read more."/></span></p>

export const whatWeKnow = (
				<div className="what-we-know">
				<h4>What We <span>Know Now</span></h4>
					<div>{whatWeKnowText}</div>
					<div>{TimeArticleText}</div>
				</div>)
