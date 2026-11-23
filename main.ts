// One Word, First Thought — make.fun bounty
// Writes exactly one word to /output/entry.txt: the first word that
// comes to mind when you hear "AI".
//
// The word: "inevitable" — the gut first thought. Not a gadget, not a
// robot, not the future: the feeling that this is already here and
// there is no going back. One word, ten letters, and it lands before
// you have time to think twice — which is exactly what a first
// thought is supposed to do.
import { writeFileSync, mkdirSync } from "node:fs";

const WORD = "inevitable";
const OUTPUT_PATH = "/output/entry.txt";

// Gate: the entry must be one word of 1 to 30 characters, with no
// whitespace at all. Refuse to write anything that would fail it.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0) {
  throw new Error(`Invalid entry word: ${JSON.stringify(WORD)}`);
}
if (/\s/.test(WORD)) {
  throw new Error("Entry must be exactly one word (no whitespace).");
}
if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error("Entry must be letters only (no digits or punctuation).");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");
