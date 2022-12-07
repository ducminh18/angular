import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Mando_Ecommerce',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44343/',
    redirectUri: baseUrl,
    clientId: 'Mando_Ecommerce_App',
    responseType: 'code',
    scope: 'offline_access Mando_Ecommerce',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44343',
      rootNamespace: 'Mando_Ecommerce',
    },
  },
} as Environment;
