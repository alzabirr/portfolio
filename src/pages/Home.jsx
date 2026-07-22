import Profile from "../components/Profile";
import TechStack from "../components/TechStack";
import GithubCalendar from "../components/GithubCalendar";

export default function Home() {
  return (
    <>
      <Profile />
      <TechStack />
      <GithubCalendar />
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-semibold">Let's work together.</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          Have an idea? Let's build something amazing together.
        </p>
      </div>
    </>
  );
}
