import { FC } from "react";
import { useTheme } from "../theme-provider/theme-provider";
import Input from "@ui/form/input/input";
import Textarea from "@ui/form/textarea/textarea";
import Button from "@ui/button/button";
import { AvatarFallback, AvatarImage } from "@ui/avatar/avatar";
import { Avatar } from "@ui/avatar/avatar";
import Sidebar from "@ui/sidebar/sidebar";
import NavButton from "@ui/button/nav-button/nav-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/form/select/select";
import Search from "@ui/form/search/search";
import ActionButton from "@ui/button/action-button/action-button";
import MessageCard from "@ui/card/message-card/message-card";
import LikedCard from "@ui/card/liked-card/liked-card";
import RequestCard from "@ui/card/request-card/request-card";

import andrey from "@assets/andrey.png";
import suba from "@assets/478889.jpg";
import suba2 from "@assets/478889_photo-resizer.ru.jpg";

const App: FC = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = (theme: string) => {
    if (theme == "dark") {
      setTheme("light");
    } else if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const icon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3786 8.94975L8.96373 18.3648C8.68452 18.644 8.32892 18.8343 7.94174 18.9117L5 19.5001L5.58835 16.5583C5.66579 16.1711 5.85609 15.8155 6.13529 15.5363L15.5502 6.12132M18.3786 8.94975L19.7928 7.53553C20.1834 7.14501 20.1834 6.51184 19.7928 6.12132L18.3786 4.70711C17.9881 4.31658 17.3549 4.31658 16.9644 4.70711L15.5502 6.12132M18.3786 8.94975L15.5502 6.12132"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const menuIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="User Circle">
        <path
          id="Vector 1"
          d="M16.9696 19.5047C16.7257 17.5293 15.0414 16 13 16H11C8.95858 16 7.27433 17.5293 7.03036 19.5047M16.9696 19.5047C19.3986 17.893 21 15.1335 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 15.1335 4.60137 17.893 7.03036 19.5047M16.9696 19.5047C15.5456 20.4496 13.8371 21 12 21C10.1629 21 8.45441 20.4496 7.03036 19.5047M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  return (
    <div className="pb-4">
      <div className="mt-4 flex justify-center items-center fixed top-0 left-[50%] translate-x-[-50%] z-10">
        <Button onClick={() => toggleTheme(theme)}>Change Theme</Button>
      </div>

      <h1 className="text-center text-4xl mt-16 text-red-500">Inputs</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input className="min-w-[400px]" placeholder="Login" type="text" />
          <Textarea className="min-w-[400px]" placeholder="Text" />

          <Select>
            <SelectTrigger className="min-w-[400px] px-5 py-4">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input className="min-w-[400px]" placeholder="Password" type="password" />
          <Textarea className="min-w-[400px]" placeholder="Text" />

          <Select>
            <SelectTrigger className="min-w-[400px] px-5 py-4">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
              <SelectItem value="light1">Light</SelectItem>
              <SelectItem value="dark1">Dark</SelectItem>
              <SelectItem value="system1">System</SelectItem>
              <SelectItem value="light2">Light</SelectItem>
              <SelectItem value="dark2">Dark</SelectItem>
              <SelectItem value="system2">System</SelectItem>
              <SelectItem value="light3">Light</SelectItem>
              <SelectItem value="dark3">Dark</SelectItem>
              <SelectItem value="system3">System</SelectItem>
              <SelectItem value="light4">Light</SelectItem>
              <SelectItem value="dark4">Dark</SelectItem>
              <SelectItem value="system4">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input
            error="Error"
            minLength={4}
            required
            className="min-w-[400px]"
            placeholder="Login"
            type="text"
          />
          <Textarea error="Error" className="min-w-[400px]" placeholder="Text" />
        </div>

        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input
            error="Error"
            className="min-w-[400px]"
            placeholder="Password"
            type="password"
          />
          <Textarea error="Error" className="min-w-[400px]" placeholder="Text" />
        </div>
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Form</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-4 flex flex-col justify-center items-center gap-4 flex-wrap"
      >
        <Input
          className="w-[400px]"
          minLength={4}
          type="text"
          placeholder="Login"
          required
        />
        <Input
          className="w-[400px]"
          minLength={8}
          type="password"
          placeholder="Password"
          required
        />
        <Textarea className="w-[400px]" placeholder="Your Comment" />
        <Button className="w-[400px]" type="submit" variant={"default"}>
          Send
        </Button>
      </form>

      <h1 className="text-center text-4xl mt-8 text-red-500">Buttons</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Button icon={icon} variant="default">
            Добавить в друзья
          </Button>
          <Button icon={icon} variant="secondary">
            Добавить в друзья
          </Button>
          <Button icon={icon} variant="link">
            Добавить в друзья
          </Button>
          <Button icon={icon} variant="outline">
            Добавить в друзья
          </Button>
        </div>
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Avatar</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <Avatar className="w-[190px] h-[190px]" text="Андрей">
          <AvatarImage src={andrey} className="" />
          <AvatarFallback>Andrey</AvatarFallback>
        </Avatar>

        <Avatar className="w-[190px] h-[190px]" text="Subaru 2000x1000">
          <AvatarImage src={suba} className="rounded-none" />
          <AvatarFallback>Subaru</AvatarFallback>
        </Avatar>

        <Avatar className="w-[190px] h-[190px]" text="Subaru 300x150">
          <AvatarImage src={suba2} className="rounded-none" />
          <AvatarFallback>Subaru</AvatarFallback>
        </Avatar>

        <Avatar className="rounded-none w-[190px] h-[190px]" text="Subaru 2000x1000">
          <AvatarImage src={suba} className="rounded-none" />
          <AvatarFallback>Subaru</AvatarFallback>
        </Avatar>

        <Avatar className="rounded-none w-[190px] h-[190px]" text="Subaru 300x150">
          <AvatarImage src={suba2} className="rounded-none" />
          <AvatarFallback>Subaru</AvatarFallback>
        </Avatar>

        <p className="mt-4 text-xl text-red-500">
          Даже если делать квадратные аватары, а сверху накладывать маску, то все будет
          также, я думаю. <br /> Игра с размером не сработала, вроде как. Потом еще
          посмотрю
        </p>
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Menu buttons</h1>

      <div className="mt-4 flex flex-col justify-center items-center gap-4 flex-wrap">
        <NavButton icon={menuIcon}>Моя страница</NavButton>

        <NavButton badge={4} variant="text">
          Моя страница
        </NavButton>
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Sidebar</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <Sidebar />
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Search</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <Search className="min-w-[300px] lg:min-w-[600px]" />
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Action buttons</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <ActionButton action="like">10</ActionButton>
        <ActionButton action="comment">10</ActionButton>
        <ActionButton action="share">10</ActionButton>
      </div>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <ActionButton action="like" variant="text">
          10
        </ActionButton>
        <ActionButton action="comment" variant="text">
          10
        </ActionButton>
        <ActionButton action="share" variant="text">
          10
        </ActionButton>
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Notifications</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <MessageCard
          data={{
            img: andrey,
            imgFallback: "Andrey",
            name: "Андрей Петров",
            message: "Привет, как дела?",
            date: "вчера",
            badge: "2",
          }}
        />
        <MessageCard
          data={{
            img: andrey,
            imgFallback: "Andrey",
            name: "Андрей Петров",
            message: "Там прислали новые баги!",
            date: "вчера",
            badge: "2",
          }}
        />
      </div>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <LikedCard
          img={andrey}
          imgFallback="Andrey"
          name="Андрей Петров"
          date="10 минут назад"
        />

        <LikedCard
          img={andrey}
          imgFallback="Andrey"
          name="Андрей Петров"
          date="10 минут назад"
        />
      </div>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <RequestCard
          img={andrey}
          imgFallback="Andrey"
          name="Андрей Петров"
          date="30 минут назад"
        />

        <RequestCard
          img={andrey}
          imgFallback="Andrey"
          name="Андрей Петров"
          date="30 минут назад"
        />
      </div>
    </div>
  );
};

export default App;
