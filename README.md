# portfolio-jl

Personal site of Jean-Luc Gouaho, full-stack developer in Quebec: who I am,
what I work with, and three projects with screenshots.

Live: https://portfolio-jl.vercel.app

## Stack

- Next.js 14 (App Router), React 18
- Tailwind CSS, Radix UI primitives (shadcn/ui), Framer Motion
- next-themes for light and dark mode
- Vercel Analytics and Speed Insights

## Run locally

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm lint
pnpm build
```

## Where to edit content

| What                                               | File                                                                             |
| -------------------------------------------------- | -------------------------------------------------------------------------------- |
| Name, contact links, experience, education, skills | `data/profile.js`                                                                |
| Projects (text, stack, links, screenshots)         | `data/projects.js`                                                               |
| Screenshots                                        | `public/work/<project>/`                                                         |
| CV download                                        | put the PDF in `public/` and set `cv` in `data/profile.js` (e.g. `'/CV_JL.pdf'`) |

The contact form has no backend: it opens the visitor's mail client with the
message filled in.

## License

MIT, see [LICENSE](LICENSE).
