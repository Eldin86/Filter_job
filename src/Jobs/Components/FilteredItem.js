import React from 'react'

import Button from '../../shared/Button'

import './Job.css'

function FilteredItem(props) {
    //Remove duplicate tags from array
    const uniqueTag = [...new Set(props.disableTag)]
    //Storing languages into variable
    const languages = (props.languages.map((lang, i) => {
        return (
            <span key={`${lang.language}_${i}`}>
                <Button 
                    disabled={uniqueTag.includes(lang)} 
                    bgColor="lightGrey" 
                    role="languages" 
                    onClick={props.onClick}>{lang}
                </Button>
            </span>
        )
    }))
    //Storing tools into variable
    const tools = (props.tools.map(tool => {
            return (
                <span key={tool}>
                    <Button 
                        disabled={uniqueTag.includes(tool)} 
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
                    disabled={uniqueTag.includes(props.role)} 
                    bgColor="lightGrey" role="role" 
                    onClick={props.onClick}>
                        {props.role}
                    </Button>
                </span>
                <span>
                    <Button 
                        disabled={uniqueTag.includes(props.level)} 
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

export default FilteredItem
