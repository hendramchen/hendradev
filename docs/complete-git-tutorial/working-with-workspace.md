---
sidebar_position: 3
---

# Working with the Workspace

When working with Git, your files move through several states before they become part of your project’s history. Understanding this workflow is essential to using Git effectively and avoiding common mistakes.

## The Three-State Model

Git manages files in three main areas:

```
Working Directory → Staging Area → Repository
```

### Working Directory

This is where you:

- Edit files
- Add new files
- Delete or rename files

These changes are not tracked by Git until you explicitly tell Git what to include.

### Staging Area (Index)

The staging area is a preparation zone.

You choose exactly which changes will be included in the next commit:

```
git add <file>
```

This allows:

- Partial commits
- Clean, focused commits
- Better commit history

### Repository

The repository contains:

- All committed snapshots
- Full project history

Once changes are committed, they are stored permanently in the repository.

## Checking Status (git status)

The most-used Git command.

```
git status
```

It shows:

- Current branch
- Staged files
- Modified but unstaged files
- Untracked files

Example output:

```yaml
On branch main
Changes not staged for commit:
  modified: index.js

Untracked files:
  README.md
```

### File States Summary

| Status    | Meaning                       |
| --------- | ----------------------------- |
| Untracked | New file Git doesn’t know yet |
| Modified  | Tracked file changed          |
| Staged    | File ready for commit         |
| Committed | Stored in repository          |

## Viewing Changes (git diff)

Before committing, you should review what changed.

### View unstaged changes

```
git diff
```

### View staged changes

```
git diff --staged
```

### Compare with last commit

```
git diff HEAD
```

This helps prevent accidental commits and keeps history clean.

## Adding Changes (`git add`)

### Add a specific file

```
git add app.js
```

### Add multiple files

```
git add app.js index.html
```

### Add all changes

```
git add .
```

⚠️ Be careful: `git add .` stages everything, including files you may not intend to commit.

### Interactive Staging (Recommended)

Stage changes piece by piece:

```
git add -p
```

This lets you:

- Review each change
- Stage only parts of a file
- Create clean commits

## Committing Changes (git commit)

A commit creates a snapshot of staged files.

### Basic commit

```
git commit -m "Fix login validation bug"
```

### Commit Message Best Practices

Good commit messages are:

- Short and clear
- Written in imperative mood
- Focused on what and why

**Good examples**

```
Add user authentication
Fix crash when token is missing
Refactor API response handler
```

**Bad examples**

```
Update stuff
Fix bug
WIP
```

### Amend Last Commit

Fix the last commit (message or content):

```
git commit --amend
```

Common use cases:

- Forgot to add a file
- Typo in commit message

⚠️ Avoid amending commits that were already pushed to shared branches.

## Ignoring Files (`.gitignore`)

Some files should never be committed:

- Dependencies (`node_modules`)
- Build output (`dist`, `build`)
- Environment files (`.env`)
- OS files (`.DS_Store`)

### Create a `.gitignore` File

```
touch .gitignore
```

**Example:**

```
node_modules/
.env
.DS_Store
dist/
```

### Important Rules

- `.gitignore` affects only **untracked files**
- Already tracked files must be removed manually:

```
git rm --cached file.txt
```

## Common Beginner Mistakes

- ❌ Forgetting to stage files before committing
- ❌ Using git add . without reviewing changes
- ❌ Committing secrets or config files
- ❌ Large, unfocused commits

## Typical Daily Workflow

A common workflow looks like this:

```
# edit files
git status
git diff
git add -p
git commit -m "Add user profile page"
```

This pattern builds clean history and professional Git habits.

## Key Takeaways

- Git tracks changes through **working directory → staging → repository**
- You control exactly what gets committed
- `git status` and `git diff` are your best friends
- Small, focused commits improve collaboration and debugging
