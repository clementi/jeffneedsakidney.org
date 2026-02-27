# Personal Website Project

I want to make a personal website. This will replace the current bare-bones one at https://jeffreypratt.net. It is a static site and is hosted on S3. Credentials for S3 will be forthcoming but right now we will focus on building the site. We will use *eleventy* for this, and the *pnpm* package manager (not npm).

## Structure

The site will have an area for the following components:

* Blog
* Projects
* Resume/CV

We discuss each of these below.

### Blog

Blog posts are Markdown with front matter. They will contain text, and may optionally contain

* syntax-highlighted code
* mathematics: rendered server-side, statically, with KaTeX---that is, not with the JS library on the client side.

These blog posts may be short notes, but they may also be long entries.

### Projects

A list of projects, provided from a YAML file of projects that I will supply. The YAML file (projects.yaml) will be as follows:

```yaml
- name: The project name
  url: URL on GitHub or elsewhere
  description: a few lines of description
- name: Another project name
  url: URL of the second project
  description: description of the second project, and so forth.
```

### Resume/CV

We will just put a placeholder here. It may simply be a link to a PDF.

## Look and Feel

### Fonts and Typography

Main font: Castoro, Georgia, Times New Roman, Times, serif
Code font: Google Sans Code, monospaced

When processing the Markdown, em dashes (---) and en dashes (--) should be converted into their typographically equivalent characters. Straight quotes must be converted properly to curly quotes.

As mentioned above, any LaTeX mathematics will be rendered server-side, statically, with KaTeX. I do not want to rely on client-side JavaScript for this.

### Colors

Background: #fff
Text: just slightly lighter than black
