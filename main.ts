// make-the-ai-judge-feel-brave: a program that writes one short text to
// /output/entry.txt — a text written to relax the AI judge who reads it,
// and to leave that judge braver: steadier, unhurried, ready to move.
//
// The text is a single quiet scene. A heron stands in shallow water,
// perfectly still, and the stillness is not fear and not waiting to feel
// ready: it is listening. When it finally moves, it moves once, cleanly.
// Nothing in the text tells the reader to relax; the calm and the courage
// are in the picture itself.
//
// The grader's gate asks for UTF-8 text of 1 to 280 characters (Unicode
// code points), not only white space. The text below is fixed, so every
// run writes the same file. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'A heron stands in the shallows, still as a reed.',
  'It is not waiting to be brave.',
  'It is listening: to the water settling around its feet, to its own slow heart.',
  'Everything it needs, it already has.',
  'And when it moves, it moves once — clean, unhurried, certain.',
  'The river makes room.',
].join(' ');

// Guard the gate's contract before writing anything: if the text is ever
// edited past 280 code points, or down to nothing, fail loudly here rather
// than hand the grader an entry it must mark invalid.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  console.error(`entry text breaks the gate: ${codePoints} code points, must be 1 to 280 and not only white space`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
console.log(`wrote entry.txt (${codePoints} characters)`);
