import { SvgIconProps } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import FeedIcon from "@mui/icons-material/Feed";
import UndoIcon from "@mui/icons-material/Undo";
import EditIcon from "@mui/icons-material/Edit";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DownloadIcon from "@mui/icons-material/Download";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PowerSettingsNewSharpIcon from "@mui/icons-material/PowerSettingsNewSharp";

const Icons = {
  person: (props: SvgIconProps) => <PersonIcon {...props} />,
  more: (props: SvgIconProps) => <MoreHorizIcon {...props} />,
  checkBox: (props: SvgIconProps) => <CheckBoxIcon {...props} />,
  power: (props: SvgIconProps) => <PowerSettingsNewSharpIcon {...props} />,
  menu: (props: SvgIconProps) => <MenuIcon {...props} />,
  close: (props: SvgIconProps) => <CloseIcon {...props} />,
  add: (props: SvgIconProps) => <AddIcon {...props} />,
  account: (props: SvgIconProps) => <AccountCircleIcon {...props} />,
  plans: (props: SvgIconProps) => <FeedIcon {...props} />,
  edit: (props: SvgIconProps) => <EditIcon {...props} />,
  undo: (props: SvgIconProps) => <UndoIcon {...props} />,
  pdfs: (props: SvgIconProps) => <PictureAsPdfIcon {...props} />,
  expandMore: (props: SvgIconProps) => <ExpandMoreIcon {...props} />,
  image: (props: SvgIconProps) => <ImageIcon {...props} />,
  home: (props: SvgIconProps) => <HomeIcon {...props} />,
  search: (props: SvgIconProps) => <SearchIcon {...props} />,
  dumbbell: (props: SvgIconProps) => <FitnessCenterIcon {...props} />,
  visibilityOn: (props: SvgIconProps) => <VisibilityIcon {...props} />,
  visibilityOff: (props: SvgIconProps) => <VisibilityOffIcon {...props} />,
  download: (props: SvgIconProps) => <DownloadIcon {...props} />,
  down: (props: SvgIconProps) => <KeyboardArrowDownIcon {...props} />,
  calendar: (props: SvgIconProps) => <CalendarMonthIcon {...props} />,
};

export default Icons;
