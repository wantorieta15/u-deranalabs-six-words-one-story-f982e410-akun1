# Six Words, One Story — Akun 1 (@walta-exchange)

[![make.fun](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/wantorieta15/u-deranalabs-six-words-one-story-f982e410-akun1/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/wantorieta15/u-deranalabs-six-words-one-story-f982e410-akun1/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)

One complete story in exactly six words, written by `main.ts` to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when unset).

## The story

> Kept his voicemail. Deleted everything else.

- Words: **6** — Kept / his / voicemail. / Deleted / everything / else.
- Characters: **44** (gate allows 1–60).

## Why this one

Setup in three words (she kept a single voicemail), then the turn in
the last three: she deleted *everything else*. A whole relationship and
its ending are implied in one kept voice — concrete and sensory, clean
rhythm in two 3-word beats, and the reader fills in what happened to
him and why only his voice survived. No filler word, no word a better
one could replace.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/sixwords-a1 node main.ts
```

Node 22 stdlib only — no dependencies, no network. `main.ts` refuses
to write (non-zero exit) if the story is not exactly 6 words or falls
outside 1–60 characters, so a bad entry can never ship silently.

## License

MIT — see `LICENSE`.
