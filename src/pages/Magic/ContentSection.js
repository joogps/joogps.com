import React from 'react';
import { useState, useEffect } from 'react';

function ContentSection({ imageSrc, text }) {
    const styles = {
    container: isRowBased => ({
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: isRowBased ? 'row' : 'column',
    }),
    image: {
        borderRadius: 10,
        overflow: 'hidden',
        maxWidth: 600,
        width: '100%',
        aspectRatio: '1.5/1',
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
    },
    text: {
        width: '100%',
        textAlign: 'left',
        lineHeight: 1.5,
        padding: 32,
        color: 'black'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    paragraph: {
        fontSize: 20,
    },
  };

  const mediaMatch = window.matchMedia('(min-width: 100px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  return (
    <div style={styles.container(true)}>
    <div style={styles.image}>
    </div>

    <div style={styles.text}>
      <p style={styles.title}>Turn your trackpad into a drawing board</p>
      <p style={styles.paragraph}>With Magic, you can use your Mac's trackpad device in the same way you'd use any regular drawing board — just tap and draw.</p>
      </div>
    </div>
  );
}

export default ContentSection;
