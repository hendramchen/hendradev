---
sidebar_position: 8
---

# Rewriting History & Advanced Local Ops

As your Git skills grow, you'll eventually need to:

- Fix commit messages
- Clean up messy commit history
- Undo mistakes
- Move specific commits
- Temporarily save unfinished work
  These operations are powerful — but they modify history.
  Use them carefully, especially when working with shared branches.

> ⚠️ Golden Rule: Never rewrite public history that has already been pushed and used by others.

## Amend Commits (`--amend`)

### What is `git commit --amend`?

`--amend` allows you to modify the **most recent commit**.
You can:

- Change the commit message
- Add forgotten changes
- Replace the last commit entirely

### 1. Change the Last Commit Message

```bash
git commit --amend
```

This opens the editor and lets you edit the message.
Or directly:

```bash
git commit --amend -m "Correct commit message"
```

### 2. Add Forgotten Changes to Last Commit

```bash
git add missing-file.js
git commit --amend
```

Instead of creating a new commit, Git update the previous one.

### What Actually Happens?

Git creates:

- A new commit
- With a new commit hash
- Replacing the previous one
  This means history is rewritten.

### When to Use

- Fixing typos in commit messages
- Adding small forgotten changes
- Cleaning up before pushing

## Interactive Rebase (`git rebase -i`)

Interactive rebase is one of the most powerful Git tools.
It allows you to:

- Reword commits
- Squash multiple commits
- Reorder commits
- Remove commits

### Start Interactive Rebase

To modify the last 3 commits:

```bash
git rebase -i HEAD~3
```

Git will open an editor with something like:

```bash
pick a1b2c3 Add login page
pick d4e5f6 Fix typo
pick g7h8i9 Add validation
```

You can replace `pick` with other commands.

### Common Commands

**1. Reword (change commit message)**

```bash
reword a1b2c3 Add login page
```

Git will pause and let you edit the message.
**2. Squash (combine commits)**

```bash
pick a1b2c3 Add login page
squash d4e5f6 Fix typo
```

This merges the second commit into the first.
Useful for:

- Cleaning up messy incremental commits
- Creating logical, clean history
  **3. Reorder Commits**
  Just move lines up or down.
  Git will replay commits in the new order.
  **4. Drop (remove commit)**
  Delete the line or replace `pick` with:

```bash
drop d4e5f6 Fix typo
```

### Why Interactive Rebase is Powerful

It allows you to transform:

```bash
Add feature
Fix bug
Fix typo
Fix another typo
Oops small fix
```

Into:

```bash
Add complete feature with validation and fixes
```

Clean history = easier maintenance.

## Reset vs Revert

These two commands are often confused. But they are very different.

### Git Reset

`git reset` moves the branch pointer. It changes commit history.

#### 1. Soft Reset

```bash
git reset --soft HEAD~1
```

Effect:

- Removes last commit
- Keeps changes staged

Good for:

- Rewriting commit
- Commbining commits

#### 2. Mixed Reset (default)

```bash
git reset HEAD~1
```

Effect:

- Removes last commit
- Keeps changes in working directory
- Unstages changes

#### 3. Hard Reset ⚠️

```bash
git reset --hard HEAD~1
```

Effect:

- Deletes last commit
- Deletes staged changes
- Deletes working directory changes
  This is destructive.

#### When to Use Reset

- Fix local mistakes
- Clean up before pushing
- Rewrite private history
  Never use `reset` on shared public branches.

### Git Revert

`git revert` does NOT rewrite history.
Instead:

- It creates a new commit
- That undoes a previous commit
  Example:

```bash
git revert a1b2c3
```

Result:

- A new commit that reverses changes

#### When to Use Revert

- Undo changes in public branches
- Production rollback
- Safe collaboration

#### Reset vs Revert Summary

| Command | Rewrites History? | Safe for Shared Branch? |
| ------- | ----------------- | ----------------------- |
| reset   | Yes               | No                      |
| revert  | No                | Yes                     |

## Cherry-pick (`git cherry-pick`)

Cherry-pick lets you:

- Copy a specific commit
- Apply it to another branch

### Example Scenario

You fixed a bug in `develop` But need that fix in `main`

```bash
git checkout main
git cherry-pick a1b2c3
```

Git applies that specific commit to `main`.

### When to Use Cherry-pick

- Move hotfix between branches
- Apply selective commits
- Backport fixes to older versions

### Caution

Cherry-pick duplicates commits. Overusing it can create:

- Confusing history
- Duplicate changes

## Stashing

Sometimes you're working and:

- A bug report comes in
- You need to switch branches
- But your work isn't ready to commit

Use stash.

### Save Work Temporarily

```bash
git stash
```

This:

- Saves uncommitted changes
- Cleans working directory

### See Stashes

```bash
git stash list
```

### Restore Stash

```bash
git stash pop
```

This:

- Applies stash
- Removes it from stash list
  Or:

```bash
git stash apply
```

Applies but keeps it stored.

### Create Branch from Stash

```bash
git stash branch new-feature
```

This:

- Creates new branch
- Applies stash
- Removes stash

Very useful for unexpected feature work.

### Named Stash

```bash
git stash push -m "WIP login validation"
```

## Best Practices for Rewriting History

- Rewrite only local commits
- Never rewrite shared `main`
- Clean history before opening PR
- Use interactive rebase to create meaningful commits
- Prefer revert over reset for production fixes

## Final Thoughts

Rewriting history is not about hiding mistakes.
It's about creating **clear**, **readable**, and **maintainable commit history**.

Clean Git history:

- Helps future developers
- Makes debugging easier
- Improves code reviews
- Reflects professional development practices

Mastering these commands separates:
"Git users" from "Git professionals"
