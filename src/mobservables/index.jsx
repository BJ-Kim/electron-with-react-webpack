import React from 'react';
import {
  inject, Provider as MobxProvider,
} from 'mobx-react';

import AuthState, { AuthStateClass } from './authState';

export const Provider = (props) => {
  return (
    <MobxProvider
      authState={AuthState}
    >
      {props.children}
    </MobxProvider>
  );
}

export const injectAuthState = inject('authState');

