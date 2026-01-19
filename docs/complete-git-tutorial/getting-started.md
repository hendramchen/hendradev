---
sidebar_position: 2
---

# Getting Started with Git

Before you start tracking or committing code, you need to install Git, configure your identity, and understand how to create or clone repositories. This section walks you through everything step-by-step.

## Install Git (macOS / Linux / Windows)

Installing Git depends on your operating system. After installation, you’ll verify whether Git works correctly.

### macOS Installation

Option 1: Install via Homebrew (recommended)

```
brew install git
```

Option 2: Install Xcode Command Line Tools

```
xcode-select --install
```

Option 3: Download from official website

Official Git installer:
[https://git-scm.com/download/mac](https://git-scm.com/download/mac)

### Linux Installation

Most Linux distributions include Git in their package manager.
**Debian / Ubuntu**

```
sudo apt update
sudo apt install git
```

### Windows Installation

Download the official installer:
[https://git-scm.com/download/win](https://git-scm.com/download/win)

The installer includes:

- Git Bash (terminal with Unix-like commands)
- Git GUI
- Default Git settings (you can mostly click “Next”)

### Verify Installation

Run this command to verify that Git is installed correctly:

```
git --version
```

Expected output:

```
git version 2.40.1
```

If you see a version number, Git is successfully installed.

## Configure Git (Identity & Basic Settings)

When you commit code, Git attaches your name and email.
Setting these ensures your commits are correctly attributed—and required when pushing to GitHub/GitLab.

### Set Your Name & Email

```
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

To verify:

```
git config --global user.name
git config --global user.email
// or
git config --global --list
```

### Set Default Texxt Editor

Git often needs an editor—for editing commit messages, rebase instructions, etc.

Common editors:

**VS Code**

```
git config --global core.editor "code --wait"
```

**Nano**

```
git config --global core.editor "nano"
```

**Vim**

```
git config --global core.editor "vim"
```

## Create Your First Repository (git init)

A Git repository is a folder tracked by Git.
This is how you create one from scratch.

### Step 1: Create a New Directory

```
mkdir my-first-git-project
cd my-first-git-project
```

### Step 2: Initialize Git

```
git init
```

Expected output:

```
Initialized empty Git repository in /path/to/my-first-git-project/.git/
```

This creates a hidden directory .git/ that contains:

- Repository history
- Branch references
- Commit metadata

### Step 3: Add Your First File

```
echo "# My First Git Project" > README.md
```

### Step 4: Check Status

```
git status
```

You’ll see `README.md` as an untracked file.

### Step 5: Stage & Commit

```
git add README.md
git commit -m "Initial commit"
```

Now you have a fully working Git repository with your first commit.

## Clone Existing Repositories (`git clone`)

Instead of starting from scratch, most of the time you will collaborate using a remote repository hosted somewhere (GitHub, GitLab, Bitbucket, etc.).

### Cloning a Repository

```
git clone <repository-url>
```

Example:

```
git clone https://github.com/octocat/Hello-World.git
```

Git will:

- Download the entire project history
- Create a folder with project files
- Set origin as the default remote
- Place you on the default branch (main or master)

### Clone into a Specific Folder Name

```
git clone <url> my-app
```

Example:

```
git clone https://github.com/octocat/Hello-World.git my-app
```

### Verify the Remote

```
git remote -v
```

Expected output:

```
origin  https://github.com/octocat/Hello-World.git (fetch)
origin  https://github.com/octocat/Hello-World.git (push)
```

## Try Updating Your Local Copy

Inside the cloned folder:

```
git pull
```

This pulls the latest changes from the remote repo.
