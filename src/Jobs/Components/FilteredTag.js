import React from 'react'

import './FilteredTag.css'

function FilteredTags(props) {
    return (
        <li className="Delete_Item_Button">
            <span className="Filtered_Item_Tag f-500">{props.selectedItem}</span>
             <button data-selecteditem={props.selectedItem} onClick={props.onClick} data-role={props.role}></button>
        </li>
    )
}
export default FilteredTags
