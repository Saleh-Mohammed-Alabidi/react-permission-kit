# React Permission Kit

**React Permission Kit** is a flexible and powerful library designed to simplify the management of UI and components Permission in React applications. With this library, you can effortlessly control the visibility and accessibility of components or UI based on user permission.

## Key Features

- **Granular Control:** Define and manage permission at a granular level, ensuring that only authorized users can access specific components or parts of your application.

- **Easy Integration:** Seamlessly integrate with your existing React applications without the need for extensive refactoring.
- **Context-Based Permission:** Leverage React's context API to provide and manage Permission across your application efficiently.
- **Persistent Permission Storage:** The React Permission Kit allows you to store and persist permissions, ensuring that user access levels are consistently applied across different page reloads.
- **TypeScript Support:** Built with TypeScript, ensuring strong type safety and enhanced developer experience.

## Benefits

- **Enhanced Security:** Protect sensitive parts of your application by restricting access based on user Permission.
- **Improved User Experience:** Provide a tailored user experience by showing or hiding components or UI based on user Permission.
- **Reduced Code Complexity:** Simplify your codebase by centralizing permission logic and reducing the need for manual conditional rendering.

Whether you're building a complex dashboard or a simple user interface, React Permission Kit helps you manage component or UI visibility and access with ease, making it a valuable addition to any React project.


## Installation

### Install the package via npm:

```bash
npm install react-permission-kit
```



## Usage

Setting Up Permission
Wrap your application with the PermissionProvider to provide Permission context to your components.

```javascript
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import reportWebVitals from './reportWebVitals';
import {PermissionProvider} from './PermissionProvider'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  
  <React.StrictMode>
    <PermissionProvider>
       <App/>
    </PermissionProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


```

### Setting Up Permissions via Props

To provide permission context across your application, you can wrap your root component with the PermissionProvider component. This approach allows you to initialize permissions globally and ensures that all child components have access to the permission context.

```javascript
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import reportWebVitals from './reportWebVitals';
import {PermissionProvider} from './PermissionProvider'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  
  <React.StrictMode>
    <PermissionProvider permission={['Page1-View','Page1-Edit']}>
       <App/>
    </PermissionProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();

```


### Set User permissions

In the following example, the Login component demonstrates how to set user permissions after logging in and redirect the user to the Page1 page.

```javascript
// Login.tsx
import React from "react";
import { usePermissions } from "../PermissionProvider";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  // Access the permission hook
  const permission = usePermissions();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Simulate API call to fetch user permissions
    // For example, an API request might return: ["Page1-View", "Page1-Edit"]
    // This is where you would integrate with your authentication and permission API

    // Set the user permissions after successful login
    permission.setPermissions(["Page1-View", "Page1-Edit"]);

    // Redirect the user to the Page1 page
    navigate("/Page1");
  };

  return (
    <>
      <div>Login Page</div>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};



```


### Protecting Components

Use the withPermission higher-order component (HOC) to protect components based on required Permission.

```javascript
// Page1.tsx
import React from 'react';
import { withPermission } from 'react-permission-kit';

const Page1 = () => {
  return (
    <div>
      <h1>Page1 Panel</h1>
      <p>Only visible to users have View and Edit permissions in this component.</p>
    </div>
  );
};

export default withPermission(Page1, ['Page1-View','Page1-Edit']);

```

### Protecting Components with withPermission

To control access to components based on user permissions, you can use the withPermission higher-order component (HOC) from react-permission-kit. This HOC wraps your component and ensures that it is only accessible to users with the required permissions. If a user does not have the necessary permissions, the HOC can render an alternative component or message.

#### Example
In the following example, the Page1 component is protected using the withPermission HOC. This means that only users with both Page1-View and Page1-Edit permissions will be able to access the content of Page1. If the user lacks the required permissions, the HOC will display a fallback message.

```javascript
// Page1.tsx
import React from 'react';
import { withPermission } from 'react-permission-kit';

// Define the Page1 component
const Page1 = () => {
  return (
    <div>
      <h1>Page1 Panel</h1>
      <p>This content is visible only to users with "View" and "Edit" permissions for this page.</p>
    </div>
  );
};

// Wrap Page1 with the withPermission HOC
// The component will only be accessible to users with "Page1-View" and "Page1-Edit" permissions
// Users without these permissions will see the "Not Allowed" message
export default withPermission(Page1, ['Page1-View', 'Page1-Edit'], <h1>Access Denied</h1>);

```


### Check user Permission in Components
To control access and display content based on user permissions within your components, you can use the hasPermission utility from the PermissionProvider. This function allows you to conditionally render UI elements based on whether the user has the required permissions.

#### Example
In the following example, the Nav component demonstrates how to use hasPermission to conditionally render navigation items based on the user's permissions.

```javascript 

// Nav.tsx
import React from 'react'
import { hasPermission } from '../PermissionProvider'

export const Nav = () => {
 
  return (
    <>
    {hasPermission(['Page1-View']) && <h1>Page1</h1>}
    {hasPermission(['Page2-View']) && <h1>Page2</h1>}
    <h1>Nav</h1>
    </>
  )
}


```

### Links 

[![LinkedIn](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saleh-mohammed-alabidi/)


### Keywords
React Permission Kit

### License

This project is licensed under the MIT License - see the LICENSE file for details.


