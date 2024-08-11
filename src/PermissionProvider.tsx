import React, { createContext, ReactNode, useContext,useEffect, useState } from 'react'
import { getPermissions, savePermissions } from './store/save'

type PermissionProviderProps = {
    permission?:string[],
    children:ReactNode
}

type permissions={
  permissions:string[],
  setPermissions:(permissions:string[])=>void
}


const PermissionContext=createContext<permissions>({permissions:[],setPermissions:(permissions)=>{}});


export const PermissionProvider = ({permission=[],children}:PermissionProviderProps) => {

  const [permissions,setPermission] = useState(getPermissions(permission));
  
  useEffect(() => {savePermissions(permissions)}, [permissions]);
  
  const setPermissions = (permission: string[]) => {setPermission(permission)};
 
  return (
    <PermissionContext.Provider value={{permissions,setPermissions}}>
        {children}
    </PermissionContext.Provider>
  )
}
 
 

export const usePermissions=()=>useContext(PermissionContext)


export const hasPermission=(requirePermissions:string[])=>{
    
        return requirePermissions.every((permission) =>
          usePermissions().permissions.includes(permission)
        );
    }
  




