import { isLightBackground } from "@/utils";

type CategoryListItemProps = {
  label: string;
  count: number;
  color: string;
  selected?: boolean;
};

export default function CategoryListItem({
  label,
  count,
  color,
  selected = false,
}: CategoryListItemProps) {
  return (
    <li
      className={`flex cursor-pointer flex-row items-center justify-start gap-4 border-l-2 px-4 py-3 hover:bg-gradient-to-r hover:from-primary/20 ${selected ? "border-primary" : ""}`}
    >
      <p className="text-sm font-medium">{label}</p>
      <span
        className={`rounded-lg px-3 py-1 text-sm font-semibold text-current ${isLightBackground(color) ? "text-black" : "text-white"}`}
        style={{
          backgroundColor: color,
        }}
      >
        {count}
      </span>
    </li>
  );
}
