# Spec-Driven Demo

This is my first approach and a demo project exploring **spec-driven development** with the **OpenSpec framework**.

**Goal**: Building my own **portfolio website** using a spec-driven workflow with AI-assisted development.

**AI Assistant**: This project is developed with **Claude Haiku 4.5** to demonstrate AI-guided spec-driven development.

## What is Spec-Driven Development?

Spec-driven development is a workflow where specifications guide the entire project lifecycle. Instead of writing code first, you:

1. **Propose** a change with clear goals and context
2. **Design** the solution with detailed specs
3. **Implement** the tasks defined in the specs
4. **Archive** the completed work for historical reference

This approach ensures better planning, clearer requirements, and easier collaboration.

## Project Structure

```
spec-driven-demo/
├── lorenzo_ceglia/        # The actual React + Vite app
├── openspec/              # OpenSpec framework folder (specs & changes)
├── .opencode/             # OpenCode customization (skills & commands)
└── README.md
```

## OpenSpec Workflow

### The Flow: Propose → Apply → Archive

#### 1. **Propose** (`openspec-propose`)

Create a new change directory with:

- **proposal.md** — High-level overview and goals
- **design.md** — Technical design and architecture
- **tasks.md** — Actionable tasks (ideally 2-hour chunks)

The change lives in `openspec/changes/` while you work on it.

#### 2. **Apply** (`openspec-apply-change`)

Implement the tasks and apply the specs to your project. The framework:

- Reads your specs
- Generates tailored implementation guidance
- Applies changes to your codebase

#### 3. **Archive** (`openspec-archive-change`)

Once complete, move the change to `openspec/changes/archive/` for historical record-keeping. This preserves your decision-making process and design rationale.

#### 4. **Promote to Active Specs** (manual step)

When a task is done, manually move generated specs from `archive/[task]/specs/` to `openspec/specs/` to make them "active" for future reference.

### Directory Layout

- **`openspec/specs/`** — Active, promoted specs that guide development
- **`openspec/changes/`** — In-progress changes being worked on
- **`openspec/changes/archive/`** — Completed, archived changes with their specs
- **`.opencode/`** — Custom commands and AI skills for this project

## OpenCode Commands

This project uses **OpenCode** to run OpenSpec commands. OpenCode provides custom commands configured in `.opencode/command/`:

- **`opsx-propose`** — Create a new spec-driven change
- **`opsx-explore`** — Explore and understand existing specs
- **`opsx-apply`** — Apply a change to your project
- **`opsx-archive`** — Archive a completed change

These commands integrate OpenSpec seamlessly into your VS Code workflow, handling the spec-driven development lifecycle with AI guidance.

## Getting Started

### Install Dependencies

```bash
cd lorenzo_ceglia
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Code Quality

Linting and formatting with Biome:

```bash
npm run lint
npm run format
```

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Linting/Formatting**: Biome (no ESLint, no Prettier)
- **Package Manager**: npm

## Learning & Iteration

This is a learning project. The OpenSpec workflow helps me:

- Document decisions upfront
- Break work into clear, manageable chunks
- Preserve architectural decisions for future reference
- Experiment with spec-driven development practices

Feel free to explore the `openspec/` folder to see past proposals, designs, and archived changes!

---

**Framework**: [OpenSpec](https://openspec.dev/)  
**Date Started**: April 3, 2026
