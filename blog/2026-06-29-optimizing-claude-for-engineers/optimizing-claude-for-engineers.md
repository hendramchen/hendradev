---
title: "Optimizing Claude for Software Engineering: Memory & Skills"
description: "A practical, follow-along guide for an engineer who already uses **Claude Cowork** with repos in project coworks, but has never touched Memory or Skills."
slug: optimizing-claude-for-engineers
authors: [hendra]
tags: [claude, claude-chat, claude-cowork, claude-code]
---

# Optimizing Claude for Software Engineering: Memory & Skills

A practical, follow-along guide for an engineer who already uses **Claude Cowork** with repos in project coworks, but has never touched **Memory** or **Skills**. The goal: stop re-explaining yourself, and turn repeated workflows into one-shot commands.

---

## 1. Mental model — three surfaces, one toolbox

You have three ways to reach Claude. Pick based on the task, not habit.

| Surface                                 | Best for                                                                         | Memory it uses                                        | Skills it uses                        |
| --------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------- |
| **Claude Chat (claude.ai / app)**       | Quick questions, design discussions, throwaway scripts, drafting                 | Chat Memory + Project Memory                          | Pre-built + custom (uploaded as zip)  |
| **Claude Cowork** (desktop agentic app) | Multi-step work on a folder/repo, "do this across my codebase"                   | Same as Chat (claude.ai memory + per-project memory)  | Pre-built + custom                    |
| **Claude Code** (terminal / IDE agent)  | Deep, iterative coding inside a repo; the highest-leverage surface for engineers | `CLAUDE.md` hierarchy + auto memory (separate system) | Custom skills only (filesystem-based) |

**Key insight:** Claude Code's memory is a _different system_ from claude.ai/Cowork memory. They do not share a profile. You set them up separately. **Skills**, by contrast, are portable — write a skill once and it can work across all three surfaces.

---

## 2. Memory — stop repeating yourself

Memory is what carries context across sessions so you don't re-introduce your stack, conventions, and preferences every time.

### 2A. Claude Chat / Cowork memory

These share the same memory system on claude.ai.

**Turn it on (2 minutes):**

1. Go to **Settings → Capabilities**.
2. Enable **"Search and reference chats"** — lets Claude look back through past conversations.
3. Enable **"Generate memory from chat history"** — lets Claude extract and store what matters (your role, stack, recurring projects, preferences).
4. _(Optional)_ **Import memory** from ChatGPT / Gemini / Grok if you've built context elsewhere — Settings → Capabilities → Memory Import. Processing takes ~24 hours.

**How it behaves:**

- A synthesis of key insights is rebuilt roughly every 24 hours and injected into every new _standalone_ chat.
- **Project memory is separate.** Each Cowork/Chat project has its own isolated memory space and project summary. Context from your "Payments Service" project won't bleed into your "Mobile App" project. This is exactly what you want as an engineer juggling repos.
- It deliberately stores work context (role, tools, conventions, project details) and avoids secrets like passwords or account numbers.

**Managing it:**

- Ask directly: _"What do you remember about me?"_ to audit.
- Say _"Remember that we migrated from REST to gRPC"_ or _"Forget the old deploy process"_ mid-conversation.
- **Pause** (keeps memories, stops creating new ones) vs **Reset** (permanent wipe, including project memories) in Settings.
- Use **Incognito chat** (ghost icon) for one-off conversations you don't want saved.
- Do a **monthly memory check-up**: scan Settings, delete anything stale.

**Project instructions vs. memory:** In each Cowork project, also fill in the project's **custom instructions** field. Memory is _learned_; instructions are _declared_. Put hard rules there (e.g., "This repo uses pnpm, Vitest, and conventional commits. Never edit files in `/generated`.").

> ⚠️ Confidentiality note: don't store client-identifiable or regulated data (HIPAA, privileged, etc.) in memory. Use Incognito/temporary chats for those.

