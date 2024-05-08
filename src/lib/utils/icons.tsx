import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import FeedIcon from "@mui/icons-material/Feed";
import UndoIcon from "@mui/icons-material/Undo";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PowerSettingsNewSharpIcon from "@mui/icons-material/PowerSettingsNewSharp";

const Icons = {
  person: (props: any) => <PersonIcon {...props} />,
  more: (props: any) => <MoreHorizIcon {...props} />,
  checkBox: (props: any) => <CheckBoxIcon {...props} />,
  power: (props: any) => <PowerSettingsNewSharpIcon {...props} />,
  menu: (props: any) => <MenuIcon {...props} />,
  close: (props: any) => <CloseIcon {...props} />,
  add: (props: any) => <AddIcon {...props} />,
  account: (props: any) => <AccountCircleIcon {...props} />,
  plans: (props: any) => <FeedIcon {...props} />,
  edit: (props: any) => <EditIcon {...props} />,
  undo: (props: any) => <UndoIcon {...props} />,
  pdfs: (props: any) => <PictureAsPdfIcon {...props} />,
  expandMore: (props: any) => <ExpandMoreIcon {...props} />,
};

export default Icons;
