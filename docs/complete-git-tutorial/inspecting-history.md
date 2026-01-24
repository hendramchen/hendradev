---
sidebar_position: 4
---

# Inspecting History

Understanding your project's history is crucial for debugging, code reviews, and maintaining context about why changes were made. Git provides powerful tools to inspect commits, track down changes, and visualize your repository's evolution.

## Viewing Commit History

The `git log` command is your primary tool for exploring commit history. By default, it displays commits in reverse chronological order, showing the commit hash, author, date, and message.

```
git log
```

However, the real power comes from combining git log with various flags to filter and format the output exactly how you need it.
**Essential Flags for** `git log`
Limiting output: When working on large projects, you often don't need to see the entire history.
Use `-n` to limit the number of commits displayed.

```
git log -n 5          # Show only the last 5 commits
git log --since="2 weeks ago"
git log --after="2024-01-01" --before="2024-01-31"
```

**Filtering by author**: Useful when reviewing a specific developer's work or tracking your own contributions.

```
git log --author="John"
git log --author="john@example.com"
```

**Searching commit messages**: Find commits related to specific features or bug fixes.

```
git log --grep="bug fix"
git log --grep="API" --grep="database" --all-match
```

**Viewing file-specific history**: Track changes to particular files or directories.

```
git log -- src/controllers/UserController.php
git log -- app/Models/
```

**Patch view**: See the actual changes introduced in each commit.

```
git log -p              # Show full diff for each commit
git log -p -2           # Show diffs for last 2 commits
git log --stat          # Show files changed with insertion/deletion stats
```

## Short & Graphical Logs

For quick overviews and understanding branch structures, Git offers condensed and visual log formats.
**One-line Format**
The `--oneline` flag compresses each commit to a single line, showing just the abbreviated hash and commit message.

```
git log --oneline
// Output example:
a3f5b21 Fix validation bug in user registration
c7d2e19 Add API endpoint for product search
f1a8b3c Refactor authentication middleware
```

**Graphical Branch Visualization**
The --graph flag draws an ASCII graph showing branch and merge history, making it easier to understand your repository's structure.

```
git log --graph --oneline
```

Output example:

```
* a3f5b21 Fix validation bug in user registration
*   c7d2e19 Merge branch 'feature/search'
|\
| * f1a8b3c Add search functionality
| * e2d9a7f Create search service
* | b5c3f21 Update dependencies
|/
* d4e8f12 Initial commit
```

**Decorations**
The `--decorate` flag shows references (branches, tags) pointing to commits, helping you understand where different branches are positioned.

```
git log --oneline --graph --decorate
```

Output example:

```
* a3f5b21 (HEAD -> main, origin/main) Fix validation bug
* c7d2e19 Merge branch 'feature/search'
* f1a8b3c (tag: v1.2.0) Add search functionality
```

**Power Combination**
Combine these flags for maximum clarity:

```
git log --oneline --graph --decorate --all
```

The `--all` flag shows all branches, not just the current one. This is invaluable for understanding the complete repository structure.
For frequent use, create a Git alias:

```
git config --global alias.lg "log --oneline --graph --decorate --all"
# Now use: git lg
```

**Show a Specific Commit**
When you need detailed information about a particular commit, `git show` is your tool. It displays the commit metadata along with the diff of changes introduced.

```
git show a3f5b21
git show HEAD           # Show the latest commit
git show HEAD~2         # Show 2 commits before HEAD
```

**Show specific files from a commit:**

```
git show a3f5b21:src/models/User.php
```

This displays the version of that file at the specified commit, useful for comparing implementations across different points in time.
**Show only the commit message and stats:**

```
git show --stat a3f5b21
git show --name-only a3f5b21     # Just file names
```

## Blame and Annotate

The git blame command answers the question "who wrote this line and when?" It's essential for understanding code context, especially when debugging or during code reviews.
**Basic Blame Usage**

```
git blame src/controllers/UserController.php
```

Output example:

```
a3f5b21d (John Doe 2024-01-15 14:23:11 +0700  1) class UserController extends Controller
a3f5b21d (John Doe 2024-01-15 14:23:11 +0700  2) {
c7d2e19f (Jane Smith 2024-01-20 09:45:32 +0700  3)     public function store(Request $request)
c7d2e19f (Jane Smith 2024-01-20 09:45:32 +0700  4)     {
f1a8b3c2 (John Doe 2024-01-22 16:12:05 +0700  5)         $validated = $request->validate([
```

Each line shows the commit hash, author, timestamp, line number, and the actual code.
**Useful Blame Options**
**Show line number ranges:**

```
git blame -L 10,20 src/services/PaymentService.php
```

**Show email addresses instead of names:**

```
git blame -e src/models/Order.php
```

**Ignore whitespace changes:**

```
git blame -w src/helpers/StringHelper.php
```

This is particularly useful when someone reformatted code, as it shows who made the actual logical changes.
**Follow file renames:**

```
git blame -C src/utils/Validator.php
```

The `-C` flag detects lines moved or copied from other files in the same commit.
**Advanced Blame Investigation**
Sometimes you need to see the history before a specific commit, especially if a refactoring makes the current blame less useful.

```
git blame a3f5b21^ -- src/controllers/ApiController.php
```

The ^ means "the commit before a3f5b21", letting you see who wrote code before a major change.
**Combining Blame with Show**
When `git blame` identifies an interesting commit, use `git show` to see the full context:

```
# Find the commit that changed line 45
git blame -L 45,45 src/models/User.php
# Then examine that commit
git show c7d2e19f
```

**Practical Blame Workflow**
Here's a typical debugging workflow using blame:

```bash
# 1. Find when a bug was introduced
git blame src/services/AuthService.php | grep "validateToken"

# 2. Get the commit hash from the output
# 3. See the full commit
git show f1a8b3c2

# 4. See what else changed in that commit
git show --stat f1a8b3c2

# 5. If needed, check the state before that commit
git blame f1a8b3c2^ -- src/services/AuthService.php
```

This workflow helps you understand not just what changed, but why it changed and what else was modified at the same time.

## Best Practices

When inspecting history, keep these practices in mind:
Use descriptive commit messages. Future you (and your teammates) will appreciate clear explanations when using `git log` to understand changes.

**Combine tools**. Start with `git log --oneline --graph` for an overview, then drill down with `git show` for specific commits, and use `git blame` when you need line-level detail.
Create aliases for common log formats. Save time by aliasing frequently used log combinations.

**Don't fear the history**. Git's history is a powerful debugging and learning tool. Regularly explore it to understand how your codebase evolved.
Understanding these inspection tools transforms Git from a simple version control system into a powerful tool for understanding your codebase's evolution and making informed decisions about future changes.
