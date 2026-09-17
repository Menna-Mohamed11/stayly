import {
  Search,
  Heart,
  User,
  Menu,
  Globe,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  SlidersHorizontal,
  Calendar,
  Users,
  Wifi,
  Tv,
  Car,
  WashingMachine,
  Snowflake,
  PawPrint,
  KeyRound,
  Zap,
  House,
  Star,
  Plus,
  Minus,
  X,
  Map,
  Info,
  Check,
} from "lucide-react";

function Icon({
  name,
  size = 20,
  strokeWidth = 1.8,
  className = "",
  filled = false,
}) {
  const icons = {
    search: Search,
    heart: Heart,
    user: User,
    menu: Menu,
    globe: Globe,

    chevronDown: ChevronDown,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,

    arrowLeft: ArrowLeft,
    arrowRight: ArrowRight,

    filter: SlidersHorizontal,
    sliders: SlidersHorizontal,

    calendar: Calendar,
    users: Users,

    wifi: Wifi,
    tv: Tv,
    car: Car,
    washer: WashingMachine,
    snow: Snowflake,
    paw: PawPrint,

    key: KeyRound,
    bolt: Zap,
    home: House,

    star: Star,

    plus: Plus,
    minus: Minus,
    x: X,

    map: Map,
    info: Info,
    check: Check,
  };

  const LucideIcon = icons[name];

  // Prevent errors if an icon name doesn't exist
  if (!LucideIcon) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }

  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

export default Icon;