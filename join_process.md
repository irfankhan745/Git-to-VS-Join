# GitHub ↔ VS Code Join Process

A beginner-friendly, step-by-step guide to connect **GitHub to VS Code** and **VS Code to GitHub**.

---

## Part 1: GitHub ➜ VS Code (Clone Repository)

### 1. Create a Repository on GitHub

1. Open GitHub
2. Click **New Repository**
3. Enter repository name
4. Check **Add a README.md**
5. Click **Create Repository**

---

### 2. Open VS Code

1. Open **VS Code**
2. Open **Terminal** (Ctrl + `)

---

### 3. Check Git Installation

```bash
git --version
```

If Git is installed, the version will be shown.

---

### 4. Clone GitHub Repository

1. Copy the **HTTPS link** from GitHub
2. In VS Code terminal, type:

```bash
git clone <repository_https_link>
```

3. Enter

Your GitHub repository is now cloned into VS Code.

---

### 5. Open the Cloned Folder

```bash
cd repository_name
```

Now you are inside the project folder.

---

## Part 2: VS Code ➜ GitHub (Push Changes)

### 6. Initialize Git (If Not Initialized)

```bash
git init
```

---

### 7. Create or Edit Files

1. Click **New File**
2. Give a file name (example: `join_process.md`)
3. Write your content
4. Save the file

---

### 8. Check Git Status

```bash
git status
```

You will see **untracked files** if files are not added yet.

---

### 9. Add Files to Git

Add a single file:

```bash
git add join_process.md
```

Add all files:

```bash
git add .
```

---

### 10. Commit Changes

```bash
git commit -m "Initial commit"
```

---

### 11. Connect Remote Repository (If Needed)

```bash
git remote add origin <repository_https_link>
```

Check remote:

```bash
git remote -v
```

---

### 12. Push Code to GitHub

```bash
git push origin main
```

Refresh GitHub — your files will be uploaded 🎉

---

## Common Errors & Fixes

### Folder Not Found

* Use `ls` to list folders
* Ensure exact folder name

### Folder Name With Space

```bash
cd "folder name"
```

### Wrong Command

❌ `git puch origin main`

✅ `git push origin main`

---

## Best Practices

* Use lowercase folder names
* Avoid spaces (use `_` instead)
* Write clear commit messages

Example:

```
vs_code_to_github
```

---

## Author

**Irfan Khan**

Beginner-friendly Git & GitHub learning project 🚀
