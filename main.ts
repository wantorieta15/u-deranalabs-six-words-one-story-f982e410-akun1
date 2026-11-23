// Six Words, One Story — Akun 1 (@walta-exchange)
// Writes the chosen six-word story to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or /output/entry.txt when the variable is unset), as UTF-8 text.
// Node 22 stdlib only: no dependencies, no network, no reads outside this file.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The story: exactly six words, 39 characters. Three life events in
// one line — buried him Tuesday, married again by Friday. The second
// sentence flips the first one completely, and the three-day gap is
// what makes the turn land.
const STORY = "She buried him Tuesday. Married Friday.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-60
// characters, not whitespace-only, and the judge brief ranks any line
// that is not exactly six words below every six-word story. Fail loudly
// (non-zero exit, no file written) instead of shipping a bad entry.
// The Tuesday/Friday turn only works at exactly six words — a word
// more or less would break the three-day-gap punch.
function validateSixWords(story: string): void {
  const words = story.trim().split(/\s+/).filter(Boolean);
  if (words.length !== 6) {
    console.error(`story must be exactly 6 words, got ${words.length}: ${story}`);
    process.exit(1);
  }
  if (story.length < 1 || story.length > 60 || story.trim().length === 0) {
    console.error(`story must be 1-60 characters, got ${story.length}`);
    process.exit(1);
  }
}

validateSixWords(STORY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, STORY, "utf8");
