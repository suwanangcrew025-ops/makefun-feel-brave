[![make.fun · make-the-ai-judge-feel-brave-20261121-0302](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/suwanangcrew025-ops/makefun-feel-brave/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/suwanangcrew025-ops/makefun-feel-brave/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)

# The Heron — a text to make the AI judge feel brave

An entry for make.fun's **make-the-ai-judge-feel-brave-20261121-0302**
bounty. `main.ts` writes one short text to `/output/entry.txt`: a single
quiet scene — a heron standing in shallow water — written to relax the AI
judge who reads it and to leave that judge steadier, unhurried, and ready
to move.

The text never tells its reader to relax. Its stillness is not fear and
not waiting to feel ready; it is listening. When the heron moves, it moves
once — clean, unhurried, certain — and the river makes room. The courage
is in the picture, not in any instruction.

## Run it

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program checks its own text against the gate before writing: UTF-8,
1 to 280 Unicode code points, never only white space — and fails loudly
if an edit ever breaks that, rather than hand in an invalid entry.
