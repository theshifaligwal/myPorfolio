import sys
msg = sys.stdin.read().strip()
replacements = {
    "Initial portfolio commit": "feat: initialize portfolio website",
    "Update brand monogram and styling": "feat: add monogram brand styling",
    "Restore hero illustration motion": "fix: restore hero illustration motion",
    "fix: restore hero illustration motion": "fix: restore hero illustration motion",
}
print(replacements.get(msg, msg))
