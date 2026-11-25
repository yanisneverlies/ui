"""Adds or updates registry.json items for components in src/components/ui from their real imports.
Usage: python3 scripts/registry-sync.py name [name ...]"""
import json, pathlib, re, sys

root = pathlib.Path(__file__).resolve().parent.parent
reg_path = root / "registry.json"
reg = json.loads(reg_path.read_text())
items = {item["name"]: item for item in reg["items"]}
NPM_MAP = {"@ui-sdk/react": ["@ui-sdk/react", "@ui-sdk/core"]}

for name in sys.argv[1:]:
    src = (root / "src/components/ui" / f"{name}.tsx").read_text()
    imports = re.findall(r'from "([^"]+)"', src)
    deps, reg_deps = [], ["@yanisneverlies/theme", "@yanisneverlies/utils"]
    for imp in imports:
        if imp.startswith("@/lib/sound"):
            reg_deps.append("@yanisneverlies/sound")
        elif imp.startswith("./"):
            reg_deps.append(f"@yanisneverlies/{imp[2:]}")
        elif imp.startswith("@/components/ui/"):
            reg_deps.append(f"@yanisneverlies/{imp.split('/')[-1]}")
        elif imp.startswith(("@/", "react")):
            continue
        else:
            pkg = "/".join(imp.split("/")[:2]) if imp.startswith("@") else imp.split("/")[0]
            deps.extend(NPM_MAP.get(pkg, [pkg]))
    doc = re.search(r"/\*\*\s*\n?\s*\*?\s*(.+?)(?:\n|\*/)", src)
    title = " ".join(w.capitalize() for w in name.split("-"))
    item = items.get(name, {"name": name})
    item.update({
        "type": "registry:ui",
        "title": title,
        "description": item.get("description") or (doc.group(1).strip().rstrip(".") + "." if doc else title),
        "dependencies": sorted(set(deps)),
        "registryDependencies": sorted(set(reg_deps)),
        "files": [{"path": f"src/components/ui/{name}.tsx", "type": "registry:ui"}],
    })
    if name not in items:
        reg["items"].append(item)
    items[name] = item
    print(name, item["dependencies"], item["registryDependencies"])

reg_path.write_text(json.dumps(reg, indent=2) + "\n")
