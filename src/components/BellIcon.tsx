import BellDefaultIcon from "@/assets/BellDefaultIcon";
import BellNotificationIcon from "@/assets/BellNotificationIcon";

interface BellIconProps {
  hasNotification: boolean;
}

const BellIcon = ({ hasNotification }: BellIconProps) => {
  return (
    <div>
      {hasNotification ? <BellNotificationIcon /> : <BellDefaultIcon />}
    </div>
  );
};

export default BellIcon;
