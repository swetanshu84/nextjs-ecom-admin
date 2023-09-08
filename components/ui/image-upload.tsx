"use clinet"
import { FC, useEffect, useState } from 'react' 
import { CldUploadWidget} from "next-cloudinary" ; 
import { Button } from '@/components/ui/button';
import { ImagePlus, Trash } from 'lucide-react';
import Image from 'next/image';

interface imageUploadProps {
    disabled?:boolean;
    onChange:(value:string)=>void;
    onRemove: (value:string)=>void;
    value:string[] 
}

const imageUpload: FC<imageUploadProps> = ({
    disabled,onChange,onRemove,value
}) => {
    const [isMounted, setIsMounted] = useState(false) ; 

    useEffect(()=>{
        setIsMounted(true);
    },[]) ; 

    const onUpload = (result:any)=>{
        onChange(result.info.secure_url) ; 
    }
    if(!isMounted){
        return null ; 
    }
    return (
        <div>
            <div className='mb-4 flex items-center gap-4'>
                {value.map((url)=>(
                    <div key={url} className='relative w-[200px] h-[200px] rounded-md overflow-hidden'>
                        <div className='z-20 absolute top-2 right-2'>
                            <Button  type='button' onClick={()=>onRemove(url)} variant="destructive" size="icon">
                                <Trash className='h-4 w-4'/>
                            </Button>
                        </div>
                        <Image fill alt='Image' src={url}/>
                    </div>
                ))}
            </div>
            <CldUploadWidget onUpload={onUpload} uploadPreset="q5pxen9e">
                {({open})=>{
                    const onClick = () =>{
                        open() ;
                    }
                    return (
                        <Button type='button' disabled={disabled} variant="secondary" onClick={onClick} >
                            <ImagePlus className='h-4 w-4 mr-2' />
                            Upload an Image
                        </Button>
                    )
                }}
            </CldUploadWidget>
        </div>
    )
}

export default imageUpload;