### 2B. Claude Code memory — `CLAUDE.md` (highest ROI for engineers)

If you adopt one new habit from this guide, make it this. `CLAUDE.md` becomes part of Claude's system prompt and loads automatically at the start of every Code session. One hour writing a good one saves countless hours of re-explanation.

**The hierarchy (all levels concatenate; more specific files effectively win on conflicts):**

| Scope          | Location                                          | Use for                                   | Commit to git?   |
| -------------- | ------------------------------------------------- | ----------------------------------------- | ---------------- |
| Managed policy | `/etc/claude-code/CLAUDE.md` (org-deployed)       | Company-wide security/compliance          | N/A (IT-managed) |
| **User**       | `~/.claude/CLAUDE.md`                             | Your personal prefs across _all_ projects | No (personal)    |
| **Project**    | `./CLAUDE.md` or `./.claude/CLAUDE.md`            | Team conventions, architecture, commands  | **Yes**          |
| Local          | `./CLAUDE.local.md` (deprecated — prefer imports) | Personal per-project notes                | No (gitignore)   |

**How loading works (important nuances):**

- Claude walks _up_ the directory tree from where you launch, loading every `CLAUDE.md` it finds.
- **Nested/subdirectory** `CLAUDE.md` files (e.g., `packages/auth/CLAUDE.md`) are **not** loaded at launch. They load on demand only when Claude reads a file in that subtree. This keeps startup lean — great for monorepos.
- The **root project** `CLAUDE.md` survives `/compact` (Claude re-reads it from disk). Nested ones reload only when next touched. If an instruction "disappeared," it was probably given only in chat, never written to a file.

**What to put in it (keep it tight — aim for ~80–120 lines, hard ceiling ~200):**
Models reliably follow ~150–200 instructions; Code's own system prompt eats ~50. Every wasted line competes with the rules that matter. Include:

- Build / test / lint / migration commands (exact, runnable)
- Tech stack and key conventions ("2-space indent", "early returns over nesting >3 deep")
- Project layout ("API handlers live in `src/api/handlers/`")
- "Always do X" rules and a **Human Approval Required** checklist for risky actions
- Mark critical rules with `IMPORTANT:` or `YOU MUST`

**What to leave out:** personality fluff ("be a senior engineer", "think step by step" — it already does), anything Claude learns in one session, and any secrets/tokens.

**Authoring shortcuts:**

- Type `#` at the start of an input → Claude prompts you to save that line to a memory file.
- Run `/memory` → opens memory files in your editor and shows exactly what's loaded (your #1 debugging tool when Claude "ignores" a rule — often the rule lives in a nested file that hasn't loaded yet).
- Use `@path/to/file.md` **imports** to modularize (e.g., `@docs/coding-standards.md`). Note: imports _organize_ but don't save context — imported files still load at launch. Don't import your whole docs site.

**Path-scoped rules (`.claude/rules/`):** For instructions that should only apply to certain files, put them in `.claude/rules/` with path globs (e.g., `src/**/*.{ts,tsx}`). They load _only_ when Claude works on matching files — keeps API rules out of context during frontend work.

**Auto memory:** Claude Code also writes its own learnings (from your corrections and preferences) into a `MEMORY.md`, loaded at session start. Treat the split as: **`CLAUDE.md` = your requirements**, **auto memory = what Claude observed about you**. Browse/edit it via `/memory`.

**Pro tip:** Commit `CLAUDE.md` to git. `git checkout CLAUDE.md` lets you experiment with instructions and roll back.

---

## 3. Skills — turn repeated workflows into reusable expertise

A **Skill** is a folder containing a `SKILL.md` (instructions + metadata) and optional scripts/templates. Claude loads only the name+description at startup, then reads the full skill _only when relevant_ (progressive disclosure). Unlike a prompt (one-off) or `CLAUDE.md` (always-on background), a skill is **on-demand expertise** Claude reaches for when the task matches.

