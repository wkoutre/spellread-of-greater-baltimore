import React from 'react';
import Logo from '../../css/images/spell-read-logo.png';
import MyLink from '../MyLink';



export const facebook = <MyLink text="Facebook" link="https://www.facebook.com/SpellReadPAT" />
export const linkedin = <MyLink link="https://www.linkedin.com/in/joan-collins-49594150/" text="LinkedIn"/>
export const sections = ['Social Media', 'Contact', 'Address', ''];
export const address = <MyLink id="address" link="https://goo.gl/BFDe74" text={<span>3454 Ellicott Center Dr.,<br/> Suite 203</span>}/>;
export const email = <span>Email:&nbsp;<MyLink link="mailto:jcollinsspellread@gmail.com" text="jcollinsspellread@gmail.com"/></span>
export const office = <span>Office:&nbsp;<MyLink link="tel:+1-410-465-0280" text="410.465.0280"/></span>
export const fax = <span>Fax:&nbsp;<MyLink link="fax:+1-410-465-0280" text="410.465.0280"/></span>
export const copyright = <span>Copyright © 2017<br/><br/>
													<MyLink text="Nick Koutrelakos" link="https://github.com/wkoutre"/>
												</span>

export const logo = <img src={Logo} alt={"SpellRead logo"}/> 

export const linkInfo = [['WWC Info', 'https://ies.ed.gov/ncee/wwc/WhatWeDo'],['2007 Report', 'https://ies.ed.gov/ncee/wwc/EvidenceSnapshot/481'], ['2013 Report', 'https://ies.ed.gov/ncee/wwc/Docs/InterventionReports/wwc_spellread_102116.pdf'], ['Evidence Overview', 'https://ies.ed.gov/ncee/wwc/EvidenceSnapshot/481']];
