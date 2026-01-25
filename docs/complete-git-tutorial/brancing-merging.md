---
sidebar_position: 5
---

# Branching & Merging

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

### Fast-Forward Merge

Occurs when:

- main has no new commits since the branch was created

Git just moves the pointer forward:

```
main ────▶ feature/login
```

No extra merge commit is created.

### Non–Fast-Forward Merge

Occurs when:

- Both branches have new commits

Git creates a merge commit:

```
Merge branch 'feature/login'
```

This preserves history of both branches.

## Merge Conflicts (Important!)

A merge conflict happens when Git cannot automatically decide how to combine changes.

Example:

- Two branches modify the same lines of a file
  **Conflict Example**

Git stops and shows:

```
CONFLICT (content): Merge conflict in app.js
```

**Conflict Markers in File**

```js
<<<<<<< HEAD
const API_URL = "https://prod.api.com";
=======
const API_URL = "https://staging.api.com";
>>>>>>> feature/login
```

### How to Resolve a Conflict

1. Open the conflicted file
2. Decide which change to keep (or combine both)
3. Remove conflict markers
4. Save the file
5. Stage and commit

```
git add app.js
git commit -m "Resolve merge conflict in app config"
```

## Rebase (Alternative to Merge)

Rebase rewrites commit history by moving your branch commits on top of another branch.

```
git switch feature/login
git rebase main
```

### Merge vs Rebase

| Merge                     | Rebase                 |
| ------------------------- | ---------------------- |
| Preserves history         | Creates linear history |
| Safer for shared branches | Cleaner commit log     |
| Extra merge commits       | Rewrites commit hashes |

⚠️ Rule of thumb:
Never rebase a branch that has already been pushed and shared.

## Deleting Branches

**Delete local branch**

```
git branch -d feature/login
```

**Force delete**

```
git branch -D feature/login
```

**Delete remote branch**

```
git push origin --delete feature/login
```

## Common Branching Strategies

### 1. Feature Branching (Most Common)

```
main
 ├─ feature/login
 ├─ feature/payment
 └─ bugfix/crash
```

Each feature lives in its own branch.

### 2. Trunk-Based Development

- Short-lived branches
- Frequent merges to `main`
- Strong CI required

### 3. Git Flow (Structured)

Branches:

- `main`
- `develop`
- `feature/*`
- `release/*`
- `hotfix/*`

More complex, often used in enterprise teams.

## Typical Real-World Workflow

```
git switch -c feature/profile
# work, commit
git push -u origin feature/profile
# open Pull Request
# review & merge
git switch main
git pull
git branch -d feature/profile
```

## Common Mistakes to Avoid

- ❌ Working directly on main
- ❌ Long-lived branches
- ❌ Huge merge commits
- ❌ Rebasing shared branches

## Key Takeaways

- Branches isolate work
- Merging combines histories
- Conflicts are normal, not errors
- Rebase is powerful but must be used carefully
- Good branching habits = clean, scalable development
