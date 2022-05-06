import React, {useEffect, useState} from "react"


const ImageCache = (props) => {
    const {src = ""} = props

    const [imageSrc, setImageSrc] = useState(null)

    useEffect(effect,[])

    async function effect() {
        if (src.startsWith("http")) {
            const item = window.localStorage.getItem(src)
            if (item !== null) {
                setImageSrc(URL.createObjectURL(item))
            } else {
                let response = await fetch(src, {
                    method: "GET"
                })
                if (response.status === 200) {
                    const imageBlob = await response.blob()
                    window.localStorage.setItem(src, imageBlob)
                    setImageSrc(URL.createObjectURL(imageBlob))

                }
            }
        } else {
            setImageSrc(src)
        }
    }


    return <img {...Object.assign({...props}, {src: imageSrc})} />
}

export default ImageCache
