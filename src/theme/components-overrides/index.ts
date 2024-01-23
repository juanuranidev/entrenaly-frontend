import { merge } from "lodash";
import Tab from "./Tab";
import Tabs from "./Tabs";
import Card from "./Card";
import Link from "./Link";
import Drawer from "./Drawer";
import Button from "./Button";
import TableCell from "./TableCell";
import IconButton from "./IconButton";
import InputLabel from "./InputLabel";
import OutlinedInput from "./OutlinedInput";

export default function ComponentsOverrides(theme: any) {
  return merge(
    Link(),
    Tabs(),
    Button(),
    Tab(theme),
    Card(theme),
    Drawer(theme),
    TableCell(theme),
    IconButton(theme),
    InputLabel(theme),
    OutlinedInput(theme)
  );
}
