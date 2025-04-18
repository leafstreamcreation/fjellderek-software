import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
    offset: {
      topleft: "relative -top-1 -left-1 md:-top-2 md:-left-2",
      topright: "relative -top-1 -right-1 md:-top-2 md:-right-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      offset: [
        "topleft",
        "topright",
      ],
      class: "text-shadow-lg bg-clip-text text-transparent bg-gradient-to-b"
    }
  ],
});

export const subtitle = tv({
  base: "my-2 md:text-xl sm:text-lg font-semibold lg:text-2xl inline max-w-full",
  variants: {
    color: {
      default: "text-default-600",
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    fullWidth: {
      true: "w-full block",
    },
    offset: {
      topleft: "relative -top-1 -left-1 md:-top-2 md:-left-2",
      topright: "relative -top-1 -right-1 md:-top-2 md:-right-2",
    },
    italic: {
      true: "italic",
    },
  },
  defaultVariants: {
    color: "default",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const text = tv({
  base: "my-2 text-sm lg:text-base text-default-600 inline max-w-full",
  variants: {
    color: {
      default: "text-default-600",
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    fullWidth: {
      true: "w-full",
    },
    textWrap: {
      wrap: "text-wrap",
      none: "text-nowrap",
      balance: "text-balance",
      pretty: "text-pretty",
    }
  },
  defaultVariants: {
    color: "default",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});
