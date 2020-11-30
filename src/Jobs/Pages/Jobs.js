import React, { useState, useEffect } from 'react'

import Card from '../../shared/Card'
import LoadingSpinner from '../../shared/LoadingSpinner'
import Job from '../Components/Job'
import FilteredTags from '../Components/FilteredTags'
import FilteredTag from '../Components/FilteredTag'

import './Jobs.css'
import FilteredItem from '../Components/FilteredItem'

function Jobs() {
    const [data, setData] = useState([])
    const [tags, setTags] = useState([])
    const [disableTag, setDisableTag] = useState([])

    //searched items
    const [filteredItems, setFilteredItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let jsonData = await fetch('./data.json', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                const responseData = await jsonData.json()
                setData(responseData)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])

    const filterHanlder = (e) => {
        //button role
        const val = e.target.dataset.role
        //element html text
        const tagValue = e.target.innerText
        //Store data that not match filter critera and update data state
        const newData = []
        let indexed

        data.forEach((o, i) => {
            if (o[val].includes(tagValue)) {
                setFilteredItems(prevState => (
                    [...prevState, o]
                ))
                indexed = o.id
                setDisableTag(prevState => ([...prevState, tagValue]))
            }
            if (o.id !== indexed) {newData.push(o)}
        })
        setData(newData)
        setTags(prevState => ([...prevState, { tagValue, role: val }]))
    }
    const deleteItemHanlder = (e) => {
        const dataVal = e.target.dataset.role
        const tagValue = e.target.dataset.selecteditem
        const newFilteredItems = []
        const newData = []
        const updatedTags = tags.filter(t => t.tagValue !== tagValue)

        filteredItems.forEach(obj => {
            if (obj[dataVal].includes(tagValue)) {
                newFilteredItems.push(obj)
            } else {
                newData.push(obj)
            }
        })
        setFilteredItems([...newData])
        setTags(updatedTags)
        //deleted items from filteredItems place at the bottom of data state after merging into one array
        setData([...data, ...newFilteredItems])
    }
    //clear all search results
    const clearSearchHanlder = () => {
        setFilteredItems([])
        setTags([])
        setData([...data, ...filteredItems])

    }
    return (
        <>
            <header></header>
            <div>
                {!data && <Card className='textCenter'>
                    <LoadingSpinner />
                </Card>}
                {
                    tags.length > 0 && <FilteredTags clearSearchHanlder={clearSearchHanlder}>
                        {
                            tags.map(t => {
                                return (
                                    <FilteredTag
                                        onClick={deleteItemHanlder}
                                        role={t.role}
                                        key={t.tagValue}
                                        selectedItem={t.tagValue} />
                                )
                            })
                        }
                    </FilteredTags>
                }
                {
                    filteredItems.map(job => {
                        return (
                            <FilteredItem
                                disableTag={disableTag}
                                onClick={filterHanlder}
                                isFiltered="filtered"
                                key={job.id}
                                logo={job.logo}
                                company={job.company}
                                new={job.new}
                                featured={job.featured}
                                position={job.position}
                                postedAt={job.postedAt}
                                contract={job.contract}
                                location={job.location}
                                role={job.role}
                                level={job.level}
                                languages={job.languages}
                                tools={job.tools} />
                        )
                    })
                }
                {
                    data.map(job => {
                        return (
                            <Job
                                key={job.id}
                                onClick={filterHanlder}
                                logo={job.logo}
                                company={job.company}
                                new={job.new}
                                featured={job.featured}
                                position={job.position}
                                postedAt={job.postedAt}
                                contract={job.contract}
                                location={job.location}
                                role={job.role}
                                level={job.level}
                                languages={job.languages}
                                tools={job.tools} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default Jobs