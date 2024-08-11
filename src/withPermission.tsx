import React, { useMemo } from "react";
import { usePermissions } from "./PermissionProvider";

export const withPermission = <P extends Object>(
  WrappedComponent: React.ComponentType<P>,
  requirePermissions: string[] =[],
  RenderAuthFailed?:React.ComponentType<P> |  React.ReactElement 
) => {
  
  return (props: P) => {
    const {permissions} = usePermissions();
    const hasPermission = useMemo(() => {
      return requirePermissions.some((permission) =>
        permissions.includes(permission)
      );
    }, [permissions]);

    return hasPermission ? 
      <WrappedComponent {...props} />
      : 
      typeof RenderAuthFailed === 'function' ? (
        // Render the component type
        React.createElement(RenderAuthFailed)
      ) : (
        // Render the React element or node
        RenderAuthFailed || null
      )
  
  };
};
