import { merge } from "lodash";
import Tab from "./Tab";
import Tabs from "./Tabs";
import Card from "./Card";
import Link from "./Link";
import Button from "./Button";
import TableCell from "./TableCell";
import IconButton from "./IconButton";
import ListItemButton from "./ListItemButton";
import ButtonBase from "./ButtonBase";

export default function ComponentsOverrides(theme: any) {
  return merge(
    Link(),
    Tabs(),
    Button(),
    Tab(theme),
    Card(theme),
    ButtonBase(),
    TableCell(theme),
    IconButton(theme),
    ListItemButton(theme)
  );
}
