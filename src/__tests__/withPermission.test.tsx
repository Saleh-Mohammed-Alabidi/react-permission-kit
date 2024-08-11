import React from 'react';
import { render,renderHook,act  } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PermissionProvider,usePermissions } from '../PermissionProvider';
import { withPermission } from '../withPermission';

const TestComponent = () => <div>Test Component</div>;
const ProtectedComponent = withPermission(TestComponent, ['Profile-View','Profile-Edit']);

test('renders component when permissions are met', () => {
  
  const { getByText } = render(
    <PermissionProvider permission={['Profile-View','Profile-Edit']}>
      <ProtectedComponent />
    </PermissionProvider>
  );
  expect(getByText('Test Component')).toBeInTheDocument();
});

test('does not render component when permissions are not met', () => {
  const { queryByText } = render(
    <PermissionProvider permission={['User-View','User-Edit']}>
      <ProtectedComponent />
    </PermissionProvider>
  );

  
 expect(queryByText('Test Component')).toBeNull();
});
