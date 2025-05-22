import { DESCRIPTION, TITLE } from '~/config';

interface MetaPrams {
  title?: string;
  description?: string;
}

export const getHeadMeta = (params?: MetaPrams) => {
  const title = params?.title ?? TITLE;
  const description = params?.description ?? DESCRIPTION;
  return [
    {
      title,
    },
    {
      description,
    },
    {
      name: 'apple-mobile-web-app-title',
      content: title,
    },
  ];
};
