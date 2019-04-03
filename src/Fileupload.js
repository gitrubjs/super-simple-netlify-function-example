import React,{useCallback} from 'react'
import axios, { post } from 'axios';
import {useDropzone} from 'react-dropzone'

function fileUpload(file){
    const url = 'https://quirky-colden-e45f91.netlify.com/.netlify/functions/upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    Promise.all(acceptedFiles.map(fileUpload)).then(resp => {
        console.log(resp);
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
 
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}



export default MyDropzone