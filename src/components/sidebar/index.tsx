import React, { useState } from 'react'

import { IoIosArrowDown } from "react-icons/io";
import { FiLink2 } from "react-icons/fi"
import { useStateContext } from 'src/AppContext';

import ReactMarkdown from 'react-markdown'



export const Sidebar = () => {
    const [show, setShow] = useState(false)

    const {
        onAddPDF,
        onVideoAdd,
        setIsVideo,
        data,
        onSelectedRow,
        selectedRow,
        onAddImage,
        setIsImage,
        setIsLink,
        onLinkAdd
    } = useStateContext();


    return (
        <div className='text-white side_bar'>
            <div className='sidebar_header p-4 bg-[#333333]'>
                <h2 className='text-2xl font-bold text-center '>Chapters & Resources</h2>

            </div>
            <div className='sidebar_content'>
                <h2 className='text-2xl font-bold text-center p-4'>Chapters & Resources</h2>
                <div className='chapters flex flex-col gap-4 p-4'>
                    {data.map((item: any, idx: any) => {
                        return (
                            <div className='a_chapter py-4 px-6 rounded-2xl cursor-pointer' onClick={() => {
                                onSelectedRow(idx)
                                setShow(true)

                            }}>
                                <div className='flex items-center' >
                                    <div className='flex-auto'>
                                        <ReactMarkdown>{item.name}</ReactMarkdown>
                                        <p>{item.topics}</p>
                                    </div>
                                    <div>
                                        <div style={{ transform: show === true && selectedRow === idx ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }}>
                                            <IoIosArrowDown />
                                        </div>
                                    </div>
                                </div>
                                {show === true && selectedRow === idx ?
                                    <div className='flex items-center py-2 px-6 mt-3 rounded-lg gap-4' onClick={() => {
                                        if (item.fileName === "Video") {
                                            onVideoAdd(item.videoFile)
                                            setIsVideo(true)
                                            setIsImage(false)
                                            setIsLink(false)
                                        }
                                        else if (item.fileName === "PDF file") {
                                            onAddPDF(item.file)
                                            setIsVideo(false)
                                            setIsImage(false)
                                            setIsLink(false)
                                        }
                                        else if (item.fileName === "Image") {
                                            onAddImage(item.ImageFile)
                                            setIsImage(true)
                                            setIsVideo(false)
                                            setIsLink(false)
                                        }
                                        else {
                                            onLinkAdd(item.link)
                                            setIsLink(true)
                                            setIsImage(false)
                                            setIsVideo(false)
                                        }
                                    }} style={{ backgroundColor: "#555555" }}>

                                        <FiLink2 />
                                        <h4 className='text-md font-semibold p-0 m-0'>{item.fileName}</h4>
                                    </div>
                                    : null}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

