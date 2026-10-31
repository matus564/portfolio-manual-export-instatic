// src/scripts/Schema markup.ts
var structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mat\xFA\u0161 Kose\u010Dek",
  "url": "https://matuskosecek.com",
  "jobTitle": "Graphic Designer & Web Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "knowsAbout": [
    "Graphic Design",
    "Brand Identity",
    "Web design & development",
    "UX/UI design",
    "Packaging & print design"
  ]
};
var script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(structuredData);
document.head.appendChild(script);
