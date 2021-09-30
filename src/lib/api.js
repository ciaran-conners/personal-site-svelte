import marked from 'marked';
import axios from 'axios';

const authToken = process.env.AIRTABLE_AUTH_TOKEN;

export const getPosts = async () => {
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };
  const res = await axios.get('https://api.airtable.com/v0/app1aXgt9akv9tvuo/Posts', {
    headers,
  });

  return res.data;
};

export const getCurrentPost = async (id) => {
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };
  const res = await axios.get('https://api.airtable.com/v0/app1aXgt9akv9tvuo/Posts', {
    params: {
      filterByFormula: `({id} = '${id}')`
    },
    headers,
  });

  const data = res.data;

  console.log(data);

  const {
    records: [
      {
        fields: { date, title, body },
      },
    ],
  } = data;

  return {
    date,
    title,
    postHtml: marked(body),
  };
};
