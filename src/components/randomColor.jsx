export function RandomColor() {
    const colors = ["bg-yellow-300", "bg-red-300", "bg-cyan-300", "bg-green-300", "bg-purple-300"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  //  "dark:bg-blue-900", "dark:bg-emerald-900", "dark:bg-purple-900", "dark:bg-pink-900", "dark:bg-red-900"