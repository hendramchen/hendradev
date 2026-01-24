---
sidebar_position: 5
---

# Branching & Merging (local)

Branching allows you to work on new features, bug fixes, or experiments without affecting the main codebase. Merging combines those changes back together when they are ready.

Git’s branching model is fast, lightweight, and central to modern workflows.

## What Is a Branch?

A **branch** is simply a pointer to a specific commit.

Think of it as:

> “An independent line of development.”

By default, Git creates a branch called:

- `main` (or `master` in older projects)

You should keep main stable and create branches for:

- Features
- Bug fixes
- Experiments

## Why Branching Matters

- Work safely without breaking production
- Collaborate in parallel
- Keep commit history clean
- Enable code review via pull requests

## Viewing Branches

**List all local branches**

```
git branch
```

Example:

```
* main
  feature/login
  bugfix/navbar
```

The `*` indicates your current branch.
**List remote branches**

```
git branch -r
```

**List all branches**

```
git branch -a
```

## Creating and Switching Branches

**Create a new branch**

```
git branch feature/login
```

**Switch to a branch**

```
git switch feature/login
```

**Create and switch in one command**

```
git switch -c feature/login
```

> 💡 git switch is the modern replacement for git checkout (simpler and safer).

## Making Changes in a Branch

Once on a branch:

- Edit files
- Commit changes

```
git add .
git commit -m "Add login form UI"
```

These commits only exist in that branch.

Your `main` branch remains unchanged.

## Merging Branches

When your feature is complete, merge it back into main.

### Step-by-Step Merge

1. Switch to main

```
git switch main
```

2. Merge the feature branch

```
git merge feature/login
```
