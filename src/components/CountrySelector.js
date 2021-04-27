import React, { useState, useMemo} from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const CountrySelector = () => {

    const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

//  console.log(options[0].label)
//  console.log(options[0].value)
  //console.log(options)

  const changeHandler = value => {
    setValue(value)
     
  }

    return (
        <Select className="py-3" options={options} value={value} onChange={changeHandler} />
    )
}

export default CountrySelector
