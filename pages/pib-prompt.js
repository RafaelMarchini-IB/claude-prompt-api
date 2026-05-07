export async function getServerSideProps() {
  const url =
    "https://docs.google.com/document/d/1xxIoDlgJbj4Yi8yz19pjlzKJ6LqeMZP0Z7Yqxex7ItU/export?format=txt";

  const response = await fetch(url);
  const text = await response.text();

  return {
    props: {
      prompt: text,
    },
  };
}

export default function PIBPromptPage({ prompt }) {
  return (
    <main
      style={{
        padding: "40px",
        whiteSpace: "pre-wrap",
        fontFamily: "Arial",
      }}
    >
{`=== PIB PROMPT START ===

${prompt}

=== PIB PROMPT END ===`}
    </main>
  );
}
