import fetch from 'node-fetch';
// import { SENDGRID_API, SENDGRID_API_KEY } from "../config"; // local test only

const sendEmail = async ({ name, email }) => {
  await fetch(process.env.SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email
            }
          ],
          subject: 'Demo trials ONLY'
        }
      ],
      from: {
        email: 'damon.compliancespace@gmail.com',
        name: 'damon as tester'
      },
      content: [
        {
          type: 'text/html',
          value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`
        }
      ]
    })
  });
}

export { sendEmail };
