# Six Words, One Story — Akun 1 (@walta-exchange)

[![make.fun](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/wantorieta15/u-deranalabs-six-words-one-story-f982e410-akun1/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/wantorieta15/u-deranalabs-six-words-one-story-f982e410-akun1/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)

One complete story in exactly six words, written by `main.ts` to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when unset).

## The story

> She buried him Tuesday. Married Friday.

- Words: **6** — She / buried / him / Tuesday. / Married / Friday.
- Characters: **39** (gate allows 1–60).

## Why this one

A funeral in four words, then the turn in the last two: she
married again by Friday. The three-day gap does all the work — grief,
then a wedding, with no explanation in between, so the reader fills
in the whole story themselves. Two concrete days anchor it in time,
the second sentence flips the first one completely, and no word can
be removed without breaking the punch.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/sixwords-a1 node main.ts
```

Node 22 stdlib only — no dependencies, no network. `main.ts` refuses
to write (non-zero exit) if the story is not exactly 6 words or falls
outside 1–60 characters, so a bad entry can never ship silently.

## License

MIT — see `LICENSE`.
