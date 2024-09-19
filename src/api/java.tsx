// // pages/api/sendEmail.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import emailjs from 'emailjs-com';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { firstName, lastName, email, message } = req.body;

//     try {
//       await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
//         firstName,
//         lastName,
//         email,
//         message,
//       }, 'YOUR_USER_ID');

//       res.status(200).json({ status: 'success' });
//     } catch (error) {
//       console.error('EmailJS Error:', error);
//       res.status(500).json({ status: 'error' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
