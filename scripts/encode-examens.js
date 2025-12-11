// Script pour encoder les questions d'examens en Base64
const fs = require('fs');
const path = require('path');

function encodeStr(str) {
  return Buffer.from(str).toString('base64');
}

// Liste des fichiers d'examens à encoder
const examFiles = [
  'lib/data/examens/examen1.ts',
  'lib/data/examens/examen-2.ts',
  'lib/data/examens/examen3.ts',
  'lib/data/examens/examen4.ts',
  'lib/data/examens/examen5.ts'
];

examFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Fichier non trouvé: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Encoder les questions (pattern: question: "...")
  content = content.replace(/question:\s*"([^"]+)"/g, (match, question) => {
    return `question: "${encodeStr(question)}"`;
  });
  
  // Encoder les options (pattern: options: ["...", "...", ...])
  content = content.replace(/options:\s*\[([\s\S]*?)\]/g, (match, optionsContent) => {
    const options = optionsContent.match(/"([^"]+)"/g);
    if (options) {
      const encodedOptions = options.map(opt => {
        const text = opt.slice(1, -1); // Enlever les guillemets
        return `"${encodeStr(text)}"`;
      });
      return `options: [\n      ${encodedOptions.join(',\n      ')}\n    ]`;
    }
    return match;
  });
  
  // Encoder les explications (pattern: explication: "...")
  content = content.replace(/explication:\s*"([^"]*(?:"[^"]*"[^"]*)*?)"\s*(?=\})/gs, (match, explication) => {
    return `explication: "${encodeStr(explication)}"`;
  });
  
  // Sauvegarder le fichier modifié
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ Encodé: ${file}`);
});

console.log('\n🎉 Tous les examens ont été encodés avec succès!');
