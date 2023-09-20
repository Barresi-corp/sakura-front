import { cn } from "@utils/utils";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import SettingButton from "../button/setting-button/setting-button";
import { Avatar, AvatarFallback } from "../avatar/avatar";
import { AvatarImage } from "../avatar/avatar";
import { useTheme } from "@components/theme-provider/theme-provider";
import Logo from "../logo/logo";

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string;
  avatar?: string;
}

const Header: FC<HeaderProps> = ({ className, avatar, ...props }) => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = (theme: string) => {
    setTheme("light");

    if (theme == "dark") {
      setTheme("light");
    } else if (theme == "light") {
      setTheme("dark");
    }
  };

  return (
    <header
      className={cn(
        "max-w-[100%] h-[54px] md:h-[84px] flex items-center justify-between py-[10px] px-[20px] bg-background rounded-[10px] rounded-tl-none rounded-tr-none z-[100] ",
        className,
      )}
      {...props}
    >
      <Logo isAdaptive />

      <div className="flex items-center justify-center gap-[15px]">
        <SettingButton icon="theme" onClick={() => toggleTheme(theme)} />
        <SettingButton icon="notification" />

        <Avatar className="translate-y-[3px]">
          <AvatarImage src={avatar} />
          <AvatarFallback>Avatar</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