Think: `CLAUDE.md` is for "nouns" (what/where things are, always loaded). Skills are for "verbs" (how to perform a specific procedure, loaded when triggered).

### 3A. Pre-built skills (use immediately, zero setup)

Anthropic ships skills for **PowerPoint, Excel, Word, and PDF**. They already work behind the scenes when you ask Claude to create those documents — no action needed. (Useful when you need to generate a report, design doc, or spreadsheet from your data.)

### 3B. Where custom skills live, per surface

| Surface                | How to add a custom skill                                                                                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Claude Code**        | Drop a folder in `.claude/skills/<name>/` (project) or `~/.claude/skills/<name>/` (personal, all projects). Discovered automatically — no upload.                        |
| **claude.ai / Cowork** | **Settings → Features**, upload the skill as a **zip**. Requires Pro/Max/Team/Enterprise with code execution enabled. (Custom skills here are per-user, not org-shared.) |
| **API**                | Upload via the `/v1/skills` endpoints; reference by `skill_id`. (For when you build apps on Claude.)                                                                     |

A skill authored once works across surfaces with minimal change, as long as the environment provides what it needs.

### 3C. Anatomy of a `SKILL.md`

```markdown
---
name: pr-description-writer
description: >
  Generates a structured pull-request description from a git diff.
  Use this when the user asks to "write a PR description", "summarize
  my changes for a PR", or prepares to open a pull request.
---

# PR Description Writer

## Instructions

1. Run `git diff main...HEAD` to read the actual changes.
2. Group changes by area (feature, fix, refactor, tests, docs).
3. Produce sections: **Summary**, **Changes**, **Testing**, **Risk/rollback**.
4. Flag any change touching auth, billing, or migrations under **⚠️ Needs review**.
5. Keep it under 300 words. Use imperative mood.

## Examples

- Input: a diff adding rate limiting → output highlights the new middleware,
  config flags, and a testing checklist.
```

**Rules that matter:**

- `name`: lowercase, numbers, hyphens only; max 64 chars; can't contain "anthropic"/"claude".
- `description`: this is a **trigger**, not a summary. Write _"Use this when the user wants to X"_, including the phrases you'd actually type. This single field decides whether Claude picks the skill. Max 1024 chars.
- Keep `SKILL.md` concise. Move long reference material into a `references/` folder and link to it (progressive disclosure keeps your context window clean).
- Bundling **scripts** is more powerful than instructions alone — offload deterministic work (exact API calls, formatting, parsing) to code so Claude does the planning and the script does the precise part.

### 3D. The fastest way to build one: let Claude build it

You don't need to memorize the format. Two options:

1. **In Claude Code:** there's a `skill-creator` skill — ask Claude to scaffold a new skill and it generates the `SKILL.md` and structure. Live changes to `SKILL.md` take effect within the session (no restart) as long as the skills directory existed at launch.
2. **The Claude-A / Claude-B loop** (the recommended refinement method):
   - Work through a task _without_ a skill, noticing the context you keep providing.
   - Ask one Claude ("A") to capture that into a `SKILL.md`.
   - Give the skill to a fresh Claude ("B") on real tasks; watch where it struggles.
   - Bring the observation back to A ("B forgot to exclude test accounts even though the skill mentions it") and refine — e.g., promote "always filter" to "**MUST** filter."
   - Repeat. You're tuning against real behavior, not assumptions.

### 3E. Distribution & control (for teams)

- **Project skills:** commit `.claude/skills/` to version control so the whole team gets them.
- **Personal skills:** keep in `~/.claude/skills/`.
- Control which skills Claude may auto-invoke via `/permissions` (e.g., `Skill(commit)`, deny `Skill(deploy *)`).
- As an org scales, an internal plugin marketplace beats checking every skill into every repo (each loaded skill adds a little context cost).

---

## 4. Your concrete setup plan (do these in order)

**Day 1 — Memory foundation (~20 min)**

