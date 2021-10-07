import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
 const FilterwithRating = ({name, value, setFilterRating}) => {
    return (
        <div>
                 <StarRatingComponent
                      starCount={10}
                        name={name}
                          
                      onStarClick={(nextValue, prevValue, name)=>setFilterRating(nextValue)}

              /> 
        </div>
    )
}

export default FilterwithRating