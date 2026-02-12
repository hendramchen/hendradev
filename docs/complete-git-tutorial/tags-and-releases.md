---
sidebar_position: 9
---

# Tags and Releases

Tags in Git are used to mark specific points in history as important — most commonly to mark release versions (e.g., `v1.0.0`, `v2.1.3`).

Unlike branches, tags do not move. Once created, they always point to the same commit.

Tags are commonly used for:

- Version releases
- Deployment checkpoints
- Public milestones
- Stable versions for production

---

## Lightweight vs Annotated Tags

Git provides two types of tags:

🔹 **Lightweight Tags**

A lightweight tag is simply a pointer to a specific commit.
It’s like a bookmark.

Create a lightweight tag:

```
git tag v1.0.0
```

This creates a tag pointing to the current `HEAD`.

You can also tag a specific commit:

```
git tag v1.0.0 <commit-hash>
```

Characteristics:

- No extra metadata
- No tag message
- No author/date information
- Simple reference only

Use lightweight tags for:

- Temporary tags
- Internal checkpoints
- Quick local marking

---

🔹 **Annotated Tags (Recommended for Releases)**

Annotated tags are full Git objects stored in the repository database.

They contain:

- Tag name
- Tag message
- Tagger name
- Email
- Date
- Optional GPG signature

**Create an annotated tag**:

```
git tag -a v1.0.0 -m "Release version 1.0.0"
```

Tag a specific commit:

```
git tag -a v1.0.0 <commit-hash> -m "Release version 1.0.0"
```

**Why annotated tags are better for releases**:

- More professional
- Include release notes message
- Traceable metadata
- Suitable for public repositories

👉 Best practice:
Use **annotated tags for production releases**.

---

## Listing and Managing Tags

**List all tags**

```
git tag
```

**List tags with additional information**

```
git tag -n
```

**Show detailed information about a tag**

```
git show v1.0.0
```

---

## Pushing Tags to Remote

By default, `git push` does not push tags.

**Push a specific tag**

```
git push origin v1.0.0
```

**Push all tags**

```
git push origin --tags
```

**Push annotated tags only**

```
git push origin --follow-tags
```

👉 `--follow-tags` pushes only annotated tags that are referenced by pushed commits.

## Deleting Tags

**Delete local tag**

```
git tag -d v1.0.0
```

**Delete remote tag**

```
git push origin --delete v1.0.0
```

## Creating Relase from Tags

In most platforms (GitHub, GitLab, Bitbucket), tags are used to create official releases.

Typical workflow:

1. Finish feature development
2. Merge into main branch
3. Create annotated tag
4. Push tag to remote
5. Create release notes

---

### Creating Release Notes from Tags

Release notes describe:

- New features
- Bug fixes
- Breaking changes
- Improvements

## You can generate release notes manually or automatically.

**Option 1: Manually from Git Log**
Compare commits between two tags:

```
git log v1.0.0..v1.1.0 --oneline
```

This shows all commits included in `v1.1.0` but not in `v1.0.0`.
You can also format it:

```
git log v1.0.0..v1.1.0 --pretty=format:"- %s"
```

Example output:

```
- Add authentication feature
- Fix login validation bug
- Improve API performance
```

You can copy this into your release notes.
**Option 2: Using Conventional Commits (Recommended)**
If your commit messages follow a structured format like:

```
feat: add payment integration
fix: correct validation logic
docs: update README
```

You can filter commits:

```
git log v1.0.0..v1.1.0 --grep="feat\|fix" --pretty=format:"- %s"
```

This makes release notes cleaner and more professional.

---

## Suggested Versioning Strategy (Semantic Versioning)

Common version format:

```
MAJOR.MINOR.PATCH
```

Example:

- `1.0.0` → Initial release
- `1.1.0` → New feature added
- `1.1.1` → Bug fix
- `2.0.0` → Breaking changes

Rules:

- MAJOR → Breaking change
- MINOR → Backward-compatible feature
- PATCH → Backward-compatible fix

---

## Best Practice

- ✔ Use annotated tags for production releases
- ✔ Follow Semantic Versioning
- ✔ Keep commit messages clean
- ✔ Generate release notes from tag comparison
- ✔ Push tags immediately after creation
- ✔ Never rewrite public release tags

---

## Summary

- Tags mark specific commits as important
- Lightweight tags are simple pointers
- Annotated tags store metadata and are recommended for releases
- Tags are not pushed automatically
- Release notes can be generated using git log
- Use Semantic Versioning for clear version control
