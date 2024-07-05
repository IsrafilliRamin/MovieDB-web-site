import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import InputFileUpload from '../common/UploadInput'
import FormattedInputs from '../common/InputNumber'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ButtonGroup } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { editMovies, getEditAllValues } from '../../redux/createSlice/counterSlice'

const EditForm = ({ item }) => {

      const [title,setTitle]= useState("");
      const [originalTitle,setOriginalTitle]= useState("");
      const [overview,setOverview]= useState("");
      const [votarge,setVotarage]= useState(1);
      const [dataValue,setDataValue]= useState("");
      const [uploadValue,setUploadValue]= useState("");
      const [uploadValue2,setUploadValue2]= useState("");


    const { allEditVal } = useSelector(state => state.allState)
console.log(allEditVal,"TEST");
    const dispatch = useDispatch();


    const submit = (e) => {
        e.preventDefault();
        const allEditvalue = {
            title: title,
            originalTitle: originalTitle,
            overview:overview,
            votarge:votarge,
            dataValue:dataValue.$d,
            uploadValue:uploadValue,
            uploadValue2:uploadValue2
        }
        dispatch(getEditAllValues(allEditvalue));
        dispatch(editMovies(item.id));
    };

    return (
        <form onSubmit={submit} className='w-full flex flex-col gap-2'>
            {/*  <InputLabel htmlFor="my-input">Tittle</InputLabel> */}
            <Input placeholder={item.title} onChange={(e) => setTitle(e.target.value)} className='w-full' value={title} id="my-input" aria-describedby="my-helper-text" />
            {/*   <InputLabel htmlFor="my-input1">Original Title</InputLabel> */}
            <Input placeholder={item.original_title} onChange={(e) => setOriginalTitle(e.target.value)} value={originalTitle} className='w-full' id="my-input1" aria-describedby="my-helper-text" />
            <Input placeholder={item.overview} onChange={(e) => setOverview(e.target.value)} value={overview} className='w-full' id="my-input2" aria-describedby="my-helper-text" />
            <FormattedInputs setVotarage={setVotarage} votarge={votarge} item={item} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(e) => setDataValue(e)} />
            </LocalizationProvider>
            <div className='flex items-center gap-2'>
                <InputFileUpload setUploadValue={setUploadValue} />
                <InputFileUpload setUploadValue={setUploadValue2} />
            </div>

            <button className='bg-blue-500'>Edit Movies</button>
        </form>
    )
}

export default EditForm