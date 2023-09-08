"use client"
import { useOrigin } from '@/hooks/use-origin';
import { useParams } from 'next/navigation';
import { FC } from 'react' 
import { ApiAlert } from './api-alert';

interface ApiListProps {
    entityName:string;
    entityIdName:string;
 
} 

const ApiList: FC<ApiListProps> = ({
    entityName,entityIdName
}) => {
    
    const params = useParams();
    const origin = useOrigin();

    const baseUrl = `${origin}/api/${params.storeId}`;

    return (
        <>
            <ApiAlert 
                title='GET'
                varieant='public'
                description={`${baseUrl}/${entityName}`}
            />

            <ApiAlert 
                title='GET'
                varieant='public'
                description={`${baseUrl}/${entityName}/{${entityIdName}}`}
            />
            <ApiAlert 
                title='POST'
                varieant='admin'
                description={`${baseUrl}/${entityName}`}
            />
            <ApiAlert 
                title='PATCH'
                varieant='admin'
                description={`${baseUrl}/${entityName}/{${entityIdName}}`}
            />
            <ApiAlert 
                title='DELETE'
                varieant='admin'
                description={`${baseUrl}/${entityName}/{${entityIdName}}`}
            />
        </>
    )
}

export default ApiList