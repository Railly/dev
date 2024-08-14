export function getTagClasses(tag: string): string {
  switch (tag.toLowerCase()) {
    case "rust":
      return "bg-orange-100 text-orange-800 dark:bg-orange-600/30 dark:text-foreground";
    case "math":
      return "bg-blue-100 text-blue-800 dark:bg-blue-600/30 dark:text-foreground";
    case "project":
      return "bg-purple-100 text-purple-800 dark:bg-purple-600/30 dark:text-foreground";
    case "learning":
      return "bg-green-100 text-green-800 dark:bg-green-600/30 dark:text-foreground";
    case "achievement":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-600/30 dark:text-foreground";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-600/30 dark:text-foreground";
  }
}

export function getStatusClasses(status: string): string {
  switch (status.toLowerCase()) {
    case "backlog":
    case "backlog/research":
      return "bg-gray-100 text-gray-800 dark:bg-gray-600/30 dark:text-foreground";
    case "planning":
      return "bg-blue-100 text-blue-800 dark:bg-blue-600/30 dark:text-foreground";
    case "in progress":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-600/30 dark:text-foreground";
    case "done":
      return "bg-green-100 text-green-800 dark:bg-green-600/30 dark:text-foreground";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-600/30 dark:text-foreground";
  }
}
