import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  function getMinsEmoji(mins) {
    if (mins < 30) {
      const nearestFive = Math.ceil(mins / 5);
      const text = "☕️".repeat(nearestFive);
      return text;
    } else {
      const nearestTen = Math.ceil(mins / 10);
      const text = "🍱".repeat(nearestTen);
      return text;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>
        {getMinsEmoji(minutes)} {minutes} minute read
      </p>
    </article>
  );
}

export default Article;
