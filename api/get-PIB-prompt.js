export default async function handler(req, res) {
  try {
    const url =
      "https://docs.google.com/document/d/1xxIoDlgJbj4Yi8yz19pjlzKJ6LqeMZP0Z7Yqxex7ItU/export?format=txt";

    const response = await fetch(url);
    const text = await response.text();

    res.setHeader("Content-Type", "text/html; charset=utf-8");

    res.status(200).send(`
      <html>
        <body style="padding:40px;font-family:Arial;white-space:pre-wrap;">
=== PIB PROMPT START ===

${text}

=== PIB PROMPT END ===
        </body>
      </html>
    `);

  } catch (error) {
    res
      .status(500)
      .send("Unable to retrieve PIB instructions.");
  }
}
