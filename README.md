# ui

A small, open-source design foundation for React projects: shared design tokens and accessible components that each project can theme its own way.

> **Status: early.** Nothing to install yet. The API will change.

## Idea

Projects share a **foundation**, not a **look**.

- **Tokens** define the contract: semantic names for color roles (`--surface`, `--ink`, `--accent`), spacing, type, radius, and motion.
- **Themes** fill in the values per project, so two apps can use the same components and still look nothing alike.
- **Components** are added only after they've proven themselves in real projects, built on accessible primitives.

## Stack

- React + TypeScript
- CSS custom properties for tokens (works with Tailwind v4 `@theme` or plain CSS)

## Roadmap

- [ ] Token contract + default theme
- [ ] First real consumer
- [ ] Second consumer, to validate the contract
- [ ] Core components (Button, Input, Dialog, …)
- [ ] Docs

## Contributing

Issues and ideas are welcome. The project is too early for large PRs, so please open an issue first.

## License

TBD
