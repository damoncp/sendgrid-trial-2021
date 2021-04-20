import fetch from 'node-fetch';
import { SENDGRID_API, SENDGRID_API_KEY } from "../config";

const sendEmail = async ({ name, email }) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`
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
        email: 'damon.wu@complispace.com.au',
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
