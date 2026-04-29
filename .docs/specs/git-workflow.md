# Git Workflow Standards

This document defines the Git and GitHub workflow for the Nurul Fitri Portfolio project, ensuring a clean, traceable, and professional version history.

## 1. Branching Strategy

- **`main`**: The stable default branch. Only contains code that has been verified and approved.
- **Feature Branches**: All development must occur in feature or phase branches (e.g., `fase2`, `fase3-hero`).
- **Naming Convention**: `fase[X]-[description]` (e.g., `fase2-setup`, `fase3-hero`).

---

## 2. Commit Message Standards

We use a simplified version of **Conventional Commits**. Messages should be detailed enough to explain _what_ changed, but concise.

### 2.1 Format

`<type>: <description>`

### 2.2 Types

- **`feat`**: A new feature (e.g., a new component or page).
- **`fix`**: A bug fix.
- **`refactor`**: Code changes that neither fix a bug nor add a feature.
- **`docs`**: Documentation changes only.
- **`style`**: Changes that do not affect the meaning of the code (white-space, formatting, etc.).
- **`chore`**: Updating dependencies, build scripts, etc.

### 2.3 Examples

- `feat: implement Svelte 5 Rune-based i18n manager`
- `fix: wrap CSS variables in hsl() for Tailwind v4 dark mode`
- `refactor: move theme logic to external global rune`
- `docs: add coding standards and git workflow specs`

---

## 3. Pull Request Process

Every phase or major feature must be merged into `main` via a Pull Request (PR).

### 3.1 Steps to Push and Create PR

1. **Verify**: Run `npm run check` and test locally.
2. **Commit**: Stage and commit all changes using the standards above.
3. **Push**: `git push origin [branch-name]`
4. **Create PR**: Use GitHub CLI (`gh`) to create the PR.
   - **Title**: `[Fase X] [Main Feature Name]`
   - **Base**: `main`
   - **Body**: A brief summary of what was accomplished and how it was verified.

### 3.2 Example Command

```bash
gh pr create --base main --title "[Fase 2] Data Layer & Global Components" --body "Implemented data schemas, i18n manager using Runes, and global components (Navbar, ThemeToggle)."
```
