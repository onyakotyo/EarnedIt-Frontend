import React, { useState, useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { saveSendCountry} from '../actions/orderActions'


const CountrySelector = ({history}) => {

  const order = useSelector((state) => state.order)
  //const { sendCountry } = order


  console.log('SendCountry',order)

  //const [value, setValue] = useState(sendCountry)
  //const [label, setLabel] = useState(sendCountry.value.label)

  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = (value) => {
  
      setValue(value)

      dispatch(saveSendCountry( value))
     
  }



    return (

        <Select 
        className="py-3" 
        options={options} 
        value={value} 
        onChange={changeHandler }
        />

    )
}

export default CountrySelector
