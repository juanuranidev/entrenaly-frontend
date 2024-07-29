import { merge } from "lodash";
import Tab from "./Tab";
import Tabs from "./Tabs";
import Card from "./Card";
import Link from "./Link";
import Alert from "./Alert";
import Dialog from "./Dialog";
import Button from "./Button";
import TableCell from "./TableCell";
import IconButton from "./IconButton";
import ButtonBase from "./ButtonBase";
import ListItemButton from "./ListItemButton";
import { Theme } from "lib/types/theme.types";

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    Link(),
    Tabs(),
    Tab(theme),
    Card(theme),
    ButtonBase(),
    Alert(theme),
    Button(theme),
    Dialog(theme),
    TableCell(theme),
    IconButton(theme),
    ListItemButton(theme)
  );
}
