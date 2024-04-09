import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Icons = {
  person: (props: any) => <PersonIcon {...props} />,
  more: (props: any) => <MoreHorizIcon {...props} />,
  checkBox: (props: any) => <CheckBoxIcon {...props} />,
};

export default Icons;
