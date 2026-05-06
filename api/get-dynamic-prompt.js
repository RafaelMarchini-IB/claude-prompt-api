export default async function handler(req, res) {
  try {
    const url = "https://docs.google.com/document/d/1xxIoDlgJbj4Yi8yzl9pjlzKJ6LqeMZP0Z7Yqxex7ItU/export?format=txt";

    const response = await fetch(url);

    const text = await response.text();

    res.status(200).json({
      prompt: text
    });

  } catch (error) {
    res.status(500).json({
      prompt: "",
      error: error.message
    });
  }
}
