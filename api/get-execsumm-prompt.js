export default async function handler(req, res) {
  try {
    const url = "https://docs.google.com/document/d/1gz4lL12ytvMYJN7KInKWWiTUw0gvvV39dWvwBZGMDVw/export?format=txt";

    const response = await fetch(url);

    if (!response.ok) {
      return res.status(500).json({
        error: "Failed to fetch doc",
        status: response.status
      });
    }

    const text = await response.text();

    res.status(200).json({
      prompt: text
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
