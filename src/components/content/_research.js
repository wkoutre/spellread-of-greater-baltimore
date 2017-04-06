import React from 'react';
import Effectiveness from '../../css/images/effectiveness-rating.jpg';
import Comprehension from '../../css/images/comprehension.jpg';
import MyLink from '../MyLink';

const Video1 = ['video', <iframe src="https://www.youtube.com/embed/sfMEGUwJ8Fk" frameBorder="0" allowFullScreen></iframe>];

const Video2 = ['video', <iframe src="https://www.youtube.com/embed/k6i8b46w2eU" frameBorder="0" allowFullScreen></iframe>];
const Wwc = (
	['wwc',
	<div>
		<h3>Paraphrased from&nbsp;
		<MyLink link="https://ies.ed.gov/ncee/wwc/WhatWeDo" text="its website"/>:</h3>
		<blockquote>
			The What Works Clearinghouse is a sub-organization of the U.S. Department of Education that was established in 2002. It is a central, trusted source of scientific evidence on education programs, products, practices, and policies, focusing its research to answer the question:<div style={{"textAlign":"center"}}><strong><br/>"What works in education?"</strong></div>
		</blockquote>
	</div>]
);

const effectiveness = <img src={Effectiveness} alt="SpellRead's Effectiveness"/>

const comprehension = <img src={Comprehension} alt="Reading comprehension gains in SpellRead compared with other programs" />

export const content = [Wwc, ['effectiveness', effectiveness], ['comprehension', comprehension], Video1, Video2];
export const buttonArray = ['SpellRead\'s Effectiveness', 'Comprehension', 'SpellRead in the Classroom', 'SpellRead Lesson in Action', 'What Works Clearinghouse'];
export const headers = ['What Works Clearinghouse (WWC)', 'SpellRead\'s Effectiveness', 'Comprehension', 'SpellRead in the Classroom', 'SpellRead Lesson in Action']


