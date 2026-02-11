---
sidebar_position: 7
---

# Collaboration Workflows

When working alone, Git is mainly a version control tool.
When working in a team, Git becomes a collaboration system.

A **Git collaboration workflow** defines:

- How developers create branches
- How changes are shared
- How code is reviewed
- How releases are made

There is **no single “best” workflow**. The right one depends on:

- Team size
- Project complexity
- Release frequency
- Level of code review required

This section introduces the most common collaboration workflows used in real projects.

## 1. Centralized Workflow

### Overview

The Centralized Workflow is the simplest collaboration model and is often used by:

- Small teams
- Teams migrating from SVN
- Internal or low-risk projects

All developers work on a single main branch (usually `main` or `master`).

### How it Works

1. There is one central remote repository
2. Everyone clones the same repo
3. Developers pull the latest changes
4. Developers commit locally
5. Developers push directly to main

### Typical Commands

```bash
git pull origin main
git commit -m "Fix login bug"
git push origin main
```

### Pros

- Very simple to understand
- Minimal branching
- Easy setup

### Cons

- High risk of conflicts
- No isolation of features
- No code review process
- Not suitable for large teams

### When to Use

- Very small teams (1–3 developers)
- Short-lived projects
- Prototypes or internal tools

## 2. Feature Branch Workflow

### Overview

The Feature Branch Workflow is one of the most popular and recommended workflows.
Each new feature or task is developed in its own branch, separate from `main`.

### How it Works

1. `main` always contains stable code
2. For every feature or task:
   - Create a new branch from `main`
3. Work and commit in that branch
4. Merge the feature branch back into `main`

### Example Flow

```bash
git checkout main
git pull origin main
git checkout -b feature/user-profile
```

After finishing the feature:

```bash
git checkout main
git merge feature/user-profile
git push origin main
```

### Pros

- Clean separation of features
- Safer collaboration
- Easier to review code
- Fewer conflicts on `main`

### Cons

- Requires branch management
- Slightly more complex than centralized workflow

### When to Use

- Most team projects
- Agile development
- Continuous integration setups

## 3. Gitflow Workflow

### Overview

**Gitflow** is a structured workflow designed for projects with:

- Scheduled releases
- Long-term maintenance
- Multiple environments (dev, staging, production)

### Main Brances

- `main` - production-ready code
- `develop` - integration branch for features

### Supporting Branches

- `feature/*` - new features
- `release/*` - preparing a release
- `hotfix/*` - urgent production fixes

### Branch Structure

```bash
main
 └── develop
      ├── feature/login
      ├── feature/payment
      ├── release/1.2.0
      └── hotfix/critical-bug
```

### Example Flow

- Feature branches are created from `develop`
- Features are merged back into `develop`
- Release branch is created from `develop`
- Release is merged into `main`
- Hotfix branches are created from `main`

### Pros

- Very clear structure
- Good for versioned releases
- Strong separation of concerns

### Cons

- Complex for small teams
- Too heavy for continuous deployment
- More branch management overhead

### When to Use

- Enterprise applications
- Versioned products
- Projects with strict release cycles

## 4. Forking Workflow

### Overview

The **Forking Workflow** is common in **open-source projects**.
Instead of pushing branches to the main repository, contributors:

- Fork the repository
- Work in their own fork
- Submit changes via pull requests

### How it Works

1. Fork the original repository
2. Clone your fork locally
3. Create feature branches in your fork
4. Push changes to your fork
5. Open a Pull Request to the original repo

### Example

```
git clone https://github.com/your-username/project.git
git checkout -b fix/readme-typo
git push origin fix/readme-typo
```

### Pros

- Strong security
- No direct acces to main repo
- Ideal for public collaboration

### Cons

- More steps
- Slower feedback loop
- Requires pull request management

### When to Use

- Open-source projects
- Large distributed teams
- External contributors

## 5. Pull Requests and Code Review

Regardless of the workflow, Pull Requests (PRs) are a key part of collaboration.

### What is a Pull Request?

A Pull Request is a request to:

- Review code
- Discuss changes
- Merge one branch into another

### Typical PR Process

1. Developer create a feature branch
2. Pushes the branch to remote
3. Opens a Pull Request
4. Team review the code
5. Changes are requested or approved
6. Branch is merged

### Benefits

- Improves code quality
- Encourages knowledge sharing
- Prevents bugs from reaching production

## Choosing the Right Workflow

| Team / Project Type        | Recommended Workflow |
| -------------------------- | -------------------- |
| Solo developer             | Centralized          |
| Small to medium team       | Feature Branch       |
| Enterprise / Release-based | Gitflow              |
| Open source                | Forking              |

## Best Practice for Collaboration

- Keep main branch stable
- Use meaningful branch names
- Pull frequently to avoid conflicts
- Write clear commit messages
- Delete merged branches
- Automate tests with CI

## Summary

Git collaboration workflow help teams:

- Work in parallel
- Reduce conflicts
- Improve code quality
- Deliver software safely
  Start simple, then evolve your workflow as your team and project grow.
