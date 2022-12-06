import React, { useState, createContext, useContext } from "react";


const Context = createContext<any>(null);

const data = [
    {
        id: "1",
        name: "# **Areas related to Circles**",
        topics: "Important PYQs + MCQs",
        fileName: "PDF file",
        file: "https://drive.google.com/file/d/1j8dA-vCGqEGc1pNAWKKlC_G_Na4S3fXP/preview"
    },
    {
        id: "2",
        name: "# **Cordinate geometry**",
        topics: "Important PYQs + MCQs",
        fileName: "PDF file",
        file: "https://drive.google.com/file/d/1itNeaYppoa5ID8WJ5rT4GX0cYOGAB3Lt/preview"
    },
    {
        id: "3",
        name: "# **Intro to trignometry**",
        topics: "Important PYQs + MCQs",
        fileName: "PDF file",
        file: "https://drive.google.com/file/d/1j0IfxeqRhOlzUikBDR6He6mqXFGiswyw/preview"
    },
    {
        id: "4",
        name: "# **Linear Equations**",
        topics: "Important PYQs + MCQs",
        fileName: "PDF file",
        file: "https://drive.google.com/file/d/1ieMcSrh2xQri5iSKw3VVI2wWN68MH3LS/preview"
    },

    {
        id: "5",
        name: "# **Polynomials**",
        topics: "Important PYQs + MCQs",
        fileName: "PDF file",
        file: "https://drive.google.com/file/d/1ibKcrx7K038_ZJocd_YT4oxwUR8GC0P4/preview"
    },
    {
        id: "6",
        name: "# **Probability**",
        topics: "Important PYQs + MCQs",
        fileName: "PDF file",
        file: "https://drive.google.com/file/d/1jBV3cxIDyyKQIMh1Cx3jkWdS-TqDQXmK/preview"
    },
    {
        id: "7",
        name: "# **Real numbers**",
        topics: "Important PYQs + MCQs",
        fileName: "PDF file",
        file: "https://drive.google.com/file/d/1iPzo7AafL-4egvCH2YP-8KchRMHuIzZQ/preview"
    },
    {
        id: "8",
        name: "# **Triangle**",
        topics: "Important PYQs + MCQs",
        fileName: "Video",
        videoFile: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
    },
    {
        id: "9",
        name: "# **Random Image**",
        topics: "an Image",
        fileName: "Image",
        ImageFile: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
    },
    {
        id: "10",
        name: "# **YouTube Link**",
        topics: "A link to Youtube",
        fileName: "Link",
        link: "https://www.youtube.com"
    },
]




export const StateContext = ({ children }: any) => {
    const [PDF, setPDF] = useState("");
    const [video, setVideo] = useState("");
    const [isVideo, setIsVideo] = useState(false)
    const [selectedRow, setSelectedRow] = useState(0);
    const [image, setImage] = useState("");
    const [isImage, setIsImage] = useState(false)
    const [link, setLink] = useState("")
    const [isLink, setIsLink] = useState(false)


    const onAddPDF = (PDF: any) => {
        setPDF(PDF)
    };

    const onVideoAdd = (video: any) => {
        setVideo(video)
    }

    const onSelectedRow = (index: any) => {
        setSelectedRow(index)
    }

    const onAddImage = (image: any) => {
        setImage(image)
    }

    const onNext = () => {
        if (selectedRow + 1 < data.length) {
            setSelectedRow(selectedRow + 1)
            if (data[selectedRow].fileName === "Video") {
                setIsVideo(true)
            }
            else {
                setIsVideo(false)
            }
        }
        return
    }

    const onPrev = () => {
        if (selectedRow > 0) {
            setSelectedRow(selectedRow - 1)
            if (data[selectedRow].fileName === "Video") {
                setIsVideo(true)
            }
            else {
                setIsVideo(false)
            }
        }
        return;
    }

    const onLinkAdd = (link: any) => {
        setLink(link);
    }

    return (
        <Context.Provider value={{
            PDF,
            setIsImage,
            isImage,
            image,
            onAddImage,
            onAddPDF,
            onVideoAdd,
            setIsVideo,
            isVideo,
            video,
            data,
            onSelectedRow,
            selectedRow,
            onNext,
            onPrev,
            link,
            isLink,
            onLinkAdd,
            setIsLink
        }}>{children}</Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
