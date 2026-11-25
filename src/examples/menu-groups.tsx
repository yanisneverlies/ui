import { Menu, MenuContent, MenuGroup, MenuGroupLabel, MenuItem, MenuSeparator, MenuTrigger } from "@/components/ui/menu"
import { Button } from "@/components/ui/button"

export default function MenuGroups() {
  return (
    <Menu>
      <MenuTrigger render={<Button />}>Reading options</MenuTrigger>
      <MenuContent>
        <MenuGroup>
          <MenuGroupLabel>Letter 12</MenuGroupLabel>
          <MenuItem value="copy-quote">Copy quote</MenuItem>
          <MenuItem value="copy-link">Copy link</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>View</MenuGroupLabel>
          <MenuItem value="focus-mode" shortcut="mod+shift+f">
            Focus mode
          </MenuItem>
          <MenuItem value="footnotes">Show footnotes</MenuItem>
          <MenuItem value="analysis" disabled>
            Show analysis
          </MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  )
}
