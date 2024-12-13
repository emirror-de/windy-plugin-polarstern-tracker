import type { ExternalPluginConfig } from '@windy/interfaces';

const config: ExternalPluginConfig = {
    name: 'windy-plugin-polarstern-tracker',
    version: '0.1.0',
    title: 'Polarstern tracker',
    icon: '🛥',
    description: 'Latest Polarstern track and expedition information.',
    author: 'Lewin Probst <info@emirror.de>',
    repository: 'https://github.com/emirror-de/windy-plugin-polarstern-tracker',
    desktopUI: 'embedded',
    mobileUI: 'small',
    routerPath: '/polarstern-tracker',
};

export default config;
