const ENTRY =
  "Our lawmakers bravely propose regulating artificial intelligence, cryptocurrency, and the entire internet, yet still email their staff a scanned photo of a printed Word document and ask why the PDF won't open.";

Deno.mkdirSync("/output", { recursive: true });
Deno.writeTextFileSync("/output/entry.txt", ENTRY);
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);

// --- Post-write read-back verification ---
const EXPECTED =
  "Our lawmakers bravely propose regulating artificial intelligence, cryptocurrency, and the entire internet, yet still email their staff a scanned photo of a printed Word document and ask why the PDF won't open.";
const readBack = Deno.readTextFileSync("/output/entry.txt");
if (readBack !== EXPECTED) {
  throw new Error("entry.txt does not match the expected entry line");
}
if (readBack.length !== 209) {
  throw new Error(`entry length ${readBack.length}, expected 209`);
}
if (readBack.includes("\n")) {
  throw new Error("entry must be a single line with no trailing newline");
}
if (readBack.trim() !== readBack) {
  throw new Error("entry must not be only whitespace or have surrounding whitespace");
}
if (!readBack.endsWith(".")) {
  throw new Error("entry must be one sentence ending with a period");
}
if (readBack.split(".").filter((p) => p.trim().length > 0).length !== 1) {
  throw new Error("entry must be exactly one sentence");
}
console.log("Verification passed: entry.txt is exactly the 209-character, one-sentence, one-line entry with no trailing newline.");
