---
sidebar_position: 1
---

# Introduction to Git

Git is the most widely used version control system (VCS) in modern software development. Almost every software team—small startups, open-source communities, large enterprises—uses Git to track changes, collaborate, and maintain clean, reliable codebases.

## What is Git? (History & Purpose)

Git is a distributed version control system created in 2005 by Linus Torvalds, the creator of Linux.
It was originally designed to manage the massive and fast-moving source code of the Linux kernel.

The original purpose of Git was to:

- **Speed**\
  Git should handle large repositories quickly.
- **Distributed Architecture**\
  Each developer should have a complete copy of the project history on their machine.
- **Strong Support for Branching & Merging**\
  Developers should be able to experiment freely without disturbing others.
- **Data Integrity**\
  Git uses SHA-1 / SHA-256 hashes to protect the integrity of all data.

Git became popular because it solves real-world collaboration problems and scales from solo developers to global teams.

## Git vs Other VCS (SVN, Mercurial) — Short Comparison

| Feature         | Git (Distributed)                             | SVN (Centralized)              | Mercurial (Distributed)        |
| --------------- | --------------------------------------------- | ------------------------------ | ------------------------------ |
| Repository Type | Fully distributed — each user has a full copy | Centralized — single main repo | Distributed                    |
| Speed           | Very fast (especially branching, merging)     | Slower                         | Fast but not as widely adopted |
| Branching       | Cheap & Easy                                  | Heavy & complex                | Easy                           |
| Popularity      | Very high (industry standard)                 | Low                            | Medium                         |
| Offline Work    | Yes, full history available                   | Very limited                   | Yes                            |
| Learning Curve  | Medium                                        | Easy                           | Easy                           |

**In simple terms:**\
Git is the most powerful and flexible, but can feel complex at first.
SVN is simpler but limited.
Mercurial is similar to Git but less commonly used today.

## Why Use Git? (Benefits)

Here are the main reasons why most developers and companies choose Git:

### 1. Collaboration

Multiple people can work on the same codebase without overwriting each other’s work.

### 2. Tracking Every Change

Every change is stored as a commit. You can:

- See who changed what
- Revert mistakes
- Compare versions
- Restore deleted code

### 3. Distributed & Offline

Everything—including full history—is stored locally, so you can:

- Commit offline
- Create branches offline
- Explore history without an internet connection

### 4. Safe Experimentation (Branching)

Create branches without breaking the main project:

```
feature/login
feature/payment
bugfix/incorrect-total
```

Branching in Git is extremely lightweight.

### 5. Great Performance

Git is optimized for speed:

- Fast commits
- Fast diff
- Fast merging
- Fast cloning and fetching

### 6. Industry Standard

Git is used everywhere:

- GitHub
- GitLab
- Bitbucket
- Azure DevOps
- Open-source projects

Knowing Git is a required foundational skill in modern software development.

## Git Concepts Overview

Before writing your first Git command, you should understand a few core concepts:

### 1. Repository (Repo)

A repository is a folder tracked by Git.
It contains:

- Your project files
- The entire history of changes
- Metadata stored in `.git/`

You create one with:

```
git init
```

or clone an existing one:

```
git clone <url>
```

### 2. Commit

A **commit** is a snapshot of your files at a specific point in time.
Every commit should represent a meaningful unit of change.

Example:

```
git commit -m "Add user login API"
```

A commit includes:

- Author
- Timestamp
- Changes
- Unique hash (ID)

### Branch

A **branch** is a movable pointer to a series of commits.

Common branches:

- `main` (or `master`) — primary stable line
- feature branches
- bugfix branches

Create a new branch:

```
git branch feature/homepage
// or
git switch feature/homepage
// or
git checkout -b feature/homepage
```

### 4. Remote

A **remote** is a repository hosted elsewhere (e.g., GitHub, GitLab, Bitbucket).

Common remote name: `origin`

Push and pull changes to/from a remote:

```
git push origin main
git pull origin main
```

### 5. Staging Area

The staging area is an intermediate space between your working directory and your commit.

Workflow:

1. Modify files
2. Stage files → `git add`
3. Commit → `git commit`

Example:

```
git add index.js
git commit -m "Fix login redirect bug"
```

This gives you full control over what becomes part of your next commit.
