import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Chip,
  Card,
  CardBody,
  CardFooter,
  addToast
} from "@heroui/react";
import {
  PiArrowCounterClockwise,
  PiRocketLaunch,
  PiRobot,
} from "react-icons/pi";


// Easter egg state
let clickCount = 0;

export default function ErrorNotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [redirectActive, setRedirectActive] = useState(true);

  const robotRef = useRef<HTMLDivElement>(null);

  // Countdown and redirect
  useEffect(() => {
    if (!redirectActive) return;
    if (countdown === 0) {
      navigate("/", { replace: true });
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, redirectActive, navigate]);

  // Easter egg: triple click cancels redirect and shows toast
  const handleRobotClick = () => {
    clickCount += 1;
    if (clickCount === 3) {
      setRedirectActive(false);
      addToast({
        title: "Easter Egg!",
        description: "Redirect canceled. You must escape manually.",
        timeout: 4000,
      });
      clickCount = 0;
    }
    setTimeout(() => {
      if (clickCount > 0) clickCount = 0;
    }, 1500);
  };

  const message = "This page is training its AI model... please check back later.";

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 relative overflow-hidden flex items-center justify-center">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(18,55,88,0.07)_1px,transparent_1px)] [background-size:32px_32px]"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-secondary-50/40 to-primary-100/30 dark:from-transparent dark:via-primary-900/60 dark:to-primary-950/80" />
      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-12 w-full">
        <Card className="max-w-lg w-full h-full shadow-2xl bg-white/80 dark:bg-primary-950/80 backdrop-blur-md border border-primary-100 dark:border-primary-800">
          <CardBody className="flex flex-col items-center text-center mt-8 pt-8">
            {/* Animated robot */}
            <div
              ref={robotRef}
              onClick={handleRobotClick}
              className="cursor-pointer select-none"
              tabIndex={0}
              aria-label="Confused robot illustration"
            >
              <PiRobot
                className="w-20 h-20 text-primary-500 dark:text-secondary-400 animate-bounce drop-shadow-lg"
                aria-hidden
              />
            </div>
            <Chip
              color="secondary"
              variant="flat"
              className="mb-2 text-lg font-semibold"
            >
              404 Error
            </Chip>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-pulse text-primary-900 dark:text-secondary-300 drop-shadow-[0_0_8px_rgba(13,166,212,0.18)]">
              {message}
            </h1>
            <p className="text-lg text-default-600 dark:text-default-300 mb-2">
              Sorry, we couldn't find the page you were looking for.
            </p>
            {/* Countdown timer */}
            {redirectActive && (
              <div className="flex items-center gap-2 text-default-500 dark:text-default-400 text-sm">
                <span>
                  Redirecting to <span className="font-semibold text-primary-700 dark:text-secondary-300">Home</span> in
                </span>
                <span className="font-mono text-lg text-secondary-500 dark:text-secondary-300 animate-pulse">
                  {countdown}
                </span>
                <span>seconds...</span>
              </div>
            )}
          </CardBody>
          <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              color="primary"
              variant="flat"
              radius="full"
              size="lg"
              startContent={<PiArrowCounterClockwise className="w-5 h-5" />}
              className="transition-all duration-200 hover:bg-primary-600 hover:scale-105 dark:hover:bg-secondary-500"
              onPress={() => window.location.reload()}
            >
              Try Again
            </Button>
            <Button
              color="secondary"
              variant="solid"
              radius="full"
              size="lg"
              startContent={<PiRocketLaunch className="w-5 h-5" />}
              className="transition-all duration-200 hover:bg-secondary-400 hover:scale-105 dark:hover:bg-primary-500"
              onPress={() => navigate("/")}
            >
              Back to Home
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}

// Custom bounce animations (add to your tailwind.config if not present):
// .animate-bounce-slow { animation: bounce 2.5s infinite; }
// .animate-bounce-slow2 { animation: bounce 3.2s infinite 1s; }