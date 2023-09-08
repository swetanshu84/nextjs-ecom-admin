"use client"

import { FC } from 'react' 
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog';

interface ModalProps {
    title:string;
    description:string;
    isOpen:boolean;
    onClose:()=>void;
    children?:React.ReactNode
}

const Modal: FC<ModalProps> = ({
    title,description,isOpen,onClose,children
}) => {
    const onChange = (open:boolean) =>{
        if(!open){
            onClose();
        }
    }
    return (<>
        <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent>
            <DialogHeader> {title} </DialogHeader>
            <DialogDescription>{description}</DialogDescription>
            <div> {children} </div>
        </DialogContent>
        
    </Dialog></>
    )
}

export default Modal