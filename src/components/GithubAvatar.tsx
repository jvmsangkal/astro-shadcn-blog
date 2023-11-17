import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const GithubAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/jvmsangkal.png" alt="@jvmsangkal" />
      <AvatarFallback>JV</AvatarFallback>
    </Avatar>
  );
};

export default GithubAvatar;
