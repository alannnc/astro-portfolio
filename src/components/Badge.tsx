interface IBadge {
  children: React.ReactNode;
}

const colors = [
  "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
];

const Badge = (props: IBadge) => {
  const pickRandomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <span
      className={`text-md font-medium mr-2 my-2 px-4 py-0.5 rounded ${pickRandomColor}`}
    >
      {props.children}
    </span>
  );
};

export { Badge };
