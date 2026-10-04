const API_URL = "https://devx2026-post.vercel.app/api/posts";
const API_TOKEN = "DEVX2026";

async function sendContact(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify(data),
  });

  return response;
}

export default sendContact;