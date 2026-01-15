---
slug: why-use-docusaurus
title: Why I Swapped "Building from Scratch" for Docusaurus
authors: [hendra]
tags: [docusaurus]
---

# Why I Swapped "Building from Scratch" for Docusaurus

In the developer community, we often have a "Not Invented Here" syndrome. We feel that to truly own our personal brand, we need to build our websites from the ground up—hand-coding every div, managing our own routing, and sweating over the perfect dark mode implementation.

But lately, I’ve shifted my philosophy. For my blog and documentation, I’ve moved to Docusaurus. Here is why I believe it’s the superior choice over a "from scratch" React or Next.js build.

## 1. Speed to Production (Easy to Use & Deploy)

Building from scratch means you are the architect, the plumber, and the decorator. You have to handle:

- Route management.

- Theme switching (Dark/Light mode).

- Mobile responsiveness.

- Asset optimization.

With Docusaurus, you get a "Fast Track" to deployment. It’s a specialized static site generator (SSG) that comes with these features out of the box. You can go from npx create-docusaurus@latest to a live site on Vercel, Netlify, or GitHub Pages in under 10 minutes.

## 2. The Power of MDX: Markdown with "Superpowers"

The biggest selling point for me is the content format. Most developers love Markdown for its simplicity, but it can be limiting when you want to show off an interactive demo.

Docusaurus uses MDX (Markdown + JSX). This means I can write my technical articles in clean Markdown, but when I need a live code editor, an interactive chart, or a custom React component, I can just drop it right into the text.

```mdx
# My Awesome Component

Check out this interactive button I built:

import MyCustomButton from "@site/src/components/MyCustomButton";

<MyCustomButton onClick={() => alert("Hello from MDX!")} />
```

## 3. "Docs-as-Code" Best Practices

Docusaurus isn't just a blog; it’s a documentation engine. It follows the industry’s best practices for content structure:

Versioning: Perfect if you’re documenting an Open Source project or a library.

Sidebar & Breadcrumbs: Automatic navigation that makes long-form technical content readable.

SEO by Default: It generates static HTML for every route, ensuring your blog posts actually show up on Google.

## 4. A Rich Plugin Ecosystem (Algolia & More)

When you build from scratch, adding a search bar is a project in itself. You have to index your content, manage a search engine, and build the UI.

In Docusaurus, adding world-class search is as simple as a configuration change. The Algolia DocSearch plugin is the gold standard for technical sites. Once configured, you have a lightning-fast, keyboard-accessible search bar that "just works."
