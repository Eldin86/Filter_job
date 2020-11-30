import React from 'react'

import Button from '../../shared/Button'

import './Job.css'

function Job(props) {
    const tags = [...new Set(props.disableTag)]
    //console.log(props.disableTag)
    //console.log('props.disableTag',tags)
    const languages = (props.languages.map(lang => {
        return (
            <span key={lang}>
                <Button 
                    //disabled={props.disableTag.includes(lang) ? true: false} 
                    bgColor="lightGrey" 
                    role="languages" 
                    onClick={props.onClick}>{lang}
                </Button>
            </span>
        )
    }))
    const tools = (props.tools.map(tool => {
            return (
                <span key={tool}>
                    <Button 
                        // disabled={props.disabled === tool ? true : false} 
                        bgColor="lightGrey" role="tools" 
                        onClick={props.onClick}>{tool}
                    </Button>
                </span>
            )
        })
    )
    return (
        <div className={`JobItem ${props.isFiltered || ''}`}>
            <div className="Logo_Description">
                <div className="Logo">
                    <img src={props.logo} alt={props.company} />
                </div>
                <div className="JobDescription">
                    <div>
                        <span className="CompanyName f-500">{props.company}</span>
                        <span className={`f-500 ${props.new ? "New" : null}`}>{props.new ? 'NEW!' : null}</span>
                        <span className={`f-500 ${props.featured ? `Featured` : null}`}>{props.featured ? 'FEATURED' : null}</span>
                    </div>
                    <div className="Position">
                        <p className="f-700">{props.position}</p>
                    </div>
                    <div className="Job_Contract_Details">
                        <span>{props.postedAt}</span><span>&#8226;</span>
                        <span>{props.contract}</span><span>&#8226;</span>
                        <span>{props.location}</span>
                    </div>
                </div>
            </div>
            <div className="JobSkills">
                <span><Button 
                    // disabled={props.disabled === props.role ? true : false} 
                    bgColor="lightGrey" role="role" 
                    onClick={props.onClick}>
                        {props.role}
                    </Button>
                </span>
                <span>
                    <Button 
                        // disabled={props.disabled === props.level ? true : false} 
                        bgColor="lightGrey" 
                        role="level" 
                        onClick={props.onClick}>{props.level}
                    </Button>
                </span>
                {languages}
                {tools}
            </div>
        </div>
    )
}

export default Job
