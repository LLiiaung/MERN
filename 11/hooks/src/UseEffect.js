import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [language, setlanguage] = useState("Java");

  useEffect(() => {
    setlanguage("C++");
  }, []);
  return (
    <div>
      <h1>The declared language is {language}</h1>
    </div>
  );
}
