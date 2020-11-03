const markdown = {
  1: `
  This is my first blog post.

  It's a great blog post!
  `,
  2: `
  This is my second blog post.

  It's another great blog post!
  `
};

export const posts = [
  {
    id: 1,
    title: 'Using statecharts on the web',
    body: markdown['1'],
    timestamp: 'November 2, 2020'
  },
  {
    id: 2,
    title: 'A love letter to Svelte',
    body: markdown['2'],
    timestamp: 'November 3, 2020'
  }
];