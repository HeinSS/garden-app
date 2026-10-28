# Task 12: Complete the GitHub workflow

**The ZIP contains a REAL local Git repository with three branches and commits.**
It does **not** create a GitHub repository, issues or pull requests for you.

## 1. Extract and open PowerShell in `garden-app`

Run `git status` and `git branch -v`. The prepared branches are:
- `main` — original starter files
- `feature/interactive-input` — Issue 1, prompts for season and plant type
- `feature/refactor-advice` — Issue 2, functions and tests (built on Issue 1)

If Git prompts for your identity before future commits:
```
git config user.name "Your Name"
git config user.email "your-real-github-email@example.com"
```
The starter commits have a placeholder coursework identity; your later commits should use yours.

## 2. Create a PUBLIC GitHub repository

On https://github.com/new create `garden-app` as **Public**.
Do not tick "Add a README", `.gitignore` or license because this local project already has commits.

Copy your real GitHub URL and run:
```
git remote add origin https://github.com/YOUR-USERNAME/garden-app.git
git push -u origin main
```
If `origin` already exists, use `git remote set-url origin YOUR-URL`.

## 3. Create two GitHub issues

Under the GitHub **Issues** tab, create:
- **Issue 1: Replace hardcoded values with interactive prompts.**
  Description: "Ask the user for season and plant type, display advice in the page, and preserve existing advice rules."
- **Issue 2: Refactor advice into functions and add tests.**
  Description: "Extract advice generation into a reusable function, add explanatory comments and automated tests."

Record the issue numbers; GitHub might not assign #1 and #2.

## 4. Push branch 1 and open PR 1

```
git checkout feature/interactive-input
git push -u origin feature/interactive-input
```
On GitHub, create a PR **from `feature/interactive-input` into `main`**.
Title: "Add interactive garden advice inputs".
Description: "Implements Issue #1. Adds browser prompts and visible advice output."
Review **Files changed**, merge PR, and close the related issue (if it did not close automatically).

Then update your local main:
```
git checkout main
git pull origin main
```

## 5. Push branch 2 and open PR 2

```
git checkout feature/refactor-advice
node test_garden_advice.js
git push -u origin feature/refactor-advice
```
Create PR **from `feature/refactor-advice` into `main`**.
Because this branch was created from branch 1, PR 2 should show only the refactor/test changes **after PR 1 is merged**.
Title: "Refactor garden advice and add tests".
Description: "Implements Issue #2. Extracts reusable advice function, documents code, and tests expected outputs."
Review **Files changed**, merge PR, close the issue.

Finally:
```
git checkout main
git pull origin main
node test_garden_advice.js
git status
```

## 6. Required repo.txt

Create `repo.txt` in the task submission folder, containing your REAL URL:
`https://github.com/YOUR-USERNAME/garden-app`

Replace `YOUR-USERNAME` before submission.
Optionally add it to GitHub:
```
git add repo.txt
git commit -m "Add repository link for coursework"
git push origin main
```

## Final submission checklist

- Public `garden-app` repository exists and is accessible.
- Original starter file was committed.
- Two GitHub issues exist.
- Two branches pushed, two PRs created and merged.
- Both issues closed.
- Main branch contains interactive prompts, refactored advice and passing tests.
- `repo.txt` contains the actual repository URL.
- Upload required task files and request review.

No npm or React installation is needed for this assignment.
