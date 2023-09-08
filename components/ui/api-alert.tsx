"use client"
import { FC } from 'react' 
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CopyIcon, Server } from 'lucide-react';
import { Badge, BadgeProps } from './badge';
import { Button } from './button'; 
import { toast } from 'react-hot-toast';

interface ApiAlertProps {
    title:string;
    description:string;
    varieant:"public"|"admin" ; 
}

const textMap: Record<ApiAlertProps["varieant"],string> = {
 public : "Public",
 admin : "Admin"
};

const variantMap: Record<ApiAlertProps["varieant"],BadgeProps["variant"]> = {
    public : "secondary",
    admin : "destructive"
};

export const ApiAlert:FC<ApiAlertProps> = ({
    title, description,varieant='admin'
}) =>{
    const onCopy = () =>{
        navigator.clipboard.writeText(description) ;
        toast.success("API Route copied to clipboard !")
    }
    return(
        <Alert>
            <Server className="h-4 w-4" />
            <AlertTitle className='flex items-center gap-x-2'>
                {title}
                <Badge variant={variantMap[varieant]}>
                    {textMap[varieant]}
                </Badge>
            </AlertTitle>
            <AlertDescription className='mt-4 flex items-center justify-between '>
                <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold'>
                    {description}
                </code>
                <Button variant="outline" size="icon" onClick={onCopy}>
                    <CopyIcon className='h-4 w-4' />
                </Button>
            </AlertDescription>
        </Alert>
    )
}
// export default ApiAlert ; 