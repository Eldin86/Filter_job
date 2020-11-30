import React from 'react'

import Button from '../../shared/Button'

import './FilteredTags.css'

function FilteredTags(props) {
    return (
        <div className="FilteredTags">
            <ul>
                {props.children}
            </ul>
            <div className="Clear_All-btn">
                <Button onClick={props.clearSearchHanlder} bgColor="transparent">Clear</Button>
            </div>
        </div>
    )
}

export default FilteredTags
