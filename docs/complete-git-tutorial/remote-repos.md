---
sidebar_position: 6
---

# Remote Repositories

So far, we’ve worked mostly with **local repositories**. But Git becomes really powerful when we collaborate with others or back up our code.
That’s where remote repositories come in.

A _remote repository_ is a version of your project hosted somewhere else (GitHub, GitLab, Bitbucket, or a private server). It allows you to push your changes and pull changes made by others.

## What is a Remote?

A remote is simply a named reference to another Git repository.

When you clone a repository:

```
git clone https://github.com/user/project.git
```

Git automatically creates a remote called `origin`.

### Common Remote Names

- **origin**
  Default remote name pointing to the original repository you cloned from.

- **upstream**
  Often used to point to the original repository when you fork a project.

- **custom names**
  You can name remotes anything: production, staging, backup, etc.

### Viewing Remotes

```
git remote
```

```
git remote -v
```

Example output:

```
origin  https://github.com/user/project.git (fetch)
origin  https://github.com/user/project.git (push)
```

### Adding Multiple Remotes

```
git remote add upstream https://github.com/original/project.git
```

Now you have:

- `origin` → your fork
- `upstream` → original repository

## Push & Pull

### git push

`git push` sends your local commits to a remote repository.

```
git push origin main
```

This means:

- push local `main`
- to remote `origin`
- into branch `main

If the branch is already tracked:

```
git push
```

### git pull

`git pull` brings changes from a remote repository into your current branch.

```
git pull origin main
```

Under the hood, `git pull` does two things:

1. `git fetch`
2. `git merge` (or `git rebase`, depending on config)

## Fetch vs Pull

This is an important concept many developers confuse.

### git fetch

```
git fetch origin
```

- Downloads changes from the remote
- Does NOT modify your working branch
- Updates remote-tracking branches like `origin/main`

Use fetch when you want to:

- see what changed
- review commits
- merge manually later

Example workflow:

```
git fetch origin
git log origin/main
git merge origin/main
```

### git pull

```
git pull origin main
```

- Fetches changes
- Immediately merges them into your current branch

It’s faster, but less controlled.

## Fetch + Merge vs Fetch + Rebase

**Fetch + Merge (default)**

```
git fetch
git merge origin/main
```

- Creates a merge commit
- Keeps full history
- Safe and common for teams

**Fetch + Rebase**

```
git fetch
git rebase origin/main
```

- Replays your commits on top of remote changes
- Cleaner, linear history
- Avoid rebasing shared branches

**Rule of thumb:**

> Rebase your local feature branches, merge shared branches.

## Remote Branch Management

### Listing Remote Branches

```
git branch -r
```

Example:

```
origin/main
origin/develop
origin/feature/login
```

To see both local and remote branches:

```
git branch -a
```

### Tracking a Remote Branch

When you create a new branch and push it for the first time:

```
git push --set-upstream origin feature/auth
```

Or shorter:

```
git push -u origin feature/auth
```

Now you can simply run:

```
git push
git pull
```

Git knows which remote branch to use.

### Managing Remotes

List remotes:

```
git remote
```

Rename a remote:

```
git remote rename origin production
```

Remove a remote:

```
git remote remove upstream
```

## Deleting Remote Branches

Remote branches don’t disappear automatically when you delete local ones.

**Delete Local Branch**

```
git branch -d feature/auth
```

**Delete Remote Branch**

```
git push origin --delete feature/auth
```

Or the older syntax:

```
git push origin :feature/auth
```

## Cleaning Up Deleted Remote Branches

After someone deletes a remote branch, you may still see it locally.

```
git fetch --prune
```

Or:

```
git remote prune origin
```

This removes stale remote-tracking branches.

## Summary

- Remote repositories allow collaboration and backups
- origin is the default remote, but you can have multiple remotes
- git push sends changes, git pull receives and merges changes
- git fetch is safer and more controlled than pull
- Remote branches are tracked separately from local branches
- Always clean up unused remote branches to keep things tidy
