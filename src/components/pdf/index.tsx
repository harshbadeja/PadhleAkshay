import React from 'react'
import { IoPlaySkipForward, IoPlaySkipBack } from "react-icons/io5"
import { useStateContext } from 'src/AppContext'
import ReactPlayer from 'react-player/lazy'


export const Pdf = () => {

  const {
    isVideo,
    video,
    data,
    selectedRow,
    onNext,
    onPrev,
    isImage,
    image,
    isLink,
    link
  } = useStateContext();

  return (
    <div className='flex flex-col flex-auto pdf_container'>
      <div className='flex justify-between p-5 text-white'>
        <h5 className='text-lg font-bold'>MCQ Worksheet</h5>
        <div className=' flex gap-8'>
          <div className='flex gap-2 items-center control-link cursor-pointer' onClick={onPrev}>
            <IoPlaySkipBack />
            <p>Previous</p>
          </div>
          <div className='flex gap-2 items-center control-link cursor-pointer' onClick={onNext}>
            <IoPlaySkipForward />
            <p>Next</p>
          </div>
        </div>
      </div>
      <div className='flex-auto flex flex-col justify-center items-center'>

        {isVideo ?
          <ReactPlayer
            controls
            url={video}
            height={500}
            width={940}
          /> : isImage ?
            <img src={image} alt="" /> : isLink ? <a className='text-white font-weight-bold text-2xl' target="_blank" href={link}>{link}</a> :
              < iframe src={data[selectedRow].file} width="840" height="580" allow="autoplay"></iframe>}

      </div>
    </div >
  )
}
