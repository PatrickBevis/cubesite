export function RandomColor() {
    const colors = ["bg-yellow-300", "bg-red-300", "bg-cyan-300", "bg-green-300", "bg-purple-300"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  