1. claude.ai → Settings → Capabilities → enable both memory toggles. Optionally import from your other AI tools.
2. In each Cowork project, fill the **project instructions** with hard rules (package manager, test runner, commit style, no-touch directories).
3. Ask Claude _"What do you remember about me?"_ to confirm it's working.

**Day 1–2 — `CLAUDE.md` for your main repo (~1 hr)** 4. In your repo root, create `CLAUDE.md`. Start small: stack, build/test/lint commands, 5–10 conventions, project layout, a "Human Approval Required" list. Keep under ~100 lines. 5. Create `~/.claude/CLAUDE.md` for personal cross-project prefs (communication style, "show diffs not whole files", "run tests after changes"). 6. Commit the project `CLAUDE.md`. Run `/memory` to verify it loaded. 7. For a monorepo, add lightweight nested `CLAUDE.md` files per package (they load on demand).

**Week 1 — First skills** 8. Use the pre-built docx/xlsx/pdf skills once (e.g., "turn this benchmark CSV into an Excel report") to see them work. 9. Build your first custom skill for a workflow you repeat. Use `skill-creator` or the A/B loop. 10. Commit it to `.claude/skills/` so your team benefits. Iterate when it triggers wrongly (tune the `description`).

**Ongoing** 11. When you correct Claude on something durable, write it into the right file (`#` shortcut, or update `CLAUDE.md`/project instructions). If it only matters for one task, skip it. 12. Monthly: audit memory and `CLAUDE.md` for staleness — outdated rules are worse than none.

---

## 5. Skills worth building as an engineer

Start with whatever you explain to Claude most often. Common high-value ones:

- **`pr-description-writer`** — diff → structured PR body (example above).
- **`commit-message`** — staged changes → conventional-commit message.
- **`test-generator`** — generate tests matching your framework, fixtures, and naming conventions.
- **`code-review`** — apply _your team's_ review checklist (security, error handling, logging) to a diff.
- **`run-skill-generator`** (exists in Code) — captures how to build/launch your app from a clean env and records it so `/run` and `/verify` follow the recipe instead of re-discovering it.
- **`migration-scaffold`** — generate DB migration boilerplate with your project's patterns.
- **`new-service`** — scaffold a new handler/service with the natural-language choices baked in ("async or sync?").

The best skills start tiny — a few lines plus one "gotcha" — and grow as Claude hits new edge cases. Capture the first failure, add one script, share it, iterate.

---

## 6. Cheat sheet

| I want to…                                     | Do this                                                |
| ---------------------------------------------- | ------------------------------------------------------ |
| Stop re-explaining my stack in Chat/Cowork     | Enable both memory toggles + fill project instructions |
| Give Claude Code persistent project context    | Write `CLAUDE.md` at repo root, commit it              |
| Set personal prefs across all repos            | `~/.claude/CLAUDE.md`                                  |
| Apply rules only to certain files              | `.claude/rules/` with path globs                       |
| See what Claude has loaded / fix ignored rules | Run `/memory`                                          |
| Save a memory mid-session (Code)               | Start the line with `#`                                |
| Reuse a multi-step workflow                    | Build a skill (`skill-creator` or A/B loop)            |
| Generate Office/PDF docs                       | Just ask — pre-built skills handle it                  |
| Share a workflow with my team                  | Commit `.claude/skills/` to git                        |
| One-off chat with no memory                    | Incognito (ghost icon)                                 |

---

### Sources to bookmark

- Skills overview: `https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview`
- Skills in Claude Code: `https://code.claude.com/docs/en/skills`
- Claude Code memory (`CLAUDE.md`): `https://code.claude.com/docs/en/memory`
- Chat search & memory: `https://support.claude.com/en/articles/11817273`
- Skills authoring best practices: `https://www.claudeskills.org/docs/agent-skills/best-practices`

_Feature availability and UI evolve quickly — if a menu path differs, check the linked docs for the current version._
