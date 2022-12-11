import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDatabase, faStar, faCodeBranch, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar  } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faAws, faBootstrap, faJava, faJsSquare, faNode, faPython, faReact, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import "./Skills.css"

interface ICardSoftSkill{
  title:string;
  subTitle:string;
  description:string;
}

interface ICardCodeSkill{
  icon: IconProp;
  key: string;
  description: string;
  rateOver5:number;
}
function renderRatio(ratio:number){
  let listCard = []; let k = 0;
  for(let i = 0; i < ratio ; i++){  
    listCard.push(<FontAwesomeIcon key={k} icon={faStar as IconProp} className="mr-2"/>)
    k++;
  }

  const diff = 5 - ratio;
  for(let i = 0; i < diff ; i++){
    listCard.push(<FontAwesomeIcon key={k} icon={farStar as IconProp} className="mr-2"/>)
    k++;
  }
  return listCard
        
        
        
}
function renderRowCard(cardList:Array<ICardSoftSkill>){
  
  return cardList.map((card:ICardSoftSkill)=>{  
    return <OverlayTrigger
              key={card.title}
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={ <Tooltip id="button-tooltip">{card.description}</Tooltip>}>
            <Col md = {2} style={{cursor: 'default'}}>
              <Card className="border-0">
                <Card.Title><h1 className='text-center'>{card.title}</h1></Card.Title>
                <Card.Subtitle className='text-center'>{card.subTitle}</Card.Subtitle>
              </Card>
            </Col>
          </OverlayTrigger>
  })
}

function renderCodeSkillCard(codeSkillList:Array<ICardCodeSkill>){
  return codeSkillList.map((card:ICardCodeSkill, i:number)=>{
    return <OverlayTrigger
              key={card.key}
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={ <Tooltip id="button-tooltip">{card.description}</Tooltip>}>
            <Col md = {2} style={{cursor: 'default'}}>
              <Card className="border-0">
                <Card.Title><h1 className='text-center'><FontAwesomeIcon icon={card.icon as IconProp} style={{color:'#51769a'}}/></h1></Card.Title>
                <Card.Subtitle className='text-center'>{card.key}</Card.Subtitle>
                <Card.Footer  className='text-center border-0' style={{background: 'white'}}>
                  {renderRatio(card.rateOver5)}
                </Card.Footer>
              </Card>
            </Col>
            </OverlayTrigger>
  })
}

function renderRowCodeSkill(codeSkillList:Array<ICardCodeSkill>){
  const cardList:Array<any> = renderCodeSkillCard(codeSkillList);
  let rows:Array<any> = []; let toRender:Array<any> = [];
  cardList.forEach((card:any, i:number)=>{
    toRender.push(card);
    if((i+1) % 6 === 0) {
      rows.push(<Row key={i} className='mt-4'>{toRender}</Row>)
      toRender = [];
    }
  })
  return rows

}

function Skills(){
  const {t} = useTranslation();
  
  const cardSoftSkills:Array<ICardSoftSkill> = [
    {title:"💪", subTitle: t('skills.soft01'), description: t('skills.soft01.desc')}, {title:"🤔", subTitle: t('skills.soft02'), description: t('skills.soft02.desc')}, {title:"🤝", subTitle: t('skills.soft03'), description: t('skills.soft03.desc')},
    {title:"🗣", subTitle: t('skills.soft04'), description: t('skills.soft04.desc')}, {title:"🎯", subTitle: t('skills.soft05'), description: t('skills.soft05.desc')}, {title:"😄", subTitle: t('skills.soft06'), description: t('skills.soft06.desc')}]
  
    const cardCodeSkills:Array<ICardCodeSkill> = [
    {icon: faAngular as IconProp, key:"Angular2+", description: t('skills.code01.desc'), rateOver5: 4},
    {icon: faBootstrap as IconProp, key:"Bootstrap", description: t('skills.code02.desc'), rateOver5: 4},
    {icon: faJsSquare as IconProp, key:"JavaScript", description: t('skills.code03.desc'), rateOver5: 4},
    {icon: faNode as IconProp, key:"NodeJS", description: t('skills.code04.desc'), rateOver5: 3},
    {icon: faReact as IconProp, key:"React", description: t('skills.code05.desc'), rateOver5: 2},
    {icon: faCodeBranch as IconProp, key:"Git", description: t('skills.code06.desc'), rateOver5: 3},
    {icon: faDatabase as IconProp, key:"SQL & NoSQL", description: t('skills.code07.desc'), rateOver5: 3},
    {icon: faJava as IconProp, key:"Java", description: t('skills.code08.desc'), rateOver5: 3},
    {icon: faPython as IconProp, key:"Python", description: t('skills.code09.desc'), rateOver5: 2},
    {icon: faStackOverflow as IconProp, key:"SO copypaster", description: t('skills.code10.desc'), rateOver5: 5},
    {icon: faAws as IconProp, key:"AWS", description: t('skills.code11.desc'), rateOver5: 2},
    {icon: faTerminal as IconProp, key:"Bash", description: t('skills.code12.desc'), rateOver5: 3},
  ]
  return(
    <div>
      <Row className= 'mt-3'>
        <Col className= "text-center"><h1>{t('skills.soft')}</h1></Col>
      </Row>
      <Row className= "mt-3">{renderRowCard(cardSoftSkills)}</Row>
      <Row className= 'mt-3'>
        <Col className= "text-center"><h1>{t('skills.code')}</h1></Col>
      </Row>
      
        {renderRowCodeSkill(cardCodeSkills)}
      
    </div>
  )
}

export default Skills;