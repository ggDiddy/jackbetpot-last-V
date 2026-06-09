from pathlib import Path

patterns = {
    'href="casinos"': 'href="casinos.html"',
    "href='casinos'": "href='casinos.html'",
    'href="predictions"': 'href="predictions.html"',
    "href='predictions'": "href='predictions.html'",
    'href="betting-school"': 'href="betting-school.html"',
    "href='betting-school'": "href='betting-school.html'",
    'href="faq"': 'href="faq.html"',
    "href='faq'": "href='faq.html'",
    'href="sportsbooks"': 'href="sportsbooks.html"',
    "href='sportsbooks'": "href='sportsbooks.html'",
}

root = Path(r'c:\Users\rober\Documents\vsc\jackbetpot-last-V')
updated = []

for path in root.rglob('*.html'):
    text = path.read_text(encoding='utf-8')
    new_text = text
    for old, new in patterns.items():
        new_text = new_text.replace(old, new)
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        updated.append(str(path))

print('Updated files:', len(updated))
for p in updated:
    print(p